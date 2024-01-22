import React from "react";
import "./Footer.css";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="footer-container">
            <div className="info-column">
                <h1 className="title">Mapa</h1>
                <p><Link href="/">Početna</Link></p>
                <p><Link href="/popis">Popis</Link></p>
                <p><Link href="/nabava">Nabava</Link></p>
                <p><Link href="/zdravlje">Zdravlje</Link></p>
                <p><Link href="/profil">Profil</Link></p>
                <p><Link href="/blog">Blog</Link></p>
            </div>
            <div className="info-column">
                <h1 className="title">Značajke</h1>
                <p>Cijene uživo</p>
                <p>Praćenje popusta</p>
                <p>Dijeljenje popisa</p>
                <p>Nutritivne informacije</p>
                <p>Pronalazak supermarketa</p>
            </div>
            <div className="info-column">
                <h1 className="title">Kontakt</h1>
                <p>1-800-EDUCAN-SADA</p>
                <p>info@educan.com</p>
                <p>@eDucan_24</p>
                <p>Ulica Štednje 12, Split</p>
            </div>
        </footer>
    );
}