import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-stone md:flex-row md:items-center md:justify-between md:px-8">
        <span className="font-serif text-lg text-ink">Forma</span>
        <nav className="flex flex-wrap gap-5">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <span>© {new Date().getFullYear()} Forma Architecture &amp; Interiors</span>
      </div>
    </footer>
  );
}
