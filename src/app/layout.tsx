import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  axes: ["opsz"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
