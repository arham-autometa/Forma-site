const steps = [
  ["Sketch", "We visit, listen and draw. Site, light, budget and the way you live shape the first lines."],
  ["Design", "Plans, models and material samples. Every proportion tested until the scheme feels settled."],
  ["Build", "Tender, then site. We are there weekly, resolving details with the people making them."],
  ["Handover", "Furniture placed, lighting tuned, a walk-through together. Then we photograph it."],
];

/* Text band on darker paper: a running paragraph of stages, not four tiles. */
export default function Process() {
  return (
    <section id="process" className="text-fold bg-paper-2 py-[var(--space-3xl)]">
      <div className="md:grid md:grid-cols-12 md:gap-8">
        <h2 className="mb-8 text-[length:var(--text-xl)] md:col-span-3 md:mb-0">How a project runs</h2>
        <div className="max-w-[60ch] md:col-span-7 md:col-start-5">
          {steps.map(([t, d], i) => (
            <p key={t} className="mb-5 text-[length:var(--text-lg)] leading-relaxed text-ink-2">
              <span className="font-serif text-ink">{t}.</span> {d}
              
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
