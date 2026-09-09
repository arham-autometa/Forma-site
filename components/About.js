import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="about bleed-ink">
      <figure className="about__photo" style={{ margin: 0 }}>
        <Image
          src="/placeholders/portrait.jpg"
          alt="An architect at a drawing desk studying a card model of a house on a contoured site"
          width={1200}
          height={1500}
          sizes="(min-width: 60rem) 42vw, 100vw"
          loading="lazy"
        />
        <figcaption>
          Stock · <a href="https://unsplash.com/photos/WUY0W2RSiBw">GN Group</a> · replace with the principal
        </figcaption>
      </figure>
      <Reveal className="about__text">
        <h2>One architect, by intent</h2>
        <p>
          Forma is a solo practice. The person who draws the first sketch is
          the same person who checks the last detail on site, and the same
          person who answers the phone.
        </p>
        <p>
          A few honest materials, used well, left to age. Timber, lime render,
          stone and steel.
        </p>
        <p>
          Homeowners come first. Small commercial and workplace projects are
          taken on when the fit is right.
        </p>
        <p className="claim claim--muted">
          Biography, qualifications and registration to be supplied by the practice.
        </p>
      </Reveal>
    </section>
  );
}
