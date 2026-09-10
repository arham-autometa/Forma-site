"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

/* N9 · edge-aligned minimal: wordmark hard-left, one CTA hard-right, nothing between. */
export default function Nav() {
  const [onPaper, setOnPaper] = useState(false);

  useEffect(() => {
    const onScroll = () => setOnPaper(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-[var(--page-gutter)] py-5 transition-colors duration-[var(--dur-base)] ${
        onPaper ? "text-ink mix-blend-normal" : "text-on-photo"
      }`}
    >
      <a href="#top" className="font-serif text-xl tracking-tight">
        Forma
      </a>
      <a href={site.mailto} className="link-type text-sm">
        Start a project <span aria-hidden>→</span>
      </a>
    </header>
  );
}
