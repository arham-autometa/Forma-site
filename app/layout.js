import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const metadata = {
  title: "Forma — Architecture Studio",
  description:
    "Forma is a solo architecture practice. Houses first, then workplaces, interiors and the landscape around them.",
  openGraph: {
    title: "Forma — Architecture Studio",
    description: "A solo architecture practice. Houses first.",
    images: ["/placeholders/hero.jpg"],
  },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
