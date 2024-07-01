import { GetServerSideProps } from 'next';
import React from 'react';
import Image from 'next/image';
import { fetchProductByNaziv } from '@/lib/utils';

interface Product {
  naziv: string;
  slikaSrc: string;
  cijena: string;
  kategorija: string;
  opis: string;
}

interface ProductPageProps {
  product: Product | null;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  if (!product) {
    return <p>Proizvod nije pronađen.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <figure className="pt-5">
          <Image
            src={
              'https://tommy.hr/_next/image?url=https%3A%2F%2Fspiza.tommy.hr%2Fmedia%2Fcache%2Fsylius_shop_api_' +
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
          <p>{product.opis}</p>
          <p className="text-xl text-zelena-200">{product.cijena} kn</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.kategorija}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (context) => {
  const { naziv } = context.query;

  if (!naziv || Array.isArray(naziv)) {
    return {
      props: {
        product: null,
      },
    };
  }

  const decodedNaziv = decodeURIComponent(naziv as string);  // Dekodiraj naziv iz URL-a
  console.log('Dekodirani naziv iz URL-a:', decodedNaziv);  // Debugging: Ispis dekodiranog naziva

  const originalNaziv = decodedNaziv.split('-').join(' ');  // Pretvori natrag u originalni naziv
  console.log('Originalni naziv za pretraživanje:', originalNaziv);  // Debugging: Ispis originalnog naziva

  try {
    const product = await fetchProductByNaziv(originalNaziv);
    console.log('Dohvaćeni proizvod:', product);  // Debugging: Ispis podataka o proizvodu

    return {
      props: {
        product: product || null,
      },
    };
  } catch (error) {
    console.error('Greška pri dohvaćanju proizvoda:', error);
    return {
      props: {
        product: null,
      },
    };
  }
};

export default ProductPage;
