// Places on the /map page. Coordinates are decimal degrees (WGS84).
// `zoom` is how far the map flies in when the place is picked from the list.
// `chapter` is the href of the chapter that tells the story of the place.

export const placeCategories = [
  { id: "physicians", label: "Physicians" },
  { id: "remedies", label: "Remedies" },
  { id: "healing", label: "Places of healing" },
];

export const places = [
  {
    id: "jerusalem",
    name: "Jerusalem",
    lat: 31.7781,
    lng: 35.2354,
    category: "healing",
    region: "Judea",
    zoom: 10,
    description:
      "The Temple city, ringed by ritual baths (mikva’ot) and public pools. John’s Gospel sets a healing at the Pool of Bethesda here. Priests ruled on skin disease and purity, so illness was a religious matter as well as a bodily one.",
    chapter: "/judea",
    chapterTitle: "Healing in Judea",
  },
  {
    id: "jericho",
    name: "Jericho",
    lat: 31.8566,
    lng: 35.4597,
    category: "remedies",
    region: "Judea",
    zoom: 10,
    description:
      "Guarded balsam groves made this oasis famous across the empire. Pliny, Strabo, and Josephus all describe the precious resin, which was graded like wine. Jericho’s dates were sold as food and restorative.",
    chapter: "/judea",
    chapterTitle: "Healing in Judea",
  },
  {
    id: "dead-sea",
    name: "Dead Sea",
    lat: 31.52,
    lng: 35.49,
    category: "remedies",
    region: "Judea",
    zoom: 10,
    description:
      "The lake threw up lumps of bitumen, which were gathered and traded far beyond Judea. Ancient writers list it among drugs and plasters, a mineral cousin to plant resins. Its salts added to the region’s name for cleansing substances.",
    chapter: "/judea",
    chapterTitle: "Healing in Judea",
  },
  {
    id: "qumran",
    name: "Qumran",
    lat: 31.7414,
    lng: 35.4589,
    category: "healing",
    region: "Judea",
    zoom: 10,
    description:
      "This settlement by the Dead Sea is linked with the Dead Sea Scrolls and, in many reconstructions, with the Essenes. Josephus says the Essenes studied roots and healing lore. Its many stepped pools show how central washing was.",
    chapter: "/judea",
    chapterTitle: "Healing in Judea",
  },
  {
    id: "capernaum",
    name: "Galilee · Capernaum",
    lat: 32.8807,
    lng: 35.575,
    category: "healing",
    region: "Galilee",
    zoom: 10,
    description:
      "A fishing town on the Sea of Galilee where the Gospels set many healing stories. Fever, paralysis, and a centurion’s servant appear here. For villagers, prayer, touch, and family care came before any trained physician.",
    chapter: "/spiritual",
    chapterTitle: "Faith, Prayer, and Healing",
  },
  {
    id: "alexandria",
    name: "Alexandria",
    lat: 31.2001,
    lng: 29.9187,
    category: "physicians",
    region: "Egypt",
    zoom: 8,
    description:
      "The great medical school of the Hellenistic world. Herophilus and Erasistratus studied anatomy here in the 3rd century BC. Much of the surgery Celsus describes was learned from Alexandrian tradition.",
    chapter: "/physicians",
    chapterTitle: "Physicians and Writers",
  },
  {
    id: "pergamon",
    name: "Pergamon",
    lat: 39.1322,
    lng: 27.1841,
    category: "physicians",
    region: "Asia",
    zoom: 8,
    description:
      "Home of a famous healing sanctuary of Asclepius and birthplace of Galen, around 129 AD. Galen came a century after Jesus, but later medicine read the earlier writers through him. He travelled as far as Judea to study balsam.",
    chapter: "/physicians",
    chapterTitle: "Physicians and Writers",
  },
  {
    id: "kos",
    name: "Kos",
    lat: 36.8933,
    lng: 27.2877,
    category: "physicians",
    region: "Aegean",
    zoom: 8,
    description:
      "The island of Hippocrates, around 460 BC. The writings gathered under his name taught that illness had natural causes. Their careful case notes and the four-humor idea still framed medicine in Jesus’s day.",
    chapter: "/physicians",
    chapterTitle: "Physicians and Writers",
  },
  {
    id: "rome",
    name: "Rome",
    lat: 41.8925,
    lng: 12.4853,
    category: "physicians",
    region: "Italy",
    zoom: 8,
    description:
      "Capital of the empire, full of Greek doctors. Celsus wrote his Latin De Medicina here in Jesus’s lifetime. Pliny the Elder gathered thousands of remedies in his Natural History a generation later.",
    chapter: "/physicians",
    chapterTitle: "Physicians and Writers",
  },
  {
    id: "anazarbus",
    name: "Anazarbus",
    lat: 37.2556,
    lng: 35.9047,
    category: "physicians",
    region: "Cilicia",
    zoom: 8,
    description:
      "Hometown of Dioscorides, a Greek army physician of the 1st century AD. His De Materia Medica describes about 600 plants and their uses. It stayed the standard drug book for more than fifteen hundred years.",
    chapter: "/physicians",
    chapterTitle: "Physicians and Writers",
  },
];
