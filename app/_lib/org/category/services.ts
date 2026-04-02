import type { ServicesPage } from "../definitions";
import { cldImages } from "../publicAssets";

import { claddingReplacement } from "./subCategories/claddingReplacement";
import { externalCladdingSystems } from "./subCategories/externalCladdingSystems";
import { renderAcrylicCoatings } from "./subCategories/renderAcrylicCoatings";
import { solidPlastering } from "./subCategories/solidPlastering";

export const SERVICES_PAGE = {
  solidPlastering: {
    slug: "solid-plastering-services-narre-warren-north",
    label: "Solid Plastering Services",
    image: [cldImages.services.subCategory1],
    labelFarsi: "خدمات گچ‌کاری و پلاستر",
    description: [
      "Professional solid plastering services for residential and commercial properties, including internal and external surfaces, feature finishes, and durable render-ready applications.",
    ] as const,
    subcategories: solidPlastering,
  },

  renderAcrylicCoatings: {
    slug: "render-and-acrylic-coatings-narre-warren-north",
    label: "Render & Acrylic Coatings",
    image: [cldImages.services.subCategory2],
    labelFarsi: "رندر و پوشش‌های اکریلیک",
    description: [
      "Render and acrylic coating systems for homes, developments, and commercial buildings, designed to improve appearance, weather resistance, and long-term surface protection.",
    ] as const,
    subcategories: renderAcrylicCoatings,
  },

  externalCladdingSystems: {
    slug: "external-cladding-systems-narre-warren-north",
    label: "External Cladding Systems",
    image: [cldImages.services.subCategory3],
    labelFarsi: "سیستم‌های کلدینگ خارجی",
    description: [
      "External cladding system installation for modern residential and commercial projects, including lightweight facade solutions, architectural finishes, and compliant exterior upgrades.",
    ] as const,
    subcategories: externalCladdingSystems,
  },

  claddingReplacement: {
    slug: "cladding-replacement-projects-narre-warren-north",
    label: "Cladding Replacement Projects",
    image: [cldImages.services.subCategory4],
    labelFarsi: "پروژه‌های تعویض کلدینگ",
    description: [
      "Cladding replacement services for ageing, damaged, or non-compliant external wall systems, with a focus on safe removal, updated installation, and improved building presentation.",
    ] as const,
    subcategories: claddingReplacement,
  },
} as const satisfies Record<string, ServicesPage>;
