"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        solid || open
          ? "bg-bone/90 text-ink backdrop-blur-md border-b border-ink/10"
          : "bg-transparent text-bone"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" className="font-serif text-2xl tracking-tight">
          Forma
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="opacity-80 transition hover:opacity-100">
              {n.label}
            </a>
          ))}
          <a
            href={site.mailto}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              solid
                ? "border-ink bg-ink text-bone hover:bg-clay hover:border-clay"
                : "border-bone/60 hover:bg-bone hover:text-ink"
            }`}
          >
            Start a project
          </a>
        </nav>

        <button
          className="md:hidden text-sm"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-4 border-t border-ink/10 px-5 py-6 text-lg md:hidden"
        >
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href={site.mailto} className="mt-2 text-clay">
            Start a project →
          </a>
        </nav>
      )}
    </header>
  );
}
