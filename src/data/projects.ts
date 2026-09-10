export type Project = {
  slug: string;
  title: string;
  type: string;
  location: string;
  year: string;
  cover: string;
  gallery: string[];
  materials: string[];
  area: string;
  blurb: string;
  story: string;
  decisions: string;
  span: "wide" | "tall" | "normal";
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const projects: Project[] = [
  {
    slug: "ridge-house",
    title: "Ridge House",
    type: "Private residence",
    location: "Marin County, California",
    year: "2025",
    span: "wide",
    cover: u("photo-1600585154340-be6161a56a0c"),
    gallery: [
      u("photo-1600585154340-be6161a56a0c"),
      u("photo-1600607687920-4e2a09cf159d"),
      u("photo-1600566753086-00f18fb6b3ea"),
    ],
    materials: ["Board-formed concrete", "Blackened steel", "Western red cedar", "Limestone"],
    area: "420 m²",
    blurb: "A sculptural concrete house that steps down a wooded ridge.",
    story:
      "The site fell four metres across its width, so the house was conceived as three concrete trays stepping with the ground. Each level opens onto its own terrace, and the roof of one becomes the garden of the next.",
    decisions:
      "We kept the concrete raw and board-marked so the walls carry the memory of the timber that formed them. Openings are cut where the trees are, not where the plan wanted them, which is why no two rooms face the same way.",
  },
  {
    slug: "larch-apartment",
    title: "Larch Apartment",
    type: "Apartment interior",
    location: "Portland, Oregon",
    year: "2024",
    span: "normal",
    cover: u("photo-1583847268964-b28dc8f51f92"),
    gallery: [
      u("photo-1583847268964-b28dc8f51f92"),
      u("photo-1600607686527-6fb886090705"),
      u("photo-1618221195710-dd6b41faaea6"),
    ],
    materials: ["Larch joinery", "Lime plaster", "Oiled oak floor", "Brushed brass"],
    area: "140 m²",
    blurb: "A warm timber interior carved from a 1970s concrete frame.",
    story:
      "The apartment had low ceilings and a deep plan. Rather than fight it, we lined the core in larch and let the timber do the work of bringing warmth and scale to the rooms around it.",
    decisions:
      "One species of wood throughout, finished three ways. Everything storage-related is built into the walls so the floor stays clear and the light reaches the back of the plan.",
  },
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    type: "Private residence",
    location: "Austin, Texas",
    year: "2024",
    span: "tall",
    cover: u("photo-1600210492486-724fe5c67fb0", 1200),
    gallery: [
      u("photo-1600210492486-724fe5c67fb0"),
      u("photo-1600573472592-401b489a3cdc"),
      u("photo-1600047509807-ba8f99d2cdde"),
    ],
    materials: ["Rammed earth", "Corten steel", "Polished concrete", "Native planting"],
    area: "310 m²",
    blurb: "Rooms wrapped around a garden that brings the outside in.",
    story:
      "A tight urban lot with neighbours on three sides. The plan turns inward: every room borrows its light and its view from a planted courtyard at the centre of the house.",
    decisions:
      "The courtyard came first and the rooms were sized to it. Walls are rammed earth from site excavation, so the house is, quite literally, built from the ground it stands on.",
  },
  {
    slug: "tannery-hotel",
    title: "The Tannery",
    type: "Boutique hotel",
    location: "Hudson, New York",
    year: "2023",
    span: "normal",
    cover: u("photo-1582719478250-c89cae4dc85b"),
    gallery: [
      u("photo-1582719478250-c89cae4dc85b"),
      u("photo-1590490360182-c33d57733427"),
      u("photo-1611892440504-42a792e24d32"),
    ],
    materials: ["Reclaimed brick", "Douglas fir", "Terrazzo", "Linen"],
    area: "2,800 m²",
    blurb: "A nineteenth-century tannery restored as a 24-room hotel.",
    story:
      "The existing brick shell was kept almost untouched. New rooms are inserted as freestanding timber boxes so the original structure remains legible from every corridor.",
    decisions:
      "We drew a strict line between old and new: anything original is brick and iron, anything we added is fir and terrazzo. Guests can read the building's history without a single plaque.",
  },
  {
    slug: "atlas-workspace",
    title: "Atlas Workspace",
    type: "Office",
    location: "Denver, Colorado",
    year: "2025",
    span: "normal",
    cover: u("photo-1497366216548-37526070297c"),
    gallery: [
      u("photo-1497366216548-37526070297c"),
      u("photo-1497366754035-f200968a6e72"),
      u("photo-1524758631624-e2822e304c36"),
    ],
    materials: ["Exposed CLT", "Cork", "Steel mesh", "Wool felt"],
    area: "1,900 m²",
    blurb: "A quiet, daylit office built almost entirely from timber.",
    story:
      "The client wanted a workplace people would choose over home. We stripped the fit-out back to a mass-timber structure and used acoustic cork and felt to make big open floors feel calm.",
    decisions:
      "No suspended ceilings. Services run in a single visible channel so the CLT soffit stays exposed and the daylight reaches deep into the floor plate.",
  },
  {
    slug: "meridian-gallery",
    title: "Meridian Gallery",
    type: "Cultural space",
    location: "Santa Fe, New Mexico",
    year: "2023",
    span: "wide",
    cover: u("photo-1518998053901-5348d3961a04"),
    gallery: [
      u("photo-1518998053901-5348d3961a04"),
      u("photo-1572947650440-e8a97ef053b2"),
      u("photo-1594122230689-45899d9e6f69"),
    ],
    materials: ["White concrete", "Travertine", "Oak", "Bronze"],
    area: "1,200 m²",
    blurb: "Top-lit galleries under a folded concrete roof.",
    story:
      "A small regional gallery for a private collection. The roof folds to catch north light and throw it down the walls, so the artwork is lit by the sky rather than by fittings.",
    decisions:
      "We resisted the temptation to make a spectacular front. The building is deliberately plain from the street and reveals itself only once you are inside, under the light.",
  },
];
