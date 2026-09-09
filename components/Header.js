// N6 · Newspaper masthead. Issue line below the wordmark, heavy double rule.
export default function Header() {
  return (
    <header className="nav-mast" id="top">
      <h1 className="mast-name">Forma</h1>
      <p className="mast-line">Architecture · Interiors · Landscape · One architect</p>
      <nav className="mast-nav" aria-label="Primary">
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#call">Book a call</a></li>
        </ul>
      </nav>
      <hr className="mast-rule" aria-hidden="true" />
    </header>
  );
}
