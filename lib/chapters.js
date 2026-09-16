export const site = {
  name: "Treatments & Herbs",
  tagline: "Medicine in the Time of Jesus",
  years: "c. 6 BC – 33 AD",
  description:
    "How people in Jesus’s world explained illness and mixed herbs — from Celsus and Dioscorides to Judean balsam. Educational history, not medical advice.",
};

export const chapters = [
  {
    slug: "introduction",
    number: "01",
    title: "Medicine in the Time of Jesus",
    nav: "Introduction",
    group: "World",
    href: "/introduction",
    summary:
      "Greek theory, Roman practice, and local Judean healing met in a world without germs, antibiotics, or hospitals as we know them.",
  },
  {
    slug: "physicians",
    number: "02",
    title: "Physicians and Writers",
    nav: "Physicians",
    group: "World",
    href: "/physicians",
    summary:
      "Hippocrates, Celsus, Dioscorides, Pliny, Luke, and Ben Sira shaped how people understood illness and the healer’s calling.",
  },
  {
    slug: "judea",
    number: "03",
    title: "Healing in Judea",
    nav: "Judea",
    group: "World",
    href: "/judea",
    summary:
      "Balsam gardens near Jericho, Dead Sea bitumen, the mikveh, and Levitical purity laws made Judea a distinctive medical landscape.",
  },
  {
    slug: "humors",
    number: "04",
    title: "The Four Humors",
    nav: "Humors",
    group: "Theory",
    href: "/humors",
    summary:
      "Blood, phlegm, yellow bile, and black bile were the era’s scientific model of health, temperament, and treatment.",
  },
  {
    slug: "bloodletting",
    number: "05",
    title: "Bloodletting and Venesection",
    nav: "Bloodletting",
    group: "Theory",
    href: "/bloodletting",
    summary:
      "Opening a vein, applying leeches, or cupping the skin was the most common “scientific” procedure of the age.",
  },
  {
    slug: "bathing",
    number: "06",
    title: "Water, Heat, and Cold",
    nav: "Bathing",
    group: "Theory",
    href: "/bathing",
    summary:
      "Roman baths, Jewish ritual washing, and prescribed hot or cold regimens were both therapy and daily life.",
  },
  {
    slug: "herbs",
    number: "07",
    title: "Herbs and Plant Medicines",
    nav: "Herbs",
    group: "Remedies",
    href: "/herbs",
    summary:
      "From hyssop and fig to myrrh and balm of Gilead, plants were the pharmacy of the first century.",
  },
  {
    slug: "oils",
    number: "08",
    title: "Oils, Salves, and Poultices",
    nav: "Oils",
    group: "Remedies",
    href: "/oils",
    summary:
      "Olive oil, aromatic resins, and mustard plasters carried medicine through the skin and through ritual.",
  },
  {
    slug: "food",
    number: "09",
    title: "Food as Medicine",
    nav: "Food",
    group: "Remedies",
    href: "/food",
    summary:
      "Wine, honey, grains, and fasting were prescribed as carefully as any herb. Diet was treatment.",
  },
  {
    slug: "surgery",
    number: "10",
    title: "Surgery and Wound Care",
    nav: "Surgery",
    group: "Practice",
    href: "/surgery",
    summary:
      "Celsus described ligature, bone-setting, and the four signs of inflammation — with wine as the usual anesthetic.",
  },
  {
    slug: "spiritual",
    number: "11",
    title: "Faith, Prayer, and Healing",
    nav: "Faith",
    group: "Practice",
    href: "/spiritual",
    summary:
      "Physicians, priests, and prayer were not rivals. Illness was body, community, and the divine at once.",
  },
  {
    slug: "cases",
    number: "12",
    title: "Ten Cases from the First Century",
    nav: "Cases",
    group: "Practice",
    href: "/cases",
    summary:
      "Fever, a festering wound, a broken arm, childbirth, melancholy — reconstructed visits with a period physician.",
  },
  {
    slug: "timeline",
    number: "Ref.",
    title: "A Medical Timeline",
    nav: "Timeline",
    group: "Reference",
    href: "/timeline",
    summary:
      "From Hippocrates to Galen, the ideas that framed medicine in Jesus’s lifetime.",
  },
  {
    slug: "words",
    number: "Ref.",
    title: "Words and abbreviations",
    nav: "Words",
    group: "Reference",
    href: "/words",
    summary:
      "Every difficult word and abbreviation on this site, in plain language — from AD and mikveh to venesection.",
  },
  {
    slug: "sources",
    number: "Ref.",
    title: "Sources and Further Reading",
    nav: "Sources",
    group: "Reference",
    href: "/sources",
    summary:
      "Ancient texts and modern scholarship behind this site. History, not a treatment guide.",
  },
];

export function getChapter(slug) {
  return chapters.find((chapter) => chapter.slug === slug);
}

export function getNeighbors(slug) {
  const index = chapters.findIndex((chapter) => chapter.slug === slug);
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}

export const groups = ["World", "Theory", "Remedies", "Practice", "Reference"];
