import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export const fetchProductByNaziv = async (naziv: string) => {
  try {
    const url = `https://api.tommy.hr/products?naziv=${encodeURIComponent(naziv)}`;
    console.log('URL za dohvaćanje proizvoda:', url);  // Debugging: Ispis URL-a za dohvaćanje proizvoda
    
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await res.json();
    console.log('Dohvaćeni podaci o proizvodu:', data);  // Debugging: Ispis vraćenih podataka

    return data.product || null;
  } catch (error) {
    console.error('Greška pri dohvaćanju proizvoda:', error);
    return null;
  }
};




