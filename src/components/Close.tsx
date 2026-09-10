import Image from "next/image";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

/* Final photograph, then Ft6 letter close. Contact and footer are one gesture. */
export default function Close() {
  const p = projects[projects.length - 1];
  return (
    <>
      <section className="relative aspect-[4/5] w-full sm:aspect-[16/9]">
        <Image
          src={p.gallery[1]}
          alt={`${p.title}, interior`}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <p className="caption absolute bottom-6 left-[var(--page-gutter)] text-on-photo">
          {p.title}, {p.location}. {p.year}.
        </p>
      </section>

      <footer id="contact" className="text-fold py-[var(--space-3xl)]">
        <div className="max-w-[60ch]">
          <p className="font-serif text-[length:var(--text-3xl)] leading-[1.15]">
            If you have a site, a building, or only a feeling about a room,
            write to us.
          </p>
          <p className="mt-8 font-serif text-[length:var(--text-lg)] leading-snug">
            Yours,
            <br />
            <span className="font-medium">Forma</span>
          </p>
          <p className="mt-6 text-sm text-muted">
            <a href={site.mailto} className="link-type text-ink">
              {site.email}
            </a>
            <span className="mx-3">·</span>
            {site.phone}
            <span className="mx-3">·</span>
            {site.address.join(", ")}
          </p>
          <p className="mt-10 text-xs text-muted">
            © {new Date().getFullYear()} Forma Architecture &amp; Interiors
          </p>
        </div>
      </footer>
    </>
  );
}
