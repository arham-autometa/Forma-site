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
          Designed and seen through by one architect.
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
            <Image
              src="/world/house.webp"
              alt="Papercraft model of a finished two-storey house at dusk, with a stone terrace, young garden and a mature tree"
              fill
              priority
              sizes="(min-width: 72rem) 72rem, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-xs text-stone">
            The finished house, from the Forma world.
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
