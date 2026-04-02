import type { ServiceSubCategory } from "../../definitions";

export const businessAdvisory = {
  overview: {
    label: "Business Advisory Overview",
    labelFarsi: "معرفی مشاوره کسب‌وکار",
    image: [],
    description: [
      "Business advisory services focused on helping businesses improve structure, understand performance, and make more confident financial decisions.",
    ],
    items: [
      "Startup guidance",
      "Business structure advice",
      "Performance review support",
      "Cash flow discussions",
      "Growth planning",
      "General business strategy support",
    ] as const,
  },

  startupStructures: {
    label: "Startup & Business Structure Advice",
    labelFarsi: "مشاوره شروع کسب‌وکار و ساختار",
    image: [],
    description: [
      "Guidance for new and growing businesses on selecting suitable structures and setting up sound financial foundations.",
    ],
    items: [
      "Sole trader guidance",
      "Company setup support",
      "Trust structure discussions",
      "ABN and GST guidance",
      "Business registration support",
      "Early-stage financial setup",
    ] as const,
  },

  performancePlanning: {
    label: "Business Performance & Planning",
    labelFarsi: "عملکرد و برنامه‌ریزی کسب‌وکار",
    image: [],
    description: [
      "Support for reviewing business performance and planning next steps with better visibility over figures and financial direction.",
    ],
    items: [
      "Business performance reviews",
      "Budget planning support",
      "Cash flow planning",
      "Margin and cost review",
      "Goal-based planning",
      "Business improvement discussions",
    ] as const,
  },

  growthSupport: {
    label: "Growth & Operational Support",
    labelFarsi: "پشتیبانی رشد و عملیات",
    image: [],
    description: [
      "Practical advisory support for businesses seeking to strengthen operations, improve systems, and prepare for growth.",
    ],
    items: [
      "Operational process review",
      "Financial workflow improvements",
      "Scalability planning",
      "Expansion readiness support",
      "Internal reporting improvements",
      "Business efficiency guidance",
    ] as const,
  },

  decisionSupport: {
    label: "Management Decision Support",
    labelFarsi: "پشتیبانی تصمیم‌گیری مدیریتی",
    image: [],
    description: [
      "Clear financial guidance to support business owners and managers when making important commercial decisions.",
    ],
    items: [
      "Financial position review",
      "Scenario planning support",
      "Decision-making insights",
      "Cost analysis discussions",
      "Business health check support",
      "Ongoing advisor communication",
    ] as const,
  },
} as const satisfies ServiceSubCategory;