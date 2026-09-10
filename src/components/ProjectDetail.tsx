"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectDetail({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
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
        const f = panel.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])',
        );
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

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end bg-ink/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={panel}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.12 : 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full max-w-3xl overflow-y-auto bg-paper text-ink outline-none"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--color-rule)] bg-paper/90 px-5 py-4 backdrop-blur md:px-8">
              <span className="text-sm text-muted">{project.type}</span>
              <button
                onClick={onClose}
                className="rounded-full border border-[var(--color-rule)] px-4 py-1.5 text-sm transition hover:bg-ink hover:text-paper"
              >
                Close
              </button>
            </div>

            <div className="px-5 pb-16 pt-8 md:px-8">
              <h2 id="project-title" className="font-serif text-4xl font-light tracking-tight md:text-5xl">
                {project.title}
              </h2>
              <p className="mt-2 text-muted">
                {project.location} · {project.year} · {project.area}
              </p>

              <div className="relative mt-8 aspect-[3/2] overflow-hidden bg-paper-2">
                <Image
                  src={project.gallery[0]}
                  alt={`${project.title} exterior`}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-10 grid gap-10 md:grid-cols-12">
                <div className="md:col-span-7">
                  <p className="text-sm text-muted">The story</p>
                  <p className="mt-3 text-lg leading-relaxed">{project.story}</p>
                  <p className="mt-8 text-sm text-muted">Decisions behind the space</p>
                  <p className="mt-3 leading-relaxed text-muted">{project.decisions}</p>
                </div>
                <div className="md:col-span-4 md:col-start-9">
                  <p className="text-sm text-muted">Materials</p>
                  <ul className="mt-3 space-y-2">
                    {project.materials.map((m) => (
                      <li key={m} className="border-b border-[var(--color-rule)] pb-2">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {project.gallery.slice(1).map((src, i) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden bg-paper-2">
                    <Image
                      src={src}
                      alt={`${project.title}, view ${i + 2}`}
                      fill
                      sizes="(min-width: 640px) 384px, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-sm text-muted">Floor plan</p>
                <FloorPlan title={project.title} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FloorPlan({ title }: { title: string }) {
  return (
    <svg
      viewBox="0 0 400 260"
      role="img"
      aria-label={`Schematic floor plan of ${title}`}
      className="mt-3 w-full border border-[var(--color-rule)] bg-paper-2 text-ink/70"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="30" y="30" width="340" height="200" />
        <line x1="180" y1="30" x2="180" y2="150" />
        <line x1="30" y1="150" x2="260" y2="150" />
        <line x1="260" y1="150" x2="260" y2="230" />
        <rect x="290" y="60" width="50" height="60" strokeDasharray="4 4" />
      </g>
      <g fill="currentColor" fontSize="10" fontFamily="sans-serif" letterSpacing="1">
        <text x="45" y="95">LIVING</text>
        <text x="195" y="95">KITCHEN</text>
        <text x="45" y="195">BED 1</text>
        <text x="280" y="195">BED 2</text>
        <text x="295" y="140">COURT</text>
      </g>
    </svg>
  );
}
