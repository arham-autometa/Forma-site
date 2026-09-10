"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { mailtoFor } from "@/data/site";
import Plan from "./Plan";

export default function ProjectDetail({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    panel.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panel.current) {
        const f = panel.current.querySelectorAll<HTMLElement>('a[href], button, [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [project, onClose]);

  const facts = project
    ? [
        ["Type", project.type],
        ["Location", project.location],
        ["Year", String(project.year)],
        ["Area", project.area],
      ]
    : [];
  const sources = project ? Array.from(new Set(project.photos.map((p) => p.source))).join(" and ") : "";

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[var(--z-panel)] flex justify-end"
          style={{ background: "var(--color-scrim)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.1 : 0.22, ease: [0.22, 1, 0.36, 1] }}
          onClick={onClose}
        >
          <div
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="h-full w-full max-w-[64rem] overflow-y-auto bg-paper outline-none"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-[var(--space-md)] border-b border-[var(--color-rule)] bg-paper px-[var(--page-gutter)] py-[var(--space-sm)]">
              <p className="label text-muted">{project.type}</p>
              <button type="button" onClick={onClose} className="link cursor-pointer">
                Close
              </button>
            </div>

            <article className="px-[var(--page-gutter)] pb-[var(--space-3xl)] pt-[var(--space-xl)]">
              <h2 id="project-title" className="text-[length:var(--text-display)]">
                {project.title}
              </h2>
              <dl className="mt-[var(--space-lg)] grid grid-cols-2 border-t border-[var(--color-rule-strong)] sm:grid-cols-4">
                {facts.map(([k, v]) => (
                  <div key={k} className="border-b border-[var(--color-rule)] py-[var(--space-sm)] pr-[var(--space-md)]">
                    <dt className="label text-muted">{k}</dt>
                    <dd className="label num mt-[var(--space-2xs)] text-ink">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="relative mt-[var(--space-xl)] aspect-[3/2] overflow-hidden bg-paper-2">
                <Image src={project.photos[0].src} alt={project.photos[0].alt} fill sizes="(min-width: 1024px) 64rem, 100vw" className="object-cover" />
              </div>

              <div className="mt-[var(--space-xl)] grid gap-[var(--space-xl)] md:grid-cols-12">
                <div className="md:col-span-7">
                  <p className="text-[length:var(--text-xl)] leading-[1.4]">{project.story}</p>
                  <h3 className="mt-[var(--space-xl)] text-[length:var(--text-lg)]">Decisions behind the space</h3>
                  <ul className="mt-[var(--space-xs)]">
                    {project.decisions.map((d) => (
                      <li key={d} className="border-t border-[var(--color-rule)] py-[var(--space-sm)] text-ink-2">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-4 md:col-start-9">
                  <h3 className="text-[length:var(--text-lg)]">Materials</h3>
                  <ul className="mt-[var(--space-xs)]">
                    {project.materials.map((m) => (
                      <li key={m} className="label border-t border-[var(--color-rule)] py-[var(--space-xs)]">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <figure className="mt-[var(--space-2xl)] max-w-[40rem]">
                <Plan plan={project.plan} title={project.title} className="w-full border border-[var(--color-rule)]" />
                <figcaption className="label mt-[var(--space-xs)] text-muted">Schematic plan, not to scale.</figcaption>
              </figure>

              {project.photos.length > 1 && (
                <div className="mt-[var(--space-xl)] grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  {project.photos.slice(1).map((ph) => (
                    <div key={ph.src} className="relative aspect-[4/3] overflow-hidden bg-paper-2">
                      <Image src={ph.src} alt={ph.alt} fill sizes="(min-width: 640px) 32rem, 100vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              )}

              <p className="label mt-[var(--space-md)] text-muted">
                Photographs are placeholders from {sources}:{" "}
                {project.photos.map((ph, i) => (
                  <span key={ph.href}>
                    <a href={ph.href} className="link" target="_blank" rel="noreferrer">
                      {i + 1}
                    </a>
                    {i < project.photos.length - 1 ? ", " : "."}
                  </span>
                ))}
              </p>

              <p className="mt-[var(--space-xl)]">
                <a href={mailtoFor(project.title)} className="link text-[length:var(--text-lg)]">
                  Ask about a project like this
                </a>
              </p>
            </article>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
