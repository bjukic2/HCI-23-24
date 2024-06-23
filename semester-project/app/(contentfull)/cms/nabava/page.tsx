'use client';
import React, { useState, useEffect } from 'react';
import '@/app/globals.css';
import ProductCard from '@/components/ProductCard';

// Define the Product interface
interface Product {
  kategorija: string;
  naziv: string;
  cijena: number;
  slikaSrc: string;
}

const DEFAULT_PRODUCTS_PER_PAGE = 20;

const Nabava = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(
    DEFAULT_PRODUCTS_PER_PAGE,
  );
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      const categoryFilter = selectedCategory
        ? `, where: { kategorija: "${selectedCategory}" }`
        : '';
      const productsQuery = `
        {
          productCollection(limit: ${productsPerPage}, skip: ${(currentPage - 1) * productsPerPage} ${categoryFilter} ${
            searchQuery ? `, where: { naziv_contains: "${searchQuery}" }` : ''
          }){
            total
            items {
              kategorija,
              naziv,
              cijena,
              slikaSrc
            }
          }
        }`;

      const categoriesQuery = `
      {
        productCollection {
          items {
            kategorija
          }
        }
      }`;

      try {
        const productsResponse = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query: productsQuery }),
          },
        );

        if (!productsResponse.ok) {
          throw new Error(`HTTP error! Status: ${productsResponse.status}`);
        }

        const { data: productsData, errors: productsErrors } =
          await productsResponse.json();
        if (productsErrors) {
          console.error(productsErrors);
        } else {
          setProducts(productsData.productCollection.items);
          setTotalPages(
            Math.ceil(productsData.productCollection.total / productsPerPage),
          );
        }

        const categoriesResponse = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query: categoriesQuery }),
          },
        );

        if (!categoriesResponse.ok) {
          throw new Error(`HTTP error! Status: ${categoriesResponse.status}`);
        }

        const { data: categoriesData, errors: categoriesErrors } =
          await categoriesResponse.json();
        if (categoriesErrors) {
          console.error(categoriesErrors);
        } else {
          const uniqueCategories: string[] = Array.from(
            new Set(
              categoriesData.productCollection.items.map(
                (item: Product) => item.kategorija,
              ),
            ),
          );
          setCategories(uniqueCategories);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProductsAndCategories();
  }, [currentPage, productsPerPage, selectedCategory, searchQuery]);

  if (!products.length) {
    return (
      <div className="mt-auto flex h-full flex-col items-center justify-center text-2xl text-zelena-300">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pretraži proizvode"
          className="input input-bordered mb-10"
        />
        Učitavanje proizvoda
        <span className="loading loading-ring loading-lg mt-20 mb-32 "></span>
      </div>
    );
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="mx-auto flex h-full w-full flex-col items-center justify-center text-zelena-300">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Pretraži proizvode"
        className="input input-bordered mb-10"
      />

      <select
        id="productsPerPage"
        value={productsPerPage}
        onChange={(e) => setProductsPerPage(Number(e.target.value))}
        className="select select-bordered mb-10"
      >
        <option disabled selected>
          Proizvoda po stranici:
        </option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      <div>
        <label htmlFor="categoryFilter" className="mr-2">
          Kategorija:{' '}
        </label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mb-16 rounded px-4 py-2 font-bold text-zelena-300 outline outline-zelena-300 hover:bg-zelena-300 hover:text-white"
        >
          <option value="">Sve kategorije</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product) => (
          <ProductCard key={product.naziv} product={product} />
        ))}
      </div>

      <div className="join mb-16 mt-16">
        <button
          className="btn join-item text-roza"
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        >
          «
        </button>
        <button className="btn join-item text-zelena-300">
          {currentPage} / {totalPages}
        </button>
        <button
          className="btn join-item text-roza"
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Nabava;
