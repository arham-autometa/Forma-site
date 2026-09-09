// Ft4 · Dense colophon.
export default function Footer() {
  return (
    <footer className="foot-dense">
      <p>
        Forma, architecture studio, run by one architect. Houses, workplaces, interiors, landscape.
        Set in Inter and JetBrains Mono. Portrait photograph by <a href="https://unsplash.com/photos/WUY0W2RSiBw">GN Group</a> on Unsplash, stock until replaced.
        Write to <a href="mailto:hello@forma.studio">hello@forma.studio</a>. Studio address to be added.
        © {new Date().getFullYear()} Forma.
      </p>
    </footer>
  );
}
