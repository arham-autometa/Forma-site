"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import ContactForm from "./ContactForm";

// Scroll length of the section in screens. Matches h-[660vh] below; timeline
// positions use the same unit, so 1 = one screen of scrolling.
const LENGTH = 6.6;

const paragraphs = [
  "If you're reading this, you probably have a plot of land, an old house, or a picture in your head that won't leave you alone. Every project I've worked on started exactly there.",
  "Forma is just me. The person who walks your site is the one who draws the first line, and the one who picks up when the builder calls on a Friday.",
  "I'll ask a lot of questions before I draw anything: where the morning light lands, which view you'd rather hide, how you actually live.",
  "If that sounds like the way you'd like to build, write back. I read every letter myself.",
];

// After the scroll-world film: a sealed envelope slides up over the last scene,
// opens, and lets a letter out. Scroll-scrubbed with GSAP ScrollTrigger.
export default function Letter() {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
    CustomEase.create("letter.out", "M0,0 C0.2,0 0.1,1 1,1");

    const section = root.current;
    const part = (name) => section.querySelector(`[data-l="${name}"]`);
    const stage = part("stage");
    const envWrap = part("env-wrap");
    const envelope = part("envelope");
    const flap = part("flap");
    const paper = part("paper");
    const header = part("header");
    const reply = part("reply");
    const world = document.getElementById("world");

    // Reading pose, measured from the live layout on every refresh.
    const measure = () => {
      const H = stage.clientHeight;
      const eh = envelope.offsetHeight;
      const ph = paper.offsetHeight;
      const tuck = 0.15 * eh; // paper left inside the pocket
      const inset = 0.06 * eh; // the paper's mask ends this far above the envelope bottom
      const room = 0.07 * H; // gap above the paper while reading
      const envTop = Math.min(Math.max(room + ph - tuck, envWrap.offsetTop), H - 0.3 * eh);
      const end = -(eh - inset - tuck);
      const overflow = Math.max(0, room - (envTop + tuck - ph));
      return { H, ph, drop: envTop - envWrap.offsetTop, start: end + overflow, end };
    };

    const mm = gsap.matchMedia();
    mm.add(
      { reduce: "(prefers-reduced-motion: reduce)", motion: "(prefers-reduced-motion: no-preference)" },
      ({ conditions }) => {
        const { reduce } = conditions;
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom bottom",
            scrub: reduce ? true : 0.8,
            invalidateOnRefresh: true,
          },
        });

        // Characters fade in one after another across `span` screens of scroll.
        // Hidden up front with set(): a staggered fromTo only renders its first
        // character's start state, so the rest would show before their turn.
        const write = (name, at, span) => {
          const { chars } = SplitText.create(part(name), { type: "words,chars", tag: "span" });
          gsap.set(chars, { autoAlpha: 0 });
          tl.to(chars, { autoAlpha: 1, duration: span * 0.35, stagger: { amount: span * 0.65 } }, at);
        };

        // 0 to 1: the section slides up over the film while the heading writes itself in.
        write("eyebrow", 0.3, 0.3);
        write("title-bg", 0.4, 0.45);
        write("title", 0.6, 0.45);

        // The seal breaks, then the flap swings open about its hinge.
        tl.fromTo(part("seal"), { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.12 }, 0.8);
        tl.fromTo(
          flap,
          { rotationX: -180, transformPerspective: 900 },
          {
            rotationX: 0,
            duration: reduce ? 0.01 : 0.55,
            ease: "letter.out",
            // Closed, the flap lies over the pocket; open, it sits behind the letter.
            onUpdate: () => { flap.style.zIndex = gsap.getProperty(flap, "rotationX") < -90 ? "4" : "1"; },
          },
          0.85
        );

        // 1.25 to 2.25: the letter slides out as the envelope drops to make room.
        const rise = 1.25;
        tl.to(header, { autoAlpha: 0, y: reduce ? 0 : -40, duration: 0.4 }, rise + 0.15);
        if (reduce) {
          tl.fromTo(paper, { autoAlpha: 0, y: () => measure().start }, { autoAlpha: 1, duration: 0.4 }, rise + 0.3);
          tl.fromTo(envWrap, { y: 0 }, { y: () => measure().drop, duration: 0.01 }, rise + 0.3);
        } else {
          tl.fromTo(paper, { y: () => measure().ph * 1.02 }, { y: () => measure().start, duration: 1, ease: "letter.out" }, rise);
          tl.fromTo(envWrap, { y: 0 }, { y: () => measure().drop, duration: 1, ease: "power2.inOut" }, rise);
        }

        // 2.25 to 3.25: reading. A letter taller than the room keeps sliding out.
        const read = rise + 1;
        tl.to(paper, { y: () => measure().end, duration: 1 }, read);

        // 3.25 to 4.05: the letter lifts away and the envelope falls out of frame.
        const exit = read + 1;
        if (reduce) {
          tl.to([paper, envWrap], { autoAlpha: 0, duration: 0.3 }, exit);
        } else {
          tl.to(paper, { y: () => { const m = measure(); return m.end - m.H - m.ph; }, rotation: -6, duration: 0.8, ease: "power1.in" }, exit);
          tl.to(envWrap, { y: () => { const m = measure(); return m.drop + 0.6 * m.H; }, duration: 0.8, ease: "power1.in" }, exit);
          tl.to(envWrap, { autoAlpha: 0, duration: 0.2 }, exit + 0.6);
        }

        // 3.8 to 4.65: the reply prompt writes itself in, centred on screen.
        const close = exit + 0.55;
        write("close-eyebrow", close, 0.25);
        write("close-bg", close + 0.1, 0.4);
        write("close-title", close + 0.3, 0.4);
        tl.fromTo(part("close-cta"), { autoAlpha: 0, yPercent: reduce ? 0 : 30 }, { autoAlpha: 1, yPercent: 0, duration: 0.25 }, close + 0.6);

        // 4.85 to 5.65: the prompt moves aside (left on desktop, up on phones) and the
        // contact form comes forward. The prompt's pieces live in their final layout and
        // are offset back to the screen centre, easing to zero as move.p runs 0 to 1.
        const aside = close + 1.05;
        const moved = ["close-eyebrow", "close-heading", "close-cta"].map(part);
        const move = { p: 0 };
        let centre = [];
        const within = (el) => {
          let x = 0;
          let y = 0;
          for (let n = el; n && n !== stage; n = n.offsetParent) { x += n.offsetLeft; y += n.offsetTop; }
          return { x, y };
        };
        const place = () => moved.forEach((el, i) => gsap.set(el, { x: centre[i].x * (1 - move.p), y: centre[i].y * (1 - move.p) }));
        const onRefresh = () => {
          const closing = part("closing");
          const dy = stage.clientHeight / 2 - (within(closing).y + closing.offsetHeight / 2);
          centre = moved.map((el) => ({ x: stage.clientWidth / 2 - (within(el).x + el.offsetWidth / 2), y: dy }));
          place();
        };
        onRefresh();
        ScrollTrigger.addEventListener("refresh", onRefresh);
        tl.fromTo(move, { p: 0 }, { p: 1, duration: reduce ? 0.01 : 0.7, ease: "power2.inOut", onUpdate: place }, aside);
        tl.fromTo(
          part("form"),
          { autoAlpha: 0, y: reduce ? 0 : 40, scale: reduce ? 1 : 0.95 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out" },
          aside + 0.35
        );

        // 5.7 to 6.3: when the form runs past the bottom of a short screen, bring it into view.
        tl.to(reply, { y: () => -Math.max(0, reply.offsetHeight - stage.clientHeight), duration: 0.6 }, aside + 0.85);
        tl.to({}, { duration: 0 }, LENGTH);

        // Once the section covers the screen, the film underneath stops painting.
        // Everything below the letter is opaque too, so only scrolling back above it uncovers.
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          onEnter: () => world?.classList.add("sw-covered"),
          onLeaveBack: () => world?.classList.remove("sw-covered"),
        });
        return () => {
          ScrollTrigger.removeEventListener("refresh", onRefresh);
          world?.classList.remove("sw-covered");
        };
      }
    );

    // The film's track gets its height after the engine mounts, the paper grows
    // when web fonts land, and the form grows with validation messages: all of
    // them move this section's scroll positions.
    let frame = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    if (world) ro.observe(world);
    ro.observe(paper);
    ro.observe(reply);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame);
      mm.revert();
    };
  }, []);

  return (
    <section ref={root} id="letter" aria-labelledby="letter-title" className="relative z-[70] h-[660vh] bg-bark text-cream">
      <div
        data-l="stage"
        className="sticky top-0 h-dvh overflow-hidden"
        style={{ "--env-w": "min(560px, 84vw, 70dvh)" }}
      >
        <header data-l="header" className="absolute inset-x-0 top-[12dvh] px-6 text-center">
          <p data-l="eyebrow" className="text-xs uppercase tracking-[0.3em] text-sand/70">
            Before we meet
          </p>
          <h2 id="letter-title" className="relative mx-auto mt-5 max-w-5xl text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]">
            <span data-l="title-bg" aria-hidden="true" className="letter-outline block">
              A letter from the studio
            </span>
            <span data-l="title" className="absolute inset-0 block">
              A letter from the studio
            </span>
          </h2>
        </header>

        <div data-l="env-wrap" className="absolute inset-x-0" style={{ top: "min(52%, calc(96% - var(--env-w) / 1.4))" }}>
          <div data-l="envelope" className="relative mx-auto aspect-[7/5] w-[var(--env-w)]">
            {/* back panel */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 500" preserveAspectRatio="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="699" height="499" rx="6" fill="#c9b699" stroke="#3b322c" strokeOpacity="0.3" />
            </svg>

            {/* flap, hinged on the top edge; starts folded down over the pocket */}
            <div data-l="flap" className="absolute inset-x-0 bottom-full z-[4] h-[46%] origin-bottom">
              <svg className="h-full w-full" viewBox="0 0 700 230" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 230 L322 16 Q350 -3 378 16 L700 230 Z" fill="#dfd0b3" stroke="#3b322c" strokeOpacity="0.3" />
              </svg>
              <span
                data-l="seal"
                className="absolute left-1/2 top-[2%] grid aspect-square w-[calc(var(--env-w)*0.1)] -translate-x-1/2 place-items-center rounded-full bg-clay shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
              >
                <span className="aspect-square w-[62%] rounded-full border border-cream/35" />
              </span>
            </div>

            {/* the letter, masked so it only shows once it clears the pocket */}
            <div className="absolute -top-[300dvh] bottom-[6%] left-1/2 z-[2] w-[200vw] -translate-x-1/2 overflow-hidden">
              <div
                data-l="paper"
                className="absolute bottom-0 bg-cream px-6 pt-6 text-bark shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] md:px-9 md:pt-8"
                style={{
                  left: "calc(50% - var(--env-w) * 0.44)",
                  width: "calc(var(--env-w) * 0.88)",
                  paddingBottom: "calc(var(--env-w) * 0.11 + 1.75rem)",
                  backgroundImage:
                    "linear-gradient(to bottom, transparent calc(33.3% - 1px), rgb(59 50 44 / 0.07) 33.3%, transparent calc(33.3% + 1px), transparent calc(66.6% - 1px), rgb(59 50 44 / 0.07) 66.6%, transparent calc(66.6% + 1px))",
                }}
              >
                <div className="flex items-baseline justify-between border-b border-sand pb-3 text-[0.65rem] uppercase tracking-[0.25em] text-stone">
                  <span>Forma</span>
                  <span>Studio letter</span>
                </div>
                <p className="mt-5 font-serif text-xl md:text-2xl">Dear future neighbour,</p>
                <div className="mt-3 space-y-3 text-[0.9rem] leading-relaxed text-bark/85 md:text-[0.95rem]">
                  {paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                <p className="mt-5 text-sm text-stone">Yours, from the drafting table,</p>
                <p className="mt-1 font-serif text-3xl italic text-clay">Forma</p>
              </div>
            </div>

            {/* front pocket: side panels meeting in a V, bottom panel folded over them */}
            <svg className="pointer-events-none absolute inset-0 z-[3] h-full w-full" viewBox="0 0 700 500" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 6 Q0 0 6 0 L350 270 L694 0 Q700 0 700 6 L700 494 Q700 500 694 500 L6 500 Q0 500 0 494 Z" fill="#e9ddc9" stroke="#3b322c" strokeOpacity="0.25" />
              <path d="M2 498 L350 232 L698 498 Z" fill="#e2d4bd" stroke="#3b322c" strokeOpacity="0.18" />
            </svg>
          </div>
        </div>

        {/* reply: the prompt ends up left of the form (above it on phones) */}
        <div data-l="reply" className="absolute inset-x-0 top-0 px-6">
          <div className="mx-auto grid min-h-dvh max-w-6xl content-center items-center gap-10 py-[8dvh] lg:grid-cols-2 lg:py-[12dvh] lg:gap-16">
            <div data-l="closing" className="relative">
              <p data-l="close-eyebrow" className="w-fit text-xs uppercase tracking-[0.3em] text-sand/70">
                Your turn
              </p>
              <h3 data-l="close-heading" className="relative mt-5 w-fit text-6xl leading-none md:text-8xl">
                <span data-l="close-bg" aria-hidden="true" className="letter-outline block">
                  Write back.
                </span>
                <span data-l="close-title" className="absolute inset-0 block">
                  Write back.
                </span>
              </h3>
              <div data-l="close-cta" className="mt-10 flex w-fit flex-wrap gap-3">
                <a href="/studio#contact" className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-bark transition-transform hover:-translate-y-0.5">
                  Start a project
                </a>
                <a href="/studio#about" className="rounded-full border border-sand/40 px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5">
                  About the practice
                </a>
              </div>
            </div>
            <div data-l="form">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
