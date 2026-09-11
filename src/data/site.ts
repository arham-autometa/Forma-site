export const site = {
  name: "Forma",
  email: "hello@forma.studio",
  phone: "+1 (415) 555-0142",
  address: ["214 Hollis Street", "San Francisco, CA 94107"],
  mailto:
    "mailto:hello@forma.studio?subject=Project%20inquiry&body=Hello%20Forma%2C%0A%0AWhere%20the%20site%20is%3A%0AWhat%20it%20is%20for%3A%0AWhen%20we%20hope%20to%20start%3A%0A",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Practice", href: "#practice" },
    { label: "Contact", href: "#contact" },
  ],
};

export const mailtoFor = (title: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(`A project like ${title}`)}`;
