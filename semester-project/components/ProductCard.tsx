import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: any }) => {
  const productName = product.naziv.split(' ').slice(0, 2).join(' ');
  const remainingWords = product.naziv.split(' ').slice(2).join(' ');

  return (
    <Link href={`/nabava/${product.sys.id}`}>
      <div className="duration-50 group card w-64 bg-base-100 shadow-[0px_0px_10px_5px_rgba(0,0,0,0.05)] hover:outline hover:outline-1 hover:outline-zelena-100">
        <figure className="pt-5">
          <Image
            src={
              'https://tommy.hr/_next/image?url=https%3A%2F%2Fspiza.tommy.hr%2Fmedia%2Fcache%2Fsylius_shop_api_' +
              product.slikaSrc
            }
            alt={product.naziv}
            width={150}
            height={150}
            className="product-image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          {remainingWords && (
            <p className="duration-200 hover:opacity-100 sm:opacity-50">
              {remainingWords}
            </p>
          )}
          <p className="text-xl text-zelena-200">{product.cijena}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.kategorija}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
