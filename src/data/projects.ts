export const TAGS = ["Residential", "Interiors", "Hospitality", "Workplace", "Cultural", "Renovation"] as const;
export type Tag = (typeof TAGS)[number];

export type Photo = { src: string; alt: string; source: "Pexels" | "Unsplash"; href: string };
export type Room = { x: number; y: number; w: number; h: number; label?: string; open?: boolean };
export type Plan = { w: number; h: number; rooms: Room[] };

export type Project = {
  slug: string;
  title: string;
  type: string;
  tags: Tag[];
  location: string;
  year: number;
  area: string;
  /** First photo is the cover. All photos are placeholders until the firm's own photography arrives. */
  photos: Photo[];
  materials: string[];
  blurb: string;
  story: string;
  decisions: string[];
  plan: Plan;
};

const px = (id: number, alt: string, href: string): Photo => ({
  src: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2000`,
  alt,
  source: "Pexels",
  href,
});

const us = (id: string, alt: string, href: string): Photo => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=80`,
  alt,
  source: "Unsplash",
  href,
});

export const projects: Project[] = [
  {
    slug: "ridge-house",
    title: "Ridge House",
    type: "Private residence",
    tags: ["Residential"],
    location: "Marin County, California",
    year: 2025,
    area: "420 m²",
    photos: [
      px(14086482, "Board-formed concrete wall turning a sharp corner against the sky", "https://www.pexels.com/photo/concrete-building-under-a-clear-blue-sky-14086482/"),
      px(327482, "Concrete passage lit by a long slot in the roof", "https://www.pexels.com/photo/corridor-of-building-327482/"),
      px(28993989, "Concrete wall with formwork tie holes and panel joints", "https://www.pexels.com/photo/modern-concrete-architectural-space-with-minimalist-design-28993989/"),
    ],
    materials: ["Board-formed concrete", "Western red cedar", "Blackened steel", "Limestone floors"],
    blurb: "A concrete house that steps down a wooded ridge in three trays.",
    story:
      "The site falls four metres across its width, so the house is three concrete trays stepping with the ground. Each level opens onto its own terrace, and the roof of one becomes the garden of the next.",
    decisions: [
      "The concrete is left raw and board-marked, so the walls carry the grain of the timber that formed them.",
      "Openings are cut where the trees are, not where the plan wanted them. No two rooms face the same way.",
      "A slot in the roof of the entry passage lets the light move along the wall through the day.",
    ],
    plan: {
      w: 100,
      h: 64,
      rooms: [
        { x: 0, y: 0, w: 24, h: 22, label: "Entry" },
        { x: 24, y: 0, w: 30, h: 22, label: "Kitchen" },
        { x: 54, y: 0, w: 46, h: 28, label: "Living" },
        { x: 54, y: 28, w: 46, h: 12, label: "Terrace", open: true },
        { x: 0, y: 22, w: 28, h: 21, label: "Bedroom" },
        { x: 28, y: 22, w: 26, h: 9, label: "Bath" },
        { x: 28, y: 31, w: 26, h: 12, label: "Study" },
        { x: 0, y: 43, w: 54, h: 21, label: "Bedroom" },
        { x: 54, y: 40, w: 46, h: 24, label: "Lower garden", open: true },
      ],
    },
  },
  {
    slug: "tannery",
    title: "The Tannery",
    type: "Boutique hotel",
    tags: ["Hospitality", "Renovation"],
    location: "Hudson, New York",
    year: 2023,
    area: "2,800 m²",
    photos: [
      px(31398713, "Restored brick walls rising to a new glass roof", "https://www.pexels.com/photo/interior-of-historic-brick-building-with-skylight-31398713/"),
      px(31728406, "Guest room with a timber slat wall behind the bed", "https://www.pexels.com/photo/modern-minimalist-hotel-room-interior-design-31728406/"),
    ],
    materials: ["Reclaimed brick", "Douglas fir", "Terrazzo", "Linen"],
    blurb: "A nineteenth-century tannery restored as a small hotel.",
    story:
      "The brick shell was kept almost untouched. A glass roof now covers the old yard, and the guest rooms are inserted as freestanding timber boxes, so the original structure stays legible from every corridor.",
    decisions: [
      "A strict line between old and new: anything original is brick and iron, anything added is fir and terrazzo.",
      "The yard became the lobby, lit from above by a glass roof on slender steel.",
      "Rooms stand clear of the old walls, so the brick can breathe and be repaired in future.",
    ],
    plan: {
      w: 100,
      h: 60,
      rooms: [
        { x: 0, y: 0, w: 30, h: 20, label: "Room" },
        { x: 0, y: 20, w: 30, h: 20, label: "Room" },
        { x: 0, y: 40, w: 30, h: 20, label: "Room" },
        { x: 30, y: 0, w: 40, h: 60, label: "Glazed yard", open: true },
        { x: 70, y: 0, w: 30, h: 24, label: "Lobby" },
        { x: 70, y: 24, w: 30, h: 18, label: "Bar" },
        { x: 70, y: 42, w: 30, h: 18, label: "Room" },
      ],
    },
  },
  {
    slug: "larch-apartment",
    title: "Larch Apartment",
    type: "Apartment interior",
    tags: ["Interiors", "Renovation"],
    location: "Portland, Oregon",
    year: 2024,
    area: "140 m²",
    photos: [
      px(2082093, "Bedroom with pale timber floorboards and a wall of glass", "https://www.pexels.com/photo/photo-of-bedroom-2082093/"),
      px(19866428, "Oak parquet meeting a painted skirting board", "https://www.pexels.com/photo/parquet-in-a-minimalist-apartment-19866428/"),
    ],
    materials: ["Larch joinery", "Lime plaster", "Oiled oak floor", "Brushed brass"],
    blurb: "A warm timber interior carved from a 1970s concrete frame.",
    story:
      "The apartment had low ceilings and a deep plan. Rather than fight it, we lined the core in larch and let the timber bring warmth and scale to the rooms around it.",
    decisions: [
      "One species of wood throughout, finished three ways.",
      "Storage is built into the larch core, so the floor stays clear and light reaches the back of the plan.",
      "Ceilings stay at their original height. Pale floors and plaster make them feel taller.",
    ],
    plan: {
      w: 100,
      h: 56,
      rooms: [
        { x: 0, y: 0, w: 36, h: 30, label: "Bedroom" },
        { x: 0, y: 30, w: 20, h: 26, label: "Bath" },
        { x: 20, y: 30, w: 16, h: 26, label: "Store" },
        { x: 36, y: 0, w: 26, h: 14, label: "Hall" },
        { x: 36, y: 14, w: 26, h: 28, label: "Larch core", open: true },
        { x: 36, y: 42, w: 26, h: 14, label: "Study" },
        { x: 62, y: 0, w: 38, h: 56, label: "Living and dining" },
      ],
    },
  },
  {
    slug: "meridian-gallery",
    title: "Meridian Gallery",
    type: "Cultural space",
    tags: ["Cultural"],
    location: "Santa Fe, New Mexico",
    year: 2023,
    area: "1,200 m²",
    photos: [
      px(34453118, "Gallery room opening to a garden through a full-height window", "https://www.pexels.com/photo/modern-art-gallery-interior-with-sculptures-34453118/"),
      px(32658551, "Long gallery lined with timber shelves of ceramics", "https://www.pexels.com/photo/modern-art-gallery-interior-with-shelves-and-painting-32658551/"),
      px(32387424, "Planted court under a folded glass roof", "https://www.pexels.com/photo/modern-indoor-courtyard-with-geometric-roof-32387424/"),
    ],
    materials: ["White concrete", "Travertine", "Oak", "Bronze"],
    blurb: "Top-lit galleries under a folded roof, deliberately plain from the street.",
    story:
      "A small gallery for a private collection. The roof folds to catch north light and throw it down the walls, so the work is lit by the sky rather than by fittings.",
    decisions: [
      "We resisted a spectacular front. The building reveals itself only once you are inside, under the light.",
      "A planted court sits between the galleries as a place to rest the eyes.",
      "Timber shelving lets part of the collection live in the open instead of in storage.",
    ],
    plan: {
      w: 100,
      h: 60,
      rooms: [
        { x: 0, y: 0, w: 34, h: 38, label: "Gallery" },
        { x: 34, y: 0, w: 32, h: 38, label: "Gallery" },
        { x: 66, y: 0, w: 34, h: 38, label: "Gallery" },
        { x: 0, y: 38, w: 40, h: 22, label: "Court", open: true },
        { x: 40, y: 38, w: 30, h: 22, label: "Foyer" },
        { x: 70, y: 38, w: 30, h: 22, label: "Store" },
      ],
    },
  },
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    type: "Private residence",
    tags: ["Residential"],
    location: "Palm Springs, California",
    year: 2024,
    area: "310 m²",
    photos: [
      us("1760260864042-bdf1a0443aaf", "Earth-coloured walls and arches around a courtyard pool", "https://unsplash.com/photos/courtyard-with-arches-and-palm-trees-SBcKyJETLxE"),
      px(16408400, "Striped shadows falling across a lime-plastered wall", "https://www.pexels.com/photo/shadows-on-wall-16408400/"),
    ],
    materials: ["Rammed earth", "Lime plaster", "Corten steel", "Native planting"],
    blurb: "Rooms wrapped around a court that brings the outside in.",
    story:
      "A tight lot with neighbours on three sides. The plan turns inward: every room borrows its light and its view from the court at the centre of the house, and the pool cools the air before it reaches the living rooms.",
    decisions: [
      "The court was drawn first, and the rooms were sized to it.",
      "Walls are rammed earth from the site excavation, so the house is built from the ground it stands on.",
      "Deep reveals and timber screens turn the desert sun into stripes of shadow instead of glare.",
    ],
    plan: {
      w: 100,
      h: 80,
      rooms: [
        { x: 0, y: 0, w: 62, h: 22, label: "Living" },
        { x: 62, y: 0, w: 38, h: 22, label: "Kitchen" },
        { x: 0, y: 22, w: 28, h: 36, label: "Bedroom" },
        { x: 28, y: 22, w: 44, h: 36, label: "Court and pool", open: true },
        { x: 72, y: 22, w: 28, h: 36, label: "Dining" },
        { x: 0, y: 58, w: 38, h: 22, label: "Bedroom" },
        { x: 38, y: 58, w: 20, h: 22, label: "Bath" },
        { x: 58, y: 58, w: 42, h: 22, label: "Studio" },
      ],
    },
  },
  {
    slug: "atlas-house",
    title: "Atlas House",
    type: "Office building",
    tags: ["Workplace"],
    location: "Denver, Colorado",
    year: 2025,
    area: "1,900 m²",
    photos: [
      us("1741524915860-856eff791ec4", "Curved concrete galleries around an open court", "https://unsplash.com/photos/concrete-architecture-inside-a-brutalist-structure-7WQlCMzGGI8"),
      px(34658645, "White concrete surfaces meeting at a recessed joint", "https://www.pexels.com/photo/minimalist-concrete-structure-in-clean-design-34658645/"),
    ],
    materials: ["In-situ concrete", "Steel windows", "Cork", "Wool felt"],
    blurb: "Four floors of offices around an open concrete court.",
    story:
      "The client wanted a workplace people would choose over home. Every floor opens onto galleries around a planted court, so each desk is close to daylight and fresh air.",
    decisions: [
      "Circulation happens outside, on galleries around the court, which frees the floors for work.",
      "No suspended ceilings. Services run in one visible channel, so the concrete soffit stays exposed.",
      "Cork and felt absorb sound, so large open floors stay calm.",
    ],
    plan: {
      w: 100,
      h: 60,
      rooms: [
        { x: 0, y: 0, w: 34, h: 60, label: "Studio" },
        { x: 34, y: 0, w: 32, h: 16, label: "Gallery" },
        { x: 34, y: 16, w: 32, h: 28, label: "Court", open: true },
        { x: 34, y: 44, w: 32, h: 16, label: "Gallery" },
        { x: 66, y: 0, w: 34, h: 34, label: "Studio" },
        { x: 66, y: 34, w: 17, h: 26, label: "Meeting" },
        { x: 83, y: 34, w: 17, h: 26, label: "Stair" },
      ],
    },
  },
];

export const construction: Photo = us(
  "1715760374522-a609a0c2f65e",
  "Timber frame and stud walls standing on site before cladding",
  "https://unsplash.com/photos/an-empty-room-with-wooden-walls-and-beams-TtTOzMj75kE",
);
