import type { ServiceSubCategory } from "../../definitions";

export const businessPersonalFinance = {
  overview: {
    label: "Business & Personal Finance Overview",
    labelFarsi: "معرفی مالی کسب‌وکار و شخصی",
    image: [],
    description: [
      "Business and personal finance support to help clients better manage cash flow, understand commitments, and plan with greater confidence.",
    ],
    items: [
      "Cash flow support",
      "Budget planning",
      "Personal finance guidance",
      "Business finance visibility",
      "Financial organisation support",
      "Planning discussions",
    ] as const,
  },

  cashflowBudgeting: {
    label: "Cash Flow & Budgeting",
    labelFarsi: "جریان نقدی و بودجه‌بندی",
    image: [],
    description: [
      "Support with budgeting and cash flow awareness to help both individuals and businesses maintain stronger financial control.",
    ],
    items: [
      "Cash flow reviews",
      "Budget planning support",
      "Income and expense tracking",
      "Short-term planning",
      "Financial visibility improvements",
      "Budget monitoring guidance",
    ] as const,
  },

  personalFinance: {
    label: "Personal Finance Support",
    labelFarsi: "پشتیبانی مالی شخصی",
    image: [],
    description: [
      "Practical support for individuals who want a clearer understanding of their personal finances and obligations.",
    ],
    items: [
      "Personal budgeting support",
      "Income and expense review",
      "Financial document organisation",
      "Tax-ready recordkeeping",
      "Personal finance check-ins",
      "General financial clarity support",
    ] as const,
  },

  businessFinance: {
    label: "Business Finance Support",
    labelFarsi: "پشتیبانی مالی کسب‌وکار",
    image: [],
    description: [
      "Financial support for businesses wanting better oversight of business position, commitments, and future planning needs.",
    ],
    items: [
      "Business cash flow review",
      "Expense trend review",
      "Financial health summaries",
      "Commitment planning",
      "Business finance organisation",
      "Decision support discussions",
    ] as const,
  },

  financeSystems: {
    label: "Financial Systems & Organisation",
    labelFarsi: "سیستم‌ها و نظم مالی",
    image: [],
    description: [
      "Improving the way financial records, reports, and documents are organised to support smoother ongoing management.",
    ],
    items: [
      "Finance workflow organisation",
      "Document management support",
      "Reporting file structure",
      "Recordkeeping improvements",
      "Digital finance systems support",
      "Ongoing financial administration",
    ] as const,
  },
} as const satisfies ServiceSubCategory;