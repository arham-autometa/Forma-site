import { services } from "@/data/services";

/* Narrow text band: a plain list with hairlines. No numbers, no tags. */
export default function Services() {
  return (
    <section id="services" className="text-fold pb-[var(--space-3xl)]">
      <div className="md:grid md:grid-cols-12 md:gap-8">
        <h2 className="mb-8 text-[length:var(--text-xl)] md:col-span-3 md:mb-0">What we do</h2>
        <dl className="md:col-span-8 md:col-start-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="grid gap-2 border-t border-[var(--color-rule)] py-5 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-6"
            >
              <dt className="font-serif text-[length:var(--text-lg)]">{s.title}</dt>
              <dd className="max-w-[52ch] text-ink-2">{s.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
