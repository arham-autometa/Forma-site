import Image from "next/image";
import { projects } from "@/data/projects";

/* Photographic fold 1: one image, a caption in the corner, nothing else. */
export default function Hero() {
  const p = projects[0];
  return (
    <section id="top" className="relative h-[92svh] min-h-[520px] w-full">
      <Image
        src={p.gallery[0]}
        alt={`${p.title}, ${p.location}`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
      <p className="caption absolute bottom-6 left-[var(--page-gutter)] text-on-photo">
        {p.title}, {p.location}. {p.year}.
        <br />
        <span className="opacity-75">{p.materials[0]}, {p.materials[2].toLowerCase()}.</span>
      </p>
      <p className="absolute bottom-6 right-[var(--page-gutter)] hidden text-sm text-on-photo/80 sm:block">
        Architecture &amp; interiors
      </p>
    </section>
  );
}
