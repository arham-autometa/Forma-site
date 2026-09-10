import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Sketch",
    text: "We visit, listen and draw. Site, light, budget and the way you live shape the first lines.",
  },
  {
    n: "02",
    title: "Design",
    text: "Plans, models and material samples. Every proportion tested until the scheme feels settled.",
  },
  {
    n: "03",
    title: "Build",
    text: "Tender, then site. We are there weekly, resolving details with the people making them.",
  },
  {
    n: "04",
    title: "Handover",
    text: "Furniture placed, lighting tuned, a walk-through together. Then we photograph it for the story.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-bone-2">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <p className="eyebrow">Process</p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl">
            Four stages, one continuous conversation.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="border-t border-ink/20 pt-6">
                <span className="font-serif text-sm text-stone">{s.n}</span>
                <h3 className="mt-3 font-serif text-3xl font-light">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-stone">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
