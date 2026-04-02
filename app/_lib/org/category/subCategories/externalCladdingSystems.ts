import type { ServiceSubCategory } from "../../definitions";

export const externalCladdingSystems = {
  overview: {
    label: "External Cladding Systems Overview",
    labelFarsi: "معرفی سیستم‌های کلدینگ خارجی",
    image: [],
    description: [
      "External cladding systems for residential and commercial projects requiring modern facade finishes, lightweight construction solutions, and durable external protection.",
    ],
    items: [
      "Lightweight cladding systems",
      "Decorative external facades",
      "Foam-backed facade systems",
      "Hebel-compatible systems",
      "Render-ready cladding surfaces",
      "Architectural exterior upgrades",
    ] as const,
  },

  facadeCladding: {
    label: "Facade Cladding Installation",
    labelFarsi: "نصب کلدینگ نما",
    image: [],
    description: [
      "Facade cladding installation for new builds and upgrades where a modern external finish and efficient system design are required.",
    ],
    items: [
      "Residential facade cladding",
      "Commercial facade systems",
      "Architectural front elevations",
      "Entry feature surrounds",
      "Lightweight exterior wall systems",
      "Contemporary building finishes",
    ] as const,
  },

  foamCladding: {
    label: "Foam-Based Cladding Systems",
    labelFarsi: "سیستم‌های کلدینگ فومی",
    image: [],
    description: [
      "Foam-based cladding systems designed for lightweight installation and a rendered architectural appearance.",
    ],
    items: [
      "Foam panel systems",
      "Decorative foam features",
      "Lightweight wall profiles",
      "Rendered foam facades",
      "Insulated facade concepts",
      "Modern external styling",
    ] as const,
  },

  hebelCladding: {
    label: "Hebel & Lightweight Panel Systems",
    labelFarsi: "سیستم‌های هبل و پنل سبک",
    image: [],
    description: [
      "Installation and finishing support for Hebel and similar lightweight panel systems used in external cladding applications.",
    ],
    items: [
      "Hebel panel systems",
      "Joint preparation",
      "Reinforcement mesh systems",
      "Base and top coat finishes",
      "Residential and multi-unit projects",
      "Modern rendered facade systems",
    ] as const,
  },

  finishSystems: {
    label: "Cladding Finish Systems",
    labelFarsi: "سیستم‌های فینیش کلدینگ",
    image: [],
    description: [
      "Finish systems applied over cladding surfaces to improve durability, appearance, and long-term weather protection.",
    ],
    items: [
      "Acrylic finish coats",
      "Texture finishes",
      "Protective top coats",
      "Uniform colour systems",
      "Weather-resistant surfaces",
      "Low-maintenance facade finishes",
    ] as const,
  },
} as const satisfies ServiceSubCategory;