"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectDetail from "./ProjectDetail";

/* Photographic folds: one full-bleed photograph per project, caption in a corner,
   a typographic link under the caption. The image edge is the divider. */
export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const list = projects.slice(1);

  return (
    <section id="work" aria-label="Selected work">
      {list.map((p, i) => {
        const right = i % 2 === 1;
        return (
          <article key={p.slug} className="relative">
            <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] md:aspect-[21/10]">
              <Image
                src={p.cover}
                alt={`${p.title}, ${p.type} in ${p.location}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div
              className={`text-fold flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between ${
                right ? "sm:flex-row-reverse" : ""
              }`}
            >
              <p className="caption">
                <span className="font-serif text-[length:var(--text-lg)]">{p.title}</span>
                <br />
                <span className="text-muted">
                  {p.type}, {p.location}. {p.year}.
                </span>
              </p>
              <button onClick={() => setActive(p)} className="link-type text-sm">
                Plans, materials and the story <span aria-hidden>→</span>
              </button>
            </div>
          </article>
        );
      })}
      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </section>
  );
}
