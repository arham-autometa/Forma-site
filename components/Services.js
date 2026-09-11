import Reveal from "./Reveal";

const services = [
  {
    n: "01",
    title: "Residential architecture",
    body: "New homes, renovations and extensions. Designed around light, privacy and the rhythm of daily life.",
  },
  {
    n: "02",
    title: "Commercial & workplace",
    body: "Offices, retail and hospitality spaces that carry a clear identity and work hard for the people inside them.",
  },
  {
    n: "03",
    title: "Interior design",
    body: "Interiors, joinery and material palettes developed alongside the architecture, not after it.",
  },
  {
    n: "04",
    title: "Master planning & landscape",
    body: "Site strategies, small urban plans and gardens that tie buildings back to the ground they sit on.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sand py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-12">
            <p className="text-xs uppercase tracking-[0.3em] text-stone md:col-span-3">
              Services
            </p>
            <h2 className="text-3xl leading-tight md:col-span-9 md:text-5xl">
              A small practice with a wide scope. One person carries every
              project from first sketch to final detail.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-stone/20 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="bg-sand">
              <article className="flex h-full flex-col gap-6 p-8 md:p-10">
                <span className="font-serif text-sm text-clay">{s.n}</span>
                <h3 className="text-2xl">{s.title}</h3>
                <p className="leading-relaxed text-stone">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="grid gap-8 md:grid-cols-12">
            <p className="text-xs uppercase tracking-[0.3em] text-stone md:col-span-3">
              Approach
            </p>
            <div className="space-y-4 leading-relaxed text-bark md:col-span-6">
              <p>
                Every project starts with the site: where the sun comes from,
                what the neighbours see, what the ground is made of. The
                building grows out of those answers.
              </p>
              <p>
                I favour a few honest materials used well over many used
                carelessly. Timber, lime render, stone and steel, left to age.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
