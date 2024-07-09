'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchProductById } from '@/lib/utils';
import { Product } from '@/app/nabava/page';

export default function ProductPage({ params }: { params: { _id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetchProductById(params._id);
        setProduct(response.data.product);
      } catch (error) {
        console.error('Error fetching product:', error);
        setProduct(null);
      }
    };

    loadProduct();
  }, [params._id]);

  if (!product) {
    return <p>Proizvod ${params._id} nije pronađen.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <figure className="pt-5">
          <Image
            src={
              product.trgovina === 'konzum'
              ? product.slikaSrc
              : 'https://tommy.hr/_next/image?url=https%3A%2F%2Fspiza.tommy.hr%2Fmedia%2Fcache%2Fsylius_shop_api_' +
                product.slikaSrc
            }
            alt={product.naziv}
            width={300}
            height={300}
            className="product-image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.naziv}</h2>
          <p>OPIS</p>
          <p className="text-xl text-zelena-200">{product.cijena} kn</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.kategorija}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
