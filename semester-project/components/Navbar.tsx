'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import LogoIcon from './icons/logoIcon';
interface NavbarProps {
  // Record of string keys and string values where each value is a path starting with a slash
  pages: Record<string, `/${string}`>;
}

const baseClass =
  'uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-sm text-zelena-300 hover:bg-zelena-200 hover:text-white duration-200';

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="container mt-auto flex w-full flex-col justify-between p-4 md:flex-row">
      <div className="flex justify-between">
        <Link href="/">
          <div className="ml-2 mt-2 flex max-w-min items-center justify-between gap-1">
            <LogoIcon />
            <span className="whitespace-nowrap font-roboto-condensed text-4xl font-bold text-zelena-300">
              Pazzar
            </span>
          </div>
        </Link>
        {/* Hamburger Menu Icon */}
        <div
          className="mr-2 mt-4 cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="#183E28"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`z-20 items-center justify-center p-4 md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}
      >
        <ul className="flex flex-col gap-2 md:flex-row">
          {Object.entries(pages).map(([name, path]) => (
            <li key={name}>
              <Link href={path}>
                <span
                  className={cn(baseClass, {
                    'pointer-events-none text-zelena-100': path === pathName,
                  })}
                >
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
