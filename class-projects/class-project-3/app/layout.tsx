import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Class-project-3",
  description: "FESB UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} "flex min-h-screen items-center justify-between p-24`}
      >
        <nav>
          <ul className="flex justify-center gap-10 text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/popis">Popis</Link>
            </li>
            <li>
              <Link href="/nabava">Nabava</Link>
            </li>
            <li>
              <Link href="/zdravlje">Zdravlje</Link>
            </li>
            <li>
              <Link href="/profil">Profil</Link>
            </li>
          </ul>
        </nav>
        <main className="flex justify-center mt-12">{children}</main>
      </body>
    </html>
  );
}