import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product }: { product: any }) => (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <a className="shadow-lg relative mx-5 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
            <Image 
                src={"https://tommy.hr/_next/image?url=https%3A%2F%2Fspiza.tommy.hr%2Fmedia%2Fcache%2Fsylius_shop_api_" + product.slikaSrc} 
                alt={product.naziv}
                width={200}
                height={200} 
                className="product-image" 
            />
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">Tommy</span>
        </a>
        <div className="px-5 flex flex-col justify-between h-full">
            <div>
                <h5 className="mt-7 text-xl tracking-tight text-slate-900">{product.naziv}</h5>
                <span className="text-3xl font-bold text-slate-900">{product.cijena}</span>
            </div>
            <a href="#" className="mb-7 outline outline-brand-500 hover:bg-brand-500 hover:text-white text-brand-500 flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Detalji
            </a>
        </div>
    </div>
);

export default ProductCard;