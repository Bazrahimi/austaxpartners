// app/_lib/org/org-profile.ts

import { CtaKey } from "../content/cta";
import { OtherLanguageKey } from "../languages/multiculturalStatement";
import { ORG_INDUSTRY_SECTORS } from "./serviceArea";

const ORG_DOMAIN = "austaxpartners.com.au" as const;
const orgName = "Austax Partners Advisory";
const appName = "austaxpartners";

export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return `https://${appName}.vercel.app`;
  // return `https://${ORG_DOMAIN}`;
};

export const ORG_PROFILE = {
  orgName: orgName,
  orgNameFarsi: "",
  industry: ORG_INDUSTRY_SECTORS.PROFESSIONAL.industry,
  subSector: ORG_INDUSTRY_SECTORS.PROFESSIONAL.sectors.accountant,
  description:
    "Professional tax, accounting, and business advisory services for individuals, sole traders, and businesses across Victoria.",
  // languages: ["EN", "HZ", "FA"] as const satisfies readonly LanguageKey[],
  otherLangKeys: [] as OtherLanguageKey[],
  domain: ORG_DOMAIN,
  email: "jankalim000@gmail.com",
  phone: "0423 466 236",
  address: "Level 2, 311 Lonsdale Street, Dandenong VIC 3175",
  abn: "92 185 396 311",
  cta: "freeConsultation" as CtaKey,

  // Brand colours
  primaryColor: "#2f7d32",
  secondaryColor: "#6b7280",

  textOnSecondary: "text-white",
} as const;
