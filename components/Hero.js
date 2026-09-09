import Reveal from "./Reveal";

// Manifesto hero: caps display tilted, accent block on the verb, claims below.
export default function Hero() {
  return (
    <section className="manifesto">
      <Reveal>
        <h2>
          We build for the <span className="block-accent">ground</span>, not the brochure.
        </h2>
      </Reveal>
      <Reveal>
        <div className="claims">
          <p className="claim">Forma is one architect. Not a platform, not a pipeline.</p>
          <p className="claim">The person who draws the first sketch checks the last detail on site.</p>
          <p className="claim claim--muted">Houses first. Then workplaces, interiors and the landscape around them.</p>
        </div>
      </Reveal>
    </section>
  );
}
