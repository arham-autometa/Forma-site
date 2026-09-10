import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  axes: ["opsz"],

});

export const metadata: Metadata = {
  title: "Forma — Architecture & Interior Design",
  description:
    "Forma is an architecture and interior design firm creating houses, apartment buildings, boutique hotels, offices and cultural spaces, from first sketch through construction.",
  openGraph: {
    title: "Forma — Architecture & Interior Design",
    description:
      "Natural materials, considered proportions, and the relationship between light, space and the people who use it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
