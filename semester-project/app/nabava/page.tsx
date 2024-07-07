'use client';
import React, { useState, useEffect } from 'react';
import '@/app/globals.css';
import ProductCard from '@/components/ProductCard';
import { fetchProducts } from '@/lib/utils';
import Filter from '@/components/Filter';

// Define the Product interface
export interface Product {
  kategorija: string;
  naziv: string;
  cijena: number;
  slikaSrc: string;
  trgovina: string;
  id: string;
}

const DEFAULT_PRODUCTS_PER_PAGE = 20;

const Nabava = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(
    DEFAULT_PRODUCTS_PER_PAGE,
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetchProducts(
          productsPerPage,
          currentPage,
          selectedCategory,
          searchQuery,
        );

        if (response && response.data.productCollection) {
          setProducts(response.data.productCollection.items);
          const totalItems = response.data.productCollection.total;
          setTotalPages(Math.ceil(totalItems / productsPerPage));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, productsPerPage, selectedCategory, searchQuery]);

  if (!products.length) {
    if (searchQuery) {
      return (
        <div className="mt-auto flex h-full flex-col items-center justify-center text-2xl text-zelena-300">
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            productsPerPage={productsPerPage}
            setProductsPerPage={setProductsPerPage}
          />
          Nema treženog proizvoda.
        </div>
      );
    } else {
      return (
        <div className="mt-auto flex h-full flex-col items-center justify-center text-2xl text-zelena-300">
          Učitavanje proizvoda
          <span className="loading loading-ring loading-lg mb-32 mt-20 "></span>
        </div>
      );
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="mx-auto flex h-full w-full flex-col items-center justify-center text-zelena-300">
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        productsPerPage={productsPerPage}
        setProductsPerPage={setProductsPerPage}
      />

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {products.map((product) => (
          <ProductCard key={product.naziv} product={product} />
        ))}
      </div>

      <div className="join mb-16 mt-16">
        <button
          className="btn join-item text-zelena-300"
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        >
          «
        </button>
        <button className="btn join-item text-zelena-200">
          {currentPage} / {totalPages}
        </button>
        <button
          className="btn join-item text-zelena-300"
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
