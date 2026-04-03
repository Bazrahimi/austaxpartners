import type { ServicesPage } from "../definitions";
import { cldImages } from "../publicAssets";

import { accountingBookkeeping } from "./subCategories/accountingBookkeeping";
import { businessAdvisory } from "./subCategories/businessAdvisory";
import { taxCompliance } from "./subCategories/taxCompliance";
import { businessPersonalFinance } from "./subCategories/businessPersonalFinance";

export const SERVICES_PAGE = {
  accountingBookkeeping: {
    slug: "accounting-and-bookkeeping-in-dandenong",
    label: "Accounting & Bookkeeping",
    image: [cldImages.services.subCategory1],
    labelFarsi: "حسابداری و دفترداری",
    description: [
      "Professional accounting and bookkeeping services for sole traders, companies, and growing businesses across Australia, helping keep records accurate, organised, and up to date.",
    ] as const,
    subcategories: accountingBookkeeping,
  },

  businessAdvisory: {
    slug: "business-advisory-in-dandenong",
    label: "Business Advisory",
    image: [cldImages.services.subCategory2],
    labelFarsi: "مشاوره کسب‌وکار",
    description: [
      "Practical business advisory services for startups, small businesses, and established operators seeking better structure, clearer reporting, and more informed financial decision-making.",
    ] as const,
    subcategories: businessAdvisory,
  },

  taxCompliance: {
    slug: "tax-services-in-dandenong",
    label: "Tax Services",
    image: [cldImages.services.subCategory3],
    labelFarsi: "خدمات مالیاتی",
    description: [
      "Reliable tax services for individuals and businesses across Australia, including tax returns, BAS, GST, compliance support, and ongoing tax planning assistance.",
    ] as const,
    subcategories: taxCompliance,
  },

  businessPersonalFinance: {
    slug: "business-and-personal-finance-in-dandenong",
    label: "Business & Personal Finance",
    image: [cldImages.services.subCategory4],
    labelFarsi: "مالی کسب‌وکار و شخصی",
    description: [
      "Business and personal finance support designed to improve financial visibility, cash-flow awareness, budgeting confidence, and smarter financial planning.",
    ] as const,
    subcategories: businessPersonalFinance,
  },
} as const satisfies Record<string, ServicesPage>;