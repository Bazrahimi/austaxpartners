// app/_lib/org/org-profile.ts

import { CtaKey } from "../content/cta";
import { OtherLanguageKey } from "../languages/multiculturalStatement";
import { ORG_INDUSTRY_SECTORS } from "./serviceArea";

const ORG_DOMAIN = "excelrendering.com.au" as const;
const orgName = "Excel Render Pty Ltd";
const appName = "excelrender";

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
  industry: ORG_INDUSTRY_SECTORS.BUILDING.industry,
  subSector: ORG_INDUSTRY_SECTORS.BUILDING.Sectors.rendering,
  description:
    "Professional rendering services across Victoria for residential and commercial projects.",
  // languages: ["EN", "HZ", "FA"] as const satisfies readonly LanguageKey[],
  otherLangKeys: [] as OtherLanguageKey[],
  domain: ORG_DOMAIN,
  email: "excellrender@hotmail.com",
  phone: "0432 477 389",
  address: "5-6 Carolyn Close, Narre Warren North, VIC 3804",
  abn: "78 608 790 905",
  cta: "freeQuote" as CtaKey,

  // Brand colours
  primaryColor: "#0ea5e9", // extra bright blue
  secondaryColor: "#334155", // deep slate

  textOnSecondary: "text-gray-50",
} as const;
