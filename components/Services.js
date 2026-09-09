import Reveal from "./Reveal";

const declarations = [
  ["Residential", "New houses, renovations and extensions. Designed around light, privacy and the way a day moves through a home."],
  ["Commercial and workplace", "Offices, shops and hospitality rooms that carry a clear identity and work for the people inside them."],
  ["Interior design", "Interiors, joinery and material palettes developed with the architecture, not after it."],
  ["Master planning and landscape", "Site strategies, small urban plans and gardens that tie a building back to the ground it stands on."],
];

const steps = [
  ["1.0", "Walk the site", "Where the sun comes from, what the neighbours see, what the ground is made of."],
  ["2.0", "Sketch", "A few honest options, drawn by hand, argued over at the table."],
  ["3.0", "Detail", "Every junction drawn by the person who designed the room it sits in."],
  ["4.0", "Build", "On site through construction, answering the phone when the builder calls."],
];

export default function Services() {
  return (
    <>
      <section id="services" className="section bleed-ink">
        <Reveal>
          <h2>What the practice does</h2>
          <ul className="decl" role="list">
            {declarations.map(([t, b]) => (
              <li key={t} className="decl__item">
                <h3>{t}</h3>
                <p>{b}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <h2>How a project runs</h2>
          <ol className="steps">
            {steps.map(([n, t, b]) => (
              <li key={n}>
                <span className="stage">{n}</span>
                <h3>{t}</h3>
                <p>{b}</p>
              </li>
            ))}
          </ol>
          <p className="end-label">— end of the process</p>
        </Reveal>
      </section>
    </>
  );
}
