import { services } from "@/data/services";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-charcoal text-bone">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow !text-bone/50">Services</p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl">
              From the first sketch to the last screw.
            </h2>
            <p className="mt-6 max-w-sm text-bone/60 leading-relaxed">
              One team carries the idea through every stage, so what gets built is
              what was drawn.
            </p>
          </Reveal>

          <ol className="md:col-span-7 md:col-start-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <li className="group grid gap-3 border-t border-bone/15 py-7 md:grid-cols-12 md:gap-6">
                  <span className="font-serif text-sm text-bone/40 md:col-span-1">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-light md:col-span-4">
                    {s.title}
                  </h3>
                  <p className="text-bone/60 leading-relaxed md:col-span-7">
                    {s.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
