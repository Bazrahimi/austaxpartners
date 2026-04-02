import type { ServiceSubCategory } from "../../definitions";

export const accountingBookkeeping = {
  overview: {
    label: "Accounting & Bookkeeping Overview",
    labelFarsi: "معرفی حسابداری و دفترداری",
    image: [],
    description: [
      "Accounting and bookkeeping services to help businesses maintain accurate financial records, meet reporting obligations, and stay organised throughout the year.",
    ],
    items: [
      "Bookkeeping support",
      "Bank reconciliation",
      "Accounts payable and receivable",
      "Payroll record assistance",
      "Financial record maintenance",
      "Ongoing bookkeeping systems",
    ] as const,
  },

  transactionRecords: {
    label: "Transaction Recording & Reconciliations",
    labelFarsi: "ثبت تراکنش‌ها و تطبیق حساب‌ها",
    image: [],
    description: [
      "Accurate recording of business transactions and regular reconciliations to support reliable financial records and day-to-day clarity.",
    ],
    items: [
      "Income and expense recording",
      "Bank reconciliations",
      "Credit card reconciliations",
      "Chart of accounts setup",
      "General ledger review",
      "Monthly bookkeeping checks",
    ] as const,
  },

  reportingSupport: {
    label: "Financial Reporting Support",
    labelFarsi: "پشتیبانی گزارش‌های مالی",
    image: [],
    description: [
      "Preparation and organisation of accounting information to support reporting, compliance, and informed business decisions.",
    ],
    items: [
      "Profit and loss reporting",
      "Balance sheet reporting",
      "Cash flow summaries",
      "Management reporting support",
      "Year-end file preparation",
      "Business record organisation",
    ] as const,
  },

  payrollAccounts: {
    label: "Payroll & Accounts Administration",
    labelFarsi: "مدیریت حقوق و حساب‌ها",
    image: [],
    description: [
      "Support with payroll-related records and general accounts administration to keep internal processes more efficient and consistent.",
    ],
    items: [
      "Payroll record support",
      "Superannuation record tracking",
      "Accounts payable support",
      "Accounts receivable support",
      "Invoice and payment tracking",
      "Internal accounts administration",
    ] as const,
  },

  softwareCloud: {
    label: "Cloud Accounting Systems",
    labelFarsi: "سیستم‌های حسابداری ابری",
    image: [],
    description: [
      "Setup and support for cloud accounting systems to improve access to records, visibility, and ongoing financial management.",
    ],
    items: [
      "Xero support",
      "MYOB support",
      "QuickBooks support",
      "Cloud file organisation",
      "Software setup assistance",
      "Bookkeeping workflow improvements",
    ] as const,
  },
} as const satisfies ServiceSubCategory;