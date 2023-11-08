import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lab Project",
  description: "FESB UI",
};

const pages = {
  Početna: "/",
  Popis: "/popis",
  Nabava: "/nabava",
  Zdravlje: "/zdravlje",
  Profil: "/profil",
  Blog: "/blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} "flex min-h-screen items-center justify-between p-24`}>
        <nav>
          <ul className="flex justify-center gap-10 text-lg">
          {Object.entries(pages).map(([name, path]) => (
            <li key={name}>
              <Link href={path}>{name}</Link>
            </li>
            ))}
          </ul>
        </nav>
        <main className="flex justify-center mt-12">{children}</main>
      </body>
    </html>
  );
}