import type { ServiceSubCategory } from "../../definitions";

export const renderAcrylicCoatings = {
  overview: {
    label: "Render & Acrylic Coatings Overview",
    labelFarsi: "معرفی رندر و پوشش‌های اکریلیک",
    image: [],
    description: [
      "Render and acrylic coating systems that improve building appearance, protect external surfaces, and provide a clean modern finish.",
    ],
    items: [
      "Cement rendering",
      "Acrylic rendering",
      "Texture coating systems",
      "Decorative exterior finishes",
      "Protective facade coatings",
      "Residential and commercial applications",
    ] as const,
  },

  cementRender: {
    label: "Cement Rendering",
    labelFarsi: "رندر سیمانی",
    image: [],
    description: [
      "Cement render finishes for walls and facades needing a strong base, clean presentation, and long-lasting external coverage.",
    ],
    items: [
      "Brick wall rendering",
      "Block wall rendering",
      "Render repairs and refreshes",
      "Smooth or textured finishes",
      "Base render systems",
      "Facade upgrade works",
    ] as const,
  },

  acrylicRender: {
    label: "Acrylic Rendering",
    labelFarsi: "رندر اکریلیک",
    image: [],
    description: [
      "Acrylic rendering systems offering flexibility, improved crack resistance, and attractive finishes for contemporary exteriors.",
    ],
    items: [
      "Acrylic polymer finishes",
      "Flexible top coats",
      "Modern facade finishes",
      "Lightweight substrate systems",
      "Residential exteriors",
      "Commercial frontages",
    ] as const,
  },

  textureCoatings: {
    label: "Texture Coating Finishes",
    labelFarsi: "فینیش‌های تکسچر کوتینگ",
    image: [],
    description: [
      "Texture coating applications designed to deliver visual appeal, additional protection, and a premium finished surface.",
    ],
    items: [
      "Fine texture finishes",
      "Medium texture coatings",
      "Feature wall textures",
      "Facade decorative finishes",
      "Protective coloured coatings",
      "Low-maintenance exterior surfaces",
    ] as const,
  },

  remedialRepairs: {
    label: "Render Repairs & Surface Renewal",
    labelFarsi: "تعمیر رندر و نوسازی سطح",
    image: [],
    description: [
      "Repair and renewal services for cracked, aged, or damaged render surfaces to restore a cleaner and more durable finish.",
    ],
    items: [
      "Crack repairs",
      "Patch rendering",
      "Delaminated surface repairs",
      "Recoating aged finishes",
      "Surface preparation",
      "Finish matching where practical",
    ] as const,
  },
} as const satisfies ServiceSubCategory;