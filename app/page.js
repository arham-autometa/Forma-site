import Footer from "@/components/Footer";
import Letter from "@/components/Letter";
import World from "@/components/World";

// The scroll-world film is the landing page, followed by the studio letter;
// the practice pages live at /studio.
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
