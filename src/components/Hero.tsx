import { site } from "@/data/site";

/* A short statement and a plain paragraph. The work below is the real hero. */
export default function Hero() {
  return (
    <section aria-label="Introduction" className="shell pb-[var(--space-2xl)] pt-[var(--space-xl)]">
      <div className="grid gap-[var(--space-lg)] md:grid-cols-12 md:items-end">
        <p className="display text-[length:var(--text-3xl)] md:col-span-7">
          Buildings shaped by material, light and use.
        </p>
        <div className="md:col-span-4 md:col-start-9">
          <p className="max-w-[46ch] text-ink-2">
            Forma designs houses, apartment buildings, boutique hotels, offices and cultural
            spaces, with the interiors and gardens that belong to them. We stay with each
            project from the first sketch until the builders leave.
          </p>
          <p className="mt-[var(--space-sm)]">
            <a href={site.mailto} className="btn-primary">
              Start a project
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
