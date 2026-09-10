import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden text-bone">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
        alt="Concrete house among trees at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/20" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pb-20">
        <Reveal>
          <p className="eyebrow !text-bone/70">Architecture &amp; Interior Design</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-light leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            Spaces shaped by light, material and the people who live in them.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-relaxed text-bone/80">
              Forma designs houses, apartment buildings, hotels, offices and cultural
              spaces, taking each project from first sketch through construction.
            </p>
            <a href="#work" className="group inline-flex items-center gap-3 text-sm">
              <span>See the work</span>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-bone/50 transition group-hover:bg-bone group-hover:text-ink">
                ↓
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
