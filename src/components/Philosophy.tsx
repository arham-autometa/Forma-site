import Image from "next/image";
import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section id="studio" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">The studio</p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl">
            Natural materials. Considered proportions. Rooms that know where the sun is.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
          <div className="relative aspect-[4/5] overflow-hidden bg-bone-2">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80"
              alt="Warm timber interior with soft daylight"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="space-y-6 text-lg leading-relaxed text-stone md:col-span-5 md:-mt-24">
          <p>
            Forma is an architecture and interior design firm. Homeowners, developers
            and businesses come to us for buildings that feel inevitable once they
            exist: quiet, well-made and precisely fitted to the way they will be used.
          </p>
          <p>
            We work in concrete, timber, stone and earth, and we spend most of our
            time on the things you feel rather than see: the height of a ceiling,
            the depth of a window reveal, the way a courtyard borrows the sky.
          </p>
          <p className="text-ink">
            Every project is a story. We document each one with photography, floor
            plans, material details and the decisions behind the finished space.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
