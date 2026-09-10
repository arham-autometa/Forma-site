import Image from "next/image";
import { services } from "@/data/services";
import { construction } from "@/data/projects";

const stages = [
  ["Sketch", "We visit, listen and draw. Site, light, budget and the way you live shape the first lines."],
  ["Design", "Plans, models and material samples, tested until every proportion feels settled."],
  ["Build", "Tender, then site. We are there each week, resolving details with the people making them."],
  ["Handover", "Furniture placed, lighting tuned, a walk-through together. Then we photograph the finished space."],
];

export default function Practice() {
  return (
    <section id="practice" aria-labelledby="practice-title" className="shell py-[var(--space-3xl)] md:py-[var(--space-4xl)]">
      <div className="border-t border-[var(--color-rule-strong)] pt-[var(--space-md)]">
        <h2 id="practice-title" className="text-[length:var(--text-3xl)]">
          Practice
        </h2>
      </div>

      <p className="mt-[var(--space-xl)] max-w-[40ch] text-[length:var(--text-2xl)] leading-[1.25]">
        We work in concrete, timber, stone and earth, and spend most of our time on what you feel
        rather than see: the height of a ceiling, the depth of a window reveal, the way a court
        borrows the sky.
      </p>

      <dl className="mt-[var(--space-2xl)] border-b border-[var(--color-rule)]">
        {services.map((s) => (
          <div
            key={s.title}
            className="grid gap-[var(--space-2xs)] border-t border-[var(--color-rule)] py-[var(--space-md)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-[var(--space-lg)]"
          >
            <dt className="display text-[length:var(--text-xl)]">{s.title}</dt>
            <dd className="max-w-[56ch] text-ink-2">{s.text}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-[var(--space-3xl)] grid gap-[var(--space-xl)] md:grid-cols-12">
        <figure className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
            <Image src={construction.src} alt={construction.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </div>
          <figcaption className="label mt-[var(--space-xs)] text-muted">
            A timber frame on site. Placeholder from{" "}
            <a href={construction.href} className="link" target="_blank" rel="noreferrer">
              {construction.source}
            </a>
            .
          </figcaption>
        </figure>
        <div className="md:col-span-6 md:col-start-7 md:self-end">
          <h3 className="text-[length:var(--text-2xl)]">From first sketch to handover</h3>
          <ol className="mt-[var(--space-md)]">
            {stages.map(([name, text], i) => (
              <li
                key={name}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-[var(--space-sm)] border-t border-[var(--color-rule)] py-[var(--space-md)]"
              >
                <span className="label num pt-[0.2em] text-muted">{i + 1}</span>
                <div>
                  <p className="display text-[length:var(--text-lg)]">{name}</p>
                  <p className="mt-[var(--space-2xs)] text-ink-2">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
