"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import Reveal from "./Reveal";
import ProjectDetail from "./ProjectDetail";

const spanClass: Record<Project["span"], string> = {
  wide: "md:col-span-8 aspect-[16/10]",
  tall: "md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto",
  normal: "md:col-span-4 aspect-[4/3]",
};

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl">
              Each project has a story.
            </h2>
          </div>
          <p className="max-w-sm text-stone leading-relaxed">
            Concrete, timber, courtyards and restored buildings. Open a project to
            see the plans, the materials and the decisions behind it.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-12 md:auto-rows-auto">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.08} className={spanClass[p.span]}>
            <button
              onClick={() => setActive(p)}
              className="group relative block h-full w-full overflow-hidden bg-bone-2 text-left"
              aria-label={`Open ${p.title}`}
            >
              <Image
                src={p.cover}
                alt={`${p.title}, ${p.type} in ${p.location}`}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-bone">
                <div>
                  <h3 className="font-serif text-2xl font-light">{p.title}</h3>
                  <p className="mt-1 text-sm text-bone/70">
                    {p.type} · {p.location}
                  </p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-bone/40 text-sm opacity-0 transition group-hover:opacity-100">
                  +
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </section>
  );
}
