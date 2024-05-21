"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '@/app/globals.css';

// Define the Product interface
interface Product {
  proizvodIme: string;
  proizvodLink: string;
  proizvodCijena: number;
  proizvodSlika: {
    fileName: string;
    description: string;
    url: string;
  };
}

const query = `
{
  proizvodCollection {
    items {
      proizvodIme
      proizvodLink
      proizvodCijena
      proizvodSlika {
        fileName
        description
        url
      }
    }
  }
}`;

const Nabava = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
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
          setProducts(data.proizvodCollection.items);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  if (!products.length) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <article key={index} className="product">
          <Image 
            src={product.proizvodSlika.url} 
            alt={product.proizvodSlika.description}
            width={300}
            height={300} 
            className="product-image" 
          />
          <h2 className="product-name">{product.proizvodIme}</h2>
          <p className="product-price">Cijena: {product.proizvodCijena}€</p>
          <a href={product.proizvodLink} className="product-link">View Product</a>
        </article>
      ))}
    </div>
  );
};

export default Nabava;
