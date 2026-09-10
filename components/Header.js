"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="font-serif text-2xl tracking-tight text-bark">
          Forma
        </a>

        <nav className="hidden gap-10 text-sm uppercase tracking-widest text-stone md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-clay">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-bark transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-bark transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-sand px-6 py-6 text-sm uppercase tracking-widest text-stone md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-clay">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
