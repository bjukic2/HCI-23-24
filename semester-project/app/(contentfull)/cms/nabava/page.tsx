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

function Nabava() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/dcgmj6c5ru3n`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer TuxTwnja4_5VcZyqibhnVJxTxC5Z1jqqk-sMiVZswx8",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setProducts(data.proizvodCollection.items);
      });
  }, []);

  if(!products.length) {
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
            className="product-image" />
          <h2 className="product-name">{product.proizvodIme}</h2>
          <p className="product-price">Cijena: {product.proizvodCijena}€</p>
          <a href={product.proizvodLink} className="product-link">View Product</a>
        </article>
      ))}
    </div>
  );
};

export default Nabava;
