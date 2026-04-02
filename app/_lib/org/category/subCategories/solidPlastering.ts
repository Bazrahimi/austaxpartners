import type { ServiceSubCategory } from "../../definitions";

export const solidPlastering = {
  overview: {
    label: "Solid Plastering Overview",
    labelFarsi: "معرفی گچ‌کاری و پلاستر",
    image: [],
    description: [
      "Solid plastering services for residential and commercial properties requiring smooth finishes, durable wall systems, and quality preparation for long-term performance.",
    ],
    items: [
      "Internal plastering",
      "External plastering",
      "Cement render applications",
      "Patch and repair work",
      "Feature wall finishes",
      "Surface preparation and levelling",
    ] as const,
  },

  internalPlastering: {
    label: "Internal Solid Plastering",
    labelFarsi: "پلاستر داخلی",
    image: [],
    description: [
      "Internal solid plastering for walls and ceilings where a neat, consistent, and durable finish is required.",
    ],
    items: [
      "Internal walls",
      "Ceiling areas",
      "Smooth plaster finishes",
      "Repairs to damaged surfaces",
      "Preparation for painting",
      "Renovation plastering works",
    ] as const,
  },

  externalPlastering: {
    label: "External Solid Plastering",
    labelFarsi: "پلاستر خارجی",
    image: [],
    description: [
      "External plastering solutions designed to improve presentation, strengthen surfaces, and support weather resistance.",
    ],
    items: [
      "External walls",
      "Boundary walls",
      "Facade plastering",
      "Rendered finishes",
      "Repair of cracked surfaces",
      "Protective exterior coatings base",
    ] as const,
  },

  foamBoardSystems: {
    label: "Foam Board Systems",
    labelFarsi: "سیستم‌های فوم‌بورد",
    image: [],
    description: [
      "Lightweight foam board installation suitable for modern facade systems requiring efficient installation and clean rendered finishes.",
    ],
    items: [
      "Facade foam board systems",
      "Lightweight wall build-ups",
      "Decorative architectural shapes",
      "Render-ready foam surfaces",
      "Modern exterior finishes",
      "Insulated cladding support systems",
    ] as const,
  },

  hebelApplications: {
    label: "Hebel Surface Applications",
    labelFarsi: "کاربردهای هبل",
    image: [],
    description: [
      "Preparation and finishing for Hebel and similar lightweight construction surfaces requiring compatible render systems and protective coatings.",
    ],
    items: [
      "Hebel wall preparation",
      "Joint treatment systems",
      "Reinforcement mesh application",
      "Base coat systems",
      "Protective render finishes",
      "Acrylic texture top coats",
    ] as const,
  },
} as const satisfies ServiceSubCategory;