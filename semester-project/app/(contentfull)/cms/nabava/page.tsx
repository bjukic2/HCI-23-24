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

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      const categoryFilter = selectedCategory ? `, where: { kategorija: "${selectedCategory}" }` : '';
      const productsQuery = `
      {
        productCollection(limit: ${productsPerPage}, skip: ${(currentPage - 1) * productsPerPage} ${categoryFilter}){
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

        const { data: productsData, errors: productsErrors } = await productsResponse.json();
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

        const { data: categoriesData, errors: categoriesErrors } = await categoriesResponse.json();
        if (categoriesErrors) {
          console.error(categoriesErrors);
        } else {
          const uniqueCategories: string[] = Array.from(new Set(
            categoriesData.productCollection.items.map((item: Product) => item.kategorija)
          ));
          setCategories(uniqueCategories);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProductsAndCategories();
  }, [currentPage, productsPerPage, selectedCategory]);

  if (!products.length) {
    return (
      <div className="flex mt-auto flex-col text-2xl h-full items-center justify-center text-brand-800">
        Učitavanje proizvoda
        <span className="mt-20 loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center text-brand-500">
      <div className="mb-4 flex space-x-4">
        <div>
          <label htmlFor="productsPerPage" className="mr-2">Proizvoda po stranici: </label>
          <select
            id="productsPerPage"
            value={productsPerPage}
            onChange={(e) => setProductsPerPage(Number(e.target.value))}
            className="rounded px-4 py-2 font-bold text-brand-800 outline outline-brand-800 hover:bg-brand-800 hover:text-white"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div>
          <label htmlFor="categoryFilter" className="mr-2">Kategorija: </label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded px-4 py-2 font-bold text-brand-800 outline outline-brand-800 hover:bg-brand-800 hover:text-white"
          >
            <option value="">Sve kategorije</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.naziv} product={product} />
        ))}
      </div>

      <div className="m-7 flex items-center justify-center">
        <button
          className="rounded px-4 py-2 font-bold text-brand-800 outline outline-brand-800 hover:bg-brand-800 hover:text-white"
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
        >
          Previous
        </button>
        <span className="mx-4 text-brand-900">
          {currentPage} / {totalPages}
        </span>
        <button
          className="rounded px-4 py-2 font-bold text-brand-800 outline outline-brand-800 hover:bg-brand-800 hover:text-white"
          onClick={() =>
            setCurrentPage((page) => Math.min(page + 1, totalPages))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Nabava;
