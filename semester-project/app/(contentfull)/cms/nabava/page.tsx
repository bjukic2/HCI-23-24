"use client";
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
  const [productsPerPage, setProductsPerPage] = useState<number>(DEFAULT_PRODUCTS_PER_PAGE);

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
        const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const { data, errors } = await response.json();
        if (errors) {
          console.error(errors);
        } else {
          console.log('Data:', data);
          setProducts(data.productCollection.items);
          setTotalPages(Math.ceil(data.productCollection.total / productsPerPage));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, [currentPage, productsPerPage]);

  if (!products.length) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-lg flex flex-col items-center justify-center h-full text-brand-500">
      <div className="mb-4">
        <label htmlFor="productsPerPage">Proizvoda po stranici: </label>
        <select
          id="productsPerPage"
          value={productsPerPage}
          onChange={(e) => setProductsPerPage(Number(e.target.value))}
          className="border border-gray-300 rounded-md px-2 py-1"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.naziv} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center m-7">
        <button
          className="outline outline-brand-800 hover:bg-brand-800 hover:text-white text-brand-800 font-bold py-2 px-4 rounded"
          onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
        >
          Previous
        </button>
        <span className="mx-4 text-brand-900">
          {currentPage} / {totalPages}
        </span>
        <button
          className="outline outline-brand-800 hover:bg-brand-800 hover:text-white text-brand-800 font-bold py-2 px-4 rounded"
          onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>

    
  );
};

export default Nabava;