import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-bark py-24 text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-sand/70">Contact</p>
          <h2 className="text-3xl leading-tight md:text-5xl">
            Tell me about your site.
          </h2>
          <p className="mt-6 leading-relaxed text-sand/80">
            A few lines about where it is and what you hope to do there is
            plenty to start. I reply to every enquiry within two working days.
          </p>
          <p className="mt-8 text-sm text-sand/70">
            hello@forma.studio
            <br />
            Placeholder Street 12, Somewhere
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
