"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects, TAGS, type Project, type Tag } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

type Filter = "All" | Tag;
type View = "Grid" | "Index";

/* Grid rhythm by position: uneven spans, varied crops, stepped offsets. */
const layout = [
  { span: "md:col-span-7", ratio: "aspect-[4/3]", offset: "", sizes: "(min-width: 768px) 58vw, 100vw" },
  { span: "md:col-span-5", ratio: "aspect-[4/5]", offset: "md:mt-[var(--space-3xl)]", sizes: "(min-width: 768px) 42vw, 100vw" },
  { span: "md:col-span-5", ratio: "aspect-[4/5]", offset: "", sizes: "(min-width: 768px) 42vw, 100vw" },
  { span: "md:col-span-6 md:col-start-7", ratio: "aspect-[3/2]", offset: "md:mt-[var(--space-2xl)]", sizes: "(min-width: 768px) 50vw, 100vw" },
  { span: "md:col-span-8", ratio: "aspect-[16/10]", offset: "", sizes: "(min-width: 768px) 66vw, 100vw" },
  { span: "md:col-span-4", ratio: "aspect-[3/4]", offset: "md:mt-[var(--space-4xl)]", sizes: "(min-width: 768px) 33vw, 100vw" },
];

/* Pressed styling comes from aria-pressed in the .chip rule (globals.css). */
const chip = "chip label num";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [view, setView] = useState<View>("Grid");
  const [active, setActive] = useState<Project | null>(null);
  const [preview, setPreview] = useState(projects[0].slug);

  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );
  const count = (f: Filter) => (f === "All" ? projects.length : projects.filter((p) => p.tags.includes(f)).length);
  const years = projects.map((p) => p.year);
  const shown = list.find((p) => p.slug === preview) ?? list[0];

  return (
    <section id="work" aria-labelledby="work-title" className="shell pb-[var(--space-3xl)]">
      <div className="flex flex-col gap-[var(--space-lg)] border-t border-[var(--color-rule-strong)] pt-[var(--space-md)] md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="work-title" className="text-[length:var(--text-3xl)]">
            Selected work
          </h2>
          <p className="label num mt-[var(--space-xs)] text-muted" aria-live="polite">
            {list.length} of {projects.length} projects, {Math.min(...years)} to {Math.max(...years)}
          </p>
        </div>
        <div className="flex flex-col gap-[var(--space-xs)] md:items-end">
          <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-[var(--space-xs)] md:justify-end">
            {(["All", ...TAGS] as Filter[]).map((f) => {
              const n = count(f);
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  disabled={n === 0}
                  onClick={() => setFilter(f)}
                  className={chip}
                >
                  {f}
                  <span className="text-[length:var(--text-xs)]">{n}</span>
                </button>
              );
            })}
          </div>
          <div role="group" aria-label="Layout" className="flex gap-[var(--space-xs)]">
            {(["Grid", "Index"] as View[]).map((v) => (
              <button key={v} type="button" aria-pressed={view === v} onClick={() => setView(v)} className={chip}>
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>

      {view === "Grid" ? (
        <ul
          key={`grid-${filter}`}
          className="fade-in mt-[var(--space-xl)] grid grid-cols-1 gap-x-[var(--space-lg)] gap-y-[var(--space-2xl)] md:grid-cols-12"
        >
          {list.map((p, i) => {
            const l = layout[i % layout.length];
            return (
              <li key={p.slug} className={`${l.span} ${l.offset}`}>
                <article className="group relative">
                  <div className={`relative ${l.ratio} overflow-hidden rounded-[var(--radius-card)] bg-paper-2`}>
                    <Image src={p.photos[0].src} alt={p.photos[0].alt} fill sizes={l.sizes} className="object-cover" />
                  </div>
                  <div className="mt-[var(--space-sm)] flex items-baseline justify-between gap-[var(--space-md)]">
                    <h3 className="text-[length:var(--text-xl)]">
                      <button
                        type="button"
                        onClick={() => setActive(p)}
                        className="cursor-pointer text-left transition-colors duration-[var(--dur-fast)] after:absolute after:inset-0 group-hover:text-accent"
                      >
                        {p.title}
                      </button>
                    </h3>
                    <span className="label num shrink-0 text-muted">{p.year}</span>
                  </div>
                  <p className="label mt-[var(--space-2xs)] text-muted">
                    {p.type}, {p.location}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      ) : (
        <div key={`index-${filter}`} className="fade-in mt-[var(--space-xl)] grid gap-[var(--space-xl)] md:grid-cols-12">
          <div className="md:col-span-8">
            <div aria-hidden className="label hidden grid-cols-[minmax(0,1fr)_minmax(0,10rem)_minmax(0,12rem)_3.5rem] gap-[var(--space-md)] pb-[var(--space-xs)] text-muted md:grid">
              <span>Project</span>
              <span>Type</span>
              <span>Location</span>
              <span className="text-right">Year</span>
            </div>
            <ul className="border-b border-[var(--color-rule)]">
              {list.map((p) => (
                <li
                  key={p.slug}
                  onMouseEnter={() => setPreview(p.slug)}
                  className="group relative border-t border-[var(--color-rule)] transition-colors duration-[var(--dur-fast)] hover:bg-paper-2"
                >
                  <div className="grid grid-cols-[4rem_minmax(0,1fr)] items-center gap-[var(--space-md)] py-[var(--space-sm)] md:grid-cols-[minmax(0,1fr)_minmax(0,10rem)_minmax(0,12rem)_3.5rem] md:py-[var(--space-md)]">
                    <div className="relative aspect-square w-16 overflow-hidden rounded-[var(--radius-card)] bg-paper-2 md:hidden">
                      <Image src={p.photos[0].src} alt="" fill sizes="64px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[length:var(--text-2xl)]">
                        <button
                          type="button"
                          onClick={() => setActive(p)}
                          onFocus={() => setPreview(p.slug)}
                          className="cursor-pointer text-left transition-colors duration-[var(--dur-fast)] after:absolute after:inset-0 group-hover:text-accent"
                        >
                          {p.title}
                        </button>
                      </h3>
                      <p className="label num mt-[var(--space-2xs)] text-muted md:hidden">
                        {p.type}, {p.location}, {p.year}
                      </p>
                    </div>
                    <p className="label hidden text-ink-2 md:block">{p.type}</p>
                    <p className="label hidden text-ink-2 md:block">{p.location}</p>
                    <p className="label num hidden text-right text-ink-2 md:block">{p.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:col-span-4 md:block">
            <div className="sticky top-[var(--space-lg)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-paper-2">
                {list.map((p) => (
                  <Image
                    key={p.slug}
                    src={p.photos[0].src}
                    alt={shown?.slug === p.slug ? p.photos[0].alt : ""}
                    fill
                    sizes="30vw"
                    className={`object-cover transition-opacity duration-[var(--dur-base)] ${shown?.slug === p.slug ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
              </div>
              <p className="mt-[var(--space-xs)] text-ink-2">{shown?.blurb}</p>
            </div>
          </div>
        </div>
      )}

      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </section>
  );
}
