/* Text fold: narrow band of prose between photographs. No heading, the lede carries it. */
export default function Philosophy() {
  return (
    <section id="studio" className="text-fold py-[var(--space-3xl)]">
      <div className="grid gap-8 md:grid-cols-12">
        <p className="font-serif text-[length:var(--text-display-s)] leading-[1.08] md:col-span-9">
          Houses, apartment buildings, hotels, offices and galleries, built from
          concrete, timber, stone and earth.
        </p>
        <div className="max-w-[52ch] space-y-5 text-[length:var(--text-lg)] leading-relaxed text-ink-2 md:col-span-6 md:col-start-6">
          <p>
            Forma is an architecture and interior design firm. We work for
            homeowners, developers and businesses who want a building that feels
            inevitable once it exists.
          </p>
          <p>
            Most of our time goes to things you feel rather than see: the height
            of a ceiling, the depth of a window reveal, the way a courtyard
            borrows the sky. We carry each project from the first sketch through
            construction, so what gets built is what was drawn.
          </p>
        </div>
      </div>
    </section>
  );
}
