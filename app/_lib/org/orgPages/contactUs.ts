import type { FAQItem, OpeningHours } from "../definitions";

export const OPENING_HOURS: OpeningHours = {
  mon: { closed: false, open: "07:00", close: "17:00" },
  tue: { closed: false, open: "07:00", close: "17:00" },
  wed: { closed: false, open: "07:00", close: "17:00" },
  thu: { closed: false, open: "07:00", close: "17:00" },
  fri: { closed: false, open: "07:00", close: "17:00" },
  sat: { closed: false, open: "09:00", close: "14:00" },
  sun: { closed: true },
};

export const CONTACT_FAQS: readonly FAQItem[] = [
  {
    q: "What rendering and cladding services do you provide?",
    a: "We provide residential and commercial rendering services, including solid plastering, cement rendering, acrylic rendering, texture coating, external cladding systems, foam board applications, Hebel finishes, and cladding replacement projects across Victoria.",
  },
  {
    q: "Do you work on both residential and commercial projects?",
    a: "Yes. We work across residential and commercial projects, including homes, apartments, townhouse developments, renovations, remedial facade works, and commercial buildings.",
  },
  {
    q: "Can I get a free quote?",
    a: "Yes. Send us your details through the contact form with a short description of the job, and we’ll get back to you about a free quote.",
  },
  {
    q: "Do you install cladding and acrylic coating systems?",
    a: "Yes. We provide external cladding systems, acrylic coating finishes, texture coatings, foam board systems, and Hebel-compatible render finishes for a wide range of projects.",
  },
  {
    q: "Do you take on new builds and cladding replacement work?",
    a: "Yes. We work on new build projects as well as cladding replacement, facade upgrades, repair works, and general surface renewal for existing residential and commercial properties.",
  },
] as const;

export const SOCIAL_MEDIA = {
  facebook: "",
  instagram: "",
  tiktok: "", // leave empty or undefined if not used
} as const;
