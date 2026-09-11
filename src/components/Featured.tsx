import Image from "next/image";
import { projects } from "@/data/projects";
import { mailtoFor } from "@/data/site";
import Plan from "./Plan";

/* One project told in full on the page: photograph, story, decisions, materials, plan. */
export default function Featured() {
  const p = projects.find((x) => x.slug === "courtyard-house") ?? projects[0];
  const [cover, second] = p.photos;

  return (
    <section aria-labelledby="featured-title" className="bg-paper-2">
      <div className="shell py-[var(--space-3xl)] md:py-[var(--space-4xl)]">
        <div className="grid gap-[var(--space-lg)] md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 id="featured-title" className="text-[length:var(--text-display)]">
              {p.title}
            </h2>
            <p className="label num mt-[var(--space-sm)] text-muted">
              {p.type}, {p.location}, {p.year}. {p.area}.
            </p>
          </div>
          <p className="text-[length:var(--text-lg)] text-ink-2 md:col-span-4 md:col-start-9">{p.blurb}</p>
        </div>

        <figure className="mt-[var(--space-xl)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-paper-3 sm:aspect-[16/9]">
            <Image src={cover.src} alt={cover.alt} fill sizes="(min-width: 96rem) 96rem, 100vw" className="object-cover" />
          </div>
          <figcaption className="label mt-[var(--space-xs)] text-muted">
            Placeholder photograph from{" "}
            <a href={cover.href} className="link" target="_blank" rel="noreferrer">
              {cover.source}
            </a>
            .
          </figcaption>
        </figure>

        <div className="mt-[var(--space-2xl)] grid gap-[var(--space-2xl)] md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-[length:var(--text-xl)] leading-[1.4]">{p.story}</p>

            <h3 className="mt-[var(--space-xl)] text-[length:var(--text-lg)]">Decisions behind the space</h3>
            <ul className="mt-[var(--space-xs)]">
              {p.decisions.map((d) => (
                <li key={d} className="border-t border-[var(--color-rule)] py-[var(--space-sm)] text-ink-2">
                  {d}
                </li>
              ))}
            </ul>

            <h3 className="mt-[var(--space-xl)] text-[length:var(--text-lg)]">Materials</h3>
            <ul className="mt-[var(--space-xs)] grid grid-cols-2 gap-x-[var(--space-lg)]">
              {p.materials.map((m) => (
                <li key={m} className="label border-t border-[var(--color-rule)] py-[var(--space-xs)]">
                  {m}
                </li>
              ))}
            </ul>

            <p className="mt-[var(--space-xl)]">
              <a href={mailtoFor(p.title)} className="btn-primary">
                Discuss a similar house
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-[var(--space-xl)] md:col-span-5 md:col-start-8">
            <figure>
              <Plan plan={p.plan} title={p.title} className="w-full rounded-[var(--radius-card)] border border-[var(--color-rule)]" />
              <figcaption className="label mt-[var(--space-xs)] text-muted">Ground floor, schematic, not to scale.</figcaption>
            </figure>
            {second && (
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-paper-3">
                  <Image src={second.src} alt={second.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="label mt-[var(--space-xs)] text-muted">
                  Light through the timber screens. Placeholder from{" "}
                  <a href={second.href} className="link" target="_blank" rel="noreferrer">
                    {second.source}
                  </a>
                  .
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
