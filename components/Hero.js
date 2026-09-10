import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:pt-20">
      <Reveal>
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-stone">
          Architecture · Interiors · Landscape
        </p>
        <h1 className="max-w-3xl text-5xl leading-[1.05] md:text-7xl">
          Buildings that feel like they were always meant to be there.
        </h1>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-stone">
            Forma is a solo architecture practice. I design calm, material-led
            spaces that respond to their site, their climate, and the people
            who live and work in them.
          </p>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 border border-bark px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:bg-bark hover:text-cream"
          >
            Start a project
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.3} className="mt-16">
        <figure>
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-sand">
            {/* Stock photograph (Unsplash License). Replace with the practice's own work. */}
            <Image
              src="/placeholders/hero.jpg"
              alt="Timber eaves of a house lit warm at dusk, bare trees against the evening sky"
              fill
              priority
              sizes="(min-width: 72rem) 72rem, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-xs text-stone">
            Photograph by <a href="https://unsplash.com/photos/FmemkJ1k0JE" className="underline underline-offset-2">Squids Z</a> on Unsplash.
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
