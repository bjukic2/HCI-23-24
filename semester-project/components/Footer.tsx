import React from 'react';
import Link from 'next/link';
import LogoIcon from './icons/logoIcon';

export default function Footer() {
  return (
    <footer className="footer bg-base-200 p-10 text-zelena-300">
      <aside>
        <LogoIcon />
        <span className="whitespace-nowrap font-roboto-condensed text-3xl font-bold text-zelena-300">
          Pazzar
        </span>
      </aside>
      <nav>
        <h6 className="footer-title text-roza">Mapa</h6>
        <p className="link-hover link">
          <Link href="/">Početna</Link>
        </p>
        <p className="link-hover link">
          <Link href="/popis">Popis</Link>
        </p>
        <p className="link-hover link">
          <Link href="/cms/nabava">Nabava</Link>
        </p>
        <p className="link-hover link">
          <Link href="/zdravlje">Zdravlje</Link>
        </p>
        <p className="link-hover link">
          <Link href="/profil">Profil</Link>
        </p>
        <p className="link-hover link">
          <Link href="/blog">Blog</Link>
        </p>
      </nav>
      <nav>
        <h6 className="footer-title text-roza">Značajke</h6>
        <p>Cijene uživo</p>
        <p>Praćenje popusta</p>
        <p>Dijeljenje popisa</p>
        <p>Nutritivne informacije</p>
        <p>Pronalazak supermarketa</p>
      </nav>
      <nav>
        <h6 className="footer-title text-roza">Kontakt</h6>
        <p className="link-hover link">1-800-PAZZAR-SADA</p>
        <p className="link-hover link">info@pazzar.com</p>
        <p className="link-hover link">@pazzar_24</p>
        <p className="link-hover link">Ulica Štednje 12, Split</p>
      </nav>
    </footer>
  );
}
