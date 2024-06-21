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

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
      {
        productCollection(limit: ${productsPerPage}, skip: ${(currentPage - 1) * productsPerPage}){
          total
          items {
            kategorija,
            naziv,
            cijena,
            slikaSrc
          }
        }
      }`;

      try {
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/dcgmj6c5ru3n`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer TuxTwnja4_5VcZyqibhnVJxTxC5Z1jqqk-sMiVZswx8`,
            },
            body: JSON.stringify({ query }),
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const { data, errors } = await response.json();
        if (errors) {
          console.error(errors);
        } else {
          console.log('Data:', data);
          setProducts(data.productCollection.items);
          setTotalPages(
            Math.ceil(data.productCollection.total / productsPerPage),
          );
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, [currentPage, productsPerPage]);

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
      <div className="mb-4">
        <label htmlFor="productsPerPage">Proizvoda po stranici: </label>
        <select
          id="productsPerPage"
          value={productsPerPage}
          onChange={(e) => setProductsPerPage(Number(e.target.value))}
          className="rounded-md border border-gray-300 px-2 py-1"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
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
