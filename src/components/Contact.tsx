import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-40">
      <Reveal>
        <p className="eyebrow">Start a project</p>
        <h2 className="mt-5 max-w-4xl font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
          Let&apos;s build something considered.
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <a
            href={site.mailto}
            className="inline-flex items-center gap-4 rounded-full bg-ink px-7 py-4 text-bone transition hover:bg-clay"
          >
            <span>{site.email}</span>
            <span aria-hidden>→</span>
          </a>
          <address className="not-italic text-stone leading-relaxed">
            {site.address.map((l) => (
              <div key={l}>{l}</div>
            ))}
            <div className="mt-2">{site.phone}</div>
          </address>
        </div>
      </Reveal>
    </section>
  );
}
