import type { ServiceSubCategory } from "../../definitions";

export const taxCompliance = {
  overview: {
    label: "Tax Services Overview",
    labelFarsi: "معرفی خدمات مالیاتی",
    image: [],
    description: [
      "Tax services for individuals, sole traders, and businesses across Australia, with support for lodgements, compliance, and practical tax management.",
    ],
    items: [
      "Individual tax returns",
      "Business tax returns",
      "BAS and GST support",
      "ATO compliance assistance",
      "Tax planning support",
      "Ongoing tax guidance",
    ] as const,
  },

  individualTax: {
    label: "Individual Tax Returns",
    labelFarsi: "اظهارنامه مالیاتی اشخاص",
    image: [],
    description: [
      "Tax return preparation and lodgement support for individuals with attention to accuracy, deductions, and compliant reporting.",
    ],
    items: [
      "Salary and wage returns",
      "Investment income returns",
      "Rental property reporting",
      "Work-related deductions",
      "Capital gains support",
      "Annual individual lodgements",
    ] as const,
  },

  businessTax: {
    label: "Business Tax Compliance",
    labelFarsi: "انطباق مالیاتی کسب‌وکار",
    image: [],
    description: [
      "Business tax services to support compliant reporting and lodgement obligations for different business structures.",
    ],
    items: [
      "Company tax returns",
      "Trust tax returns",
      "Partnership returns",
      "Sole trader tax returns",
      "Year-end tax preparation",
      "Tax record review",
    ] as const,
  },

  basGst: {
    label: "BAS, GST & ATO Lodgements",
    labelFarsi: "باس، جی‌اس‌تی و ارسال به اداره مالیات",
    image: [],
    description: [
      "Support with regular tax reporting and lodgement obligations to help businesses remain current and organised.",
    ],
    items: [
      "BAS preparation",
      "GST reporting",
      "PAYG withholding support",
      "ATO lodgement assistance",
      "IAS support",
      "Periodic reporting preparation",
    ] as const,
  },

  taxPlanning: {
    label: "Tax Planning & Ongoing Support",
    labelFarsi: "برنامه‌ریزی مالیاتی و پشتیبانی مستمر",
    image: [],
    description: [
      "Forward-looking tax support to help clients better understand obligations and prepare for upcoming financial periods.",
    ],
    items: [
      "Year-round tax support",
      "Tax planning discussions",
      "Tax position reviews",
      "Obligation awareness support",
      "Recordkeeping guidance",
      "Business and individual tax check-ins",
    ] as const,
  },
} as const satisfies ServiceSubCategory;