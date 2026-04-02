import type { ServiceSubCategory } from "../../definitions";

export const claddingReplacement = {
  overview: {
    label: "Cladding Replacement Projects Overview",
    labelFarsi: "معرفی پروژه‌های تعویض کلدینگ",
    image: [],
    description: [
      "Cladding replacement services for projects requiring removal of ageing or damaged materials and installation of updated external wall systems.",
    ],
    items: [
      "Removal of existing cladding",
      "Replacement facade systems",
      "Surface preparation works",
      "Updated external finishes",
      "Residential replacement projects",
      "Commercial facade upgrades",
    ] as const,
  },

  assessmentPreparation: {
    label: "Assessment & Preparation",
    labelFarsi: "ارزیابی و آماده‌سازی",
    image: [],
    description: [
      "Initial project preparation to assess existing wall conditions and plan replacement works with the appropriate external system.",
    ],
    items: [
      "Existing facade review",
      "Surface condition checks",
      "Substrate preparation",
      "Replacement planning",
      "Staged work sequencing",
      "Site readiness coordination",
    ] as const,
  },

  removalReplacement: {
    label: "Removal & Replacement Works",
    labelFarsi: "برداشت و تعویض",
    image: [],
    description: [
      "Removal of existing external cladding materials and installation of updated systems suited to the project requirements.",
    ],
    items: [
      "Cladding removal",
      "Wall surface preparation",
      "New cladding installation",
      "Foam board replacement systems",
      "Hebel replacement systems",
      "Render-ready facade reinstatement",
    ] as const,
  },

  coatingFinishes: {
    label: "Render & Coating Finishes",
    labelFarsi: "فینیش‌های رندر و پوشش",
    image: [],
    description: [
      "Application of render, acrylic, and texture coating systems over replacement cladding to complete the external finish.",
    ],
    items: [
      "Base coat systems",
      "Reinforcement mesh application",
      "Acrylic coating finishes",
      "Texture coating systems",
      "Decorative facade completion",
      "Weather-protective surface finishes",
    ] as const,
  },

  projectDelivery: {
    label: "Project Delivery & Coordination",
    labelFarsi: "تحویل و هماهنگی پروژه",
    image: [],
    description: [
      "Cladding replacement projects often require careful coordination to support access, sequencing, and efficient progress across the site.",
    ],
    items: [
      "Staged project delivery",
      "Residential project coordination",
      "Commercial replacement scheduling",
      "Clear progress communication",
      "Site-conscious work practices",
      "Final finish review",
    ] as const,
  },
} as const satisfies ServiceSubCategory;