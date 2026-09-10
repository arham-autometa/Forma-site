"use client";

import { useState } from "react";

const initial = { name: "", email: "", projectType: "Residential", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please tell me your name.";
  if (!v.email.trim()) e.email = "An email address is required.";
  else if (!EMAIL_RE.test(v.email)) e.email = "That email doesn't look right.";
  if (!v.message.trim()) e.message = "A few words about the project would help.";
  return e;
}

const field =
  "mt-2 w-full border border-sand/25 bg-cream/5 px-3 py-3 outline-none transition-colors hover:border-sand/40 focus:border-clay focus:bg-cream/10";

// Enquiry form at the end of the letter (dark background).
// `compact` tightens spacing for the letter's single-screen stage.
export default function ContactForm({ compact = false }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // TODO: replace with a real submission (API route or form service).
    console.log("Contact form submission:", values);
    setSent(true);
    setValues(initial);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col justify-center border border-sand/30 p-10">
        <h3 className="text-2xl">Thanks. I&apos;ll be in touch.</h3>
        <p className="mt-3 text-sand/80">Your message has been noted.</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 w-fit text-sm uppercase tracking-widest text-clay hover:text-cream"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={`grid sm:grid-cols-2 ${compact ? "gap-6" : "gap-8"}`}>
      <label className="block sm:col-span-1">
        <span className="text-xs uppercase tracking-widest text-sand/70">Name</span>
        <input name="name" value={values.name} onChange={onChange} className={field} />
        {errors.name && <span className="mt-2 block text-sm text-clay">{errors.name}</span>}
      </label>

      <label className="block sm:col-span-1">
        <span className="text-xs uppercase tracking-widest text-sand/70">Email</span>
        <input type="email" name="email" value={values.email} onChange={onChange} className={field} />
        {errors.email && <span className="mt-2 block text-sm text-clay">{errors.email}</span>}
      </label>

      <label className="block sm:col-span-2">
        <span className="text-xs uppercase tracking-widest text-sand/70">Project type</span>
        <select name="projectType" value={values.projectType} onChange={onChange} className={`${field} text-cream [&>option]:text-bark`}>
          <option>Residential</option>
          <option>Commercial &amp; workplace</option>
          <option>Interior design</option>
          <option>Master planning &amp; landscape</option>
        </select>
      </label>

      <label className="block sm:col-span-2">
        <span className="text-xs uppercase tracking-widest text-sand/70">Message</span>
        <textarea name="message" rows={compact ? 4 : 5} value={values.message} onChange={onChange} className={`${field} resize-none`} />
        {errors.message && <span className="mt-2 block text-sm text-clay">{errors.message}</span>}
      </label>

      <button
        type="submit"
        className="w-fit border border-cream px-6 py-3 text-sm uppercase tracking-widest transition-colors hover:bg-cream hover:text-bark sm:col-span-2"
      >
        Send enquiry
      </button>
    </form>
  );
}
