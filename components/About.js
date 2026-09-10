import Image from "next/image";
import { aboutParagraphs, aboutTitle, principles } from "@/lib/practice";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <figure>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
              <Image
                src="/world/studio-about.webp"
                alt="Papercraft model of a small studio: an architect bent over a card model on a drafting table by a window"
                fill
                sizes="(min-width: 48rem) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-stone">
              The studio, from the Forma world.
            </figcaption>
          </figure>
        </Reveal>

        <div className="md:col-span-7">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-stone">About</p>
            <h2 className="text-3xl leading-tight md:text-5xl">{aboutTitle}</h2>
            <div className="mt-8 space-y-4 leading-relaxed text-stone">
              {aboutParagraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <dl className="mt-12 grid gap-8 border-t border-sand pt-8 sm:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <dt className="font-serif text-lg">{p.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-stone">{p.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
