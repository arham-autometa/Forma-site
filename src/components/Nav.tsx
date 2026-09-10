import { site } from "@/data/site";

/* N6 masthead, set left: a meta row with the few real destinations, a large wordmark, a double rule. */
export default function Nav() {
  return (
    <header className="shell pt-[var(--space-sm)]">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-[var(--color-rule)] pb-[var(--space-sm)]">
        <p className="label text-muted">Architecture, interiors, landscape, renovation</p>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-[var(--space-lg)]">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="link label">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <h1 className="wordmark display pt-[var(--space-md)]">
        Forma<span className="sr-only">, architecture and interior design</span>
      </h1>
      <div aria-hidden className="mt-[var(--space-sm)] h-[5px] border-y border-[var(--color-rule-strong)]" />
    </header>
  );
}
