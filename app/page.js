import Footer from "@/components/Footer";
import Letter from "@/components/Letter";
import World from "@/components/World";

// The whole site: the scroll-world film, then the studio letter (About and contact).
export default function Home() {
  return (
    <>
      <div id="top" />
      <World />
      <Letter />
      {/* Sits above the film's fixed layers, like the letter. */}
      <div className="relative z-[70] bg-cream">
        <Footer />
      </div>
    </>
  );
}
