export default function Footer() {
  return (
    <footer className="border-t border-sand">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-xs uppercase tracking-widest text-stone sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Forma</span>
        <div className="flex gap-6">
          <a href="mailto:hello@forma.studio" className="hover:text-clay">Email</a>
          <a href="#" className="hover:text-clay">Instagram</a>
          <a href="#" className="hover:text-clay">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
