import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = { title: "Forma — The practice" };

export default function Studio() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
