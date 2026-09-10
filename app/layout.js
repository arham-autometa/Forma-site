import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Forma — Architecture Studio",
  description:
    "Forma is a solo architecture practice designing calm, material-led homes, workplaces and landscapes.",
  openGraph: {
    title: "Forma — Architecture Studio",
    description:
      "Calm, material-led architecture for homes, workplaces and landscapes.",
    images: ["/placeholders/hero.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
