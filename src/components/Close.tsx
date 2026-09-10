import { site } from "@/data/site";

/* The one plate: a dark band for the inquiry. */
export default function Close() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-plate text-on-plate">
      <div className="shell grid gap-[var(--space-xl)] py-[var(--space-3xl)] md:grid-cols-12 md:py-[var(--space-4xl)]">
        <h2 id="contact-title" className="text-[length:var(--text-display)] md:col-span-8">
          Tell us about the site.
        </h2>
        <p className="max-w-[44ch] text-[length:var(--text-lg)] md:col-span-6" style={{ color: "var(--color-on-plate-muted)" }}>
          Where it is, what it is for, and roughly when you hope to start. A few photographs or a
          survey help, but a conversation is enough to begin.
        </p>
        <div className="flex flex-col gap-[var(--space-sm)] md:col-span-5 md:col-start-8">
          <a href={site.mailto} className="link link-on-plate display text-[length:var(--text-2xl)]">
            {site.email}
          </a>
          <p className="label" style={{ color: "var(--color-on-plate-muted)" }}>
            {site.phone}
          </p>
          <address className="label not-italic" style={{ color: "var(--color-on-plate-muted)" }}>
            {site.address.join(", ")}
          </address>
        </div>
      </div>
    </section>
  );
}

/* Ft4 dense colophon. */
export function Colophon() {
  return (
    <footer className="shell py-[var(--space-xl)]">
      <p className="label max-w-[92ch] leading-relaxed text-muted">
        <span className="text-ink">Forma Architecture &amp; Interiors.</span> {site.address.join(", ")}.{" "}
        <a href={site.mailto} className="link text-ink">
          {site.email}
        </a>
        . Architecture, interior design, landscape integration, renovation and project oversight.
        Set in Inter and JetBrains Mono. Project photographs are placeholders from Pexels and
        Unsplash, credited on each project. © {new Date().getFullYear()}.
      </p>
    </footer>
  );
}
