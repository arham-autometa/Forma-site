"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const initial = { name: "", email: "", projectType: "Residential", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rules = {
  name: (v) => (v.trim() ? "" : "Name is empty. Add the name a reply should be addressed to."),
  email: (v) =>
    !v.trim()
      ? "Email address is empty. Add one so a reply can reach you."
      : EMAIL_RE.test(v)
        ? ""
        : "That email address is missing an @ or a domain. Check it and try again.",
  message: (v) => (v.trim() ? "" : "Message is empty. A line about the site is enough."),
};

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validateField = (name, value) => (rules[name] ? rules[name](value) : "");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) setErrors((er) => ({ ...er, [name]: validateField(name, value) }));
    if (status === "error") setStatus("idle");
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: validateField(name, value) }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const next = Object.fromEntries(Object.keys(rules).map((k) => [k, validateField(k, values[k])]));
    setTouched({ name: true, email: true, message: true });
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;
    setStatus("loading");
    try {
      // TODO: replace with a real submission (API route or form service).
      await new Promise((r) => setTimeout(r, 400));
      console.log("Contact form submission:", values);
      setStatus("success");
      setValues(initial);
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  const invalid = (name) => Boolean(touched[name] && errors[name]);
  const help = (name, fallback = "") => {
    const err = touched[name] && errors[name];
    return (
      <p id={`${name}-help`} className="field__help" data-tone={err ? "error" : undefined}>
        {err || fallback}
      </p>
    );
  };

  return (
    <>
      <section id="call" className="cta-room">
        <Reveal>
          <h2>Book an intro call</h2>
          <p>Thirty minutes, no drawings, no fee. Bring the site and what you hope to do with it.</p>
          {/* TODO: point at a scheduling link when one exists. */}
          <a className="cta-block" href="mailto:hello@forma.studio?subject=Intro%20call">
            Book a call
          </a>
          <p className="cta-note">Opens an email to hello@forma.studio · scheduling link to follow</p>
        </Reveal>
      </section>

      <section id="contact" className="section section--tight">
        <Reveal>
          <h2>Or write instead</h2>
          {status === "success" ? (
            <div role="status" aria-live="polite">
              <p className="claim">Received. A reply will follow by email.</p>
              <button type="button" className="link" onClick={() => setStatus("idle")}>
                Write another →
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="form">
              <div className="field">
                <label htmlFor="name" className="field__label">Name</label>
                <input id="name" name="name" className="input" value={values.name} onChange={onChange} onBlur={onBlur} aria-required="true" aria-invalid={invalid("name")} aria-describedby="name-help" disabled={status === "loading"} />
                {help("name")}
              </div>
              <div className="field">
                <label htmlFor="email" className="field__label">Email address</label>
                <input id="email" name="email" type="email" className="input" placeholder="name@example.com" value={values.email} onChange={onChange} onBlur={onBlur} aria-required="true" aria-invalid={invalid("email")} aria-describedby="email-help" disabled={status === "loading"} />
                {help("email")}
              </div>
              <div className="field">
                <label htmlFor="projectType" className="field__label">Project type</label>
                <select id="projectType" name="projectType" className="input" value={values.projectType} onChange={onChange} disabled={status === "loading"}>
                  <option>Residential</option>
                  <option>Commercial and workplace</option>
                  <option>Interior design</option>
                  <option>Master planning and landscape</option>
                </select>
                <p className="field__help" />
              </div>
              <div className="field">
                <label htmlFor="message" className="field__label">Message</label>
                <textarea id="message" name="message" className="input" rows={5} value={values.message} onChange={onChange} onBlur={onBlur} aria-required="true" aria-invalid={invalid("message")} aria-describedby="message-help" disabled={status === "loading"} />
                {help("message", "The site, the brief, and a rough sense of timing.")}
              </div>
              <div>
                <button type="submit" className="btn" data-state={status !== "idle" ? status : undefined} disabled={status === "loading"} aria-busy={status === "loading"}>
                  {status === "loading" ? "Sending…" : status === "error" ? "Try again" : "Send enquiry"}
                </button>
                <p className="form__note" data-tone={status === "error" ? "error" : undefined} aria-live="polite">
                  {status === "error" ? "The message could not be sent. The connection dropped. Try again, or email directly." : ""}
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
