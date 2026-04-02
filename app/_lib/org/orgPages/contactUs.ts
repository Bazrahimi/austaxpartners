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
    q: "What tax and accounting services do you provide?",
    a: "We provide tax, accounting, bookkeeping, BAS, GST, and business advisory services for individuals, sole traders, companies, and other businesses across Australia.",
  },
  {
    q: "Do you help both individuals and businesses?",
    a: "Yes. We assist individual clients with tax returns and general tax support, and we also help sole traders, small businesses, and companies with accounting, bookkeeping, BAS, GST, and ongoing business advisory services.",
  },
  {
    q: "Can I get an initial consultation?",
    a: "Yes. Send us your details through the contact form with a short description of what you need, and we’ll get back to you to discuss your tax, accounting, or business enquiry.",
  },
  {
    q: "Do you help with BAS, GST, and bookkeeping?",
    a: "Yes. We provide bookkeeping support, BAS preparation, GST assistance, and ongoing record-keeping support to help businesses stay organised and meet their reporting obligations.",
  },
  {
    q: "Do you help with tax returns and ongoing business support?",
    a: "Yes. We assist with individual and business tax returns as well as ongoing accounting, compliance, and advisory support for businesses that need practical and reliable financial assistance.",
  },
] as const;

export const SOCIAL_MEDIA = {
  facebook: "",
  instagram: "",
  tiktok: "", // leave empty or undefined if not used
} as const;
