// app/_lib/org/aboutUs.ts
import type { TeamSection } from "../definitions";
import { ORG_PROFILE } from "../profile";
import { publicAssets } from "../publicAssets";

export const ABOUT_TEAM: TeamSection = {
  id: "team",
  title: "Our Team",
  professionalTitles: [
    "Registered Tax Agent",
    "Accounting and Bookkeeping Professionals",
    "Business Advisory Support",
    "Tax and Compliance Services",
  ],
  intro: `${ORG_PROFILE.orgName} is supported by practical experience in tax, accounting, bookkeeping, and business advisory services, with a commitment to helping individuals and businesses across Australia with clear, reliable, and professional financial support.`,
  members: [
    {
      name: "Kalim Jan",
      role: "Registered Tax Agent",
      image: publicAssets.team.placeholder,
      bio: "Kalim Jan is a Registered Tax Agent at Austax Partners Advisory and is committed to providing reliable tax, accounting, bookkeeping, and business advisory services for individuals, sole traders, and businesses. He focuses on clear communication, practical support, and professional service to help clients manage their tax obligations, financial records, and business needs with confidence.",
    },
  ],
} as const;

export type TextSection = {
  id: string;
  title: string;
  items: readonly string[];
};

export type ValuesSection = {
  id: string;
  title: string;
  items: readonly string[];
  icon?: "check";
};

export const ABOUT_INTRODUCTION: TextSection = {
  id: "introduction",
  title: `About ${ORG_PROFILE.orgName}`,
  items: [
    `${ORG_PROFILE.orgName} provides professional tax, accounting, bookkeeping, BAS, GST, and business advisory services for individuals, sole traders, companies, and other businesses across Australia. We assist with tax returns, financial records, ongoing compliance, reporting support, and practical financial guidance.`,
    "We understand that clients value accurate work, timely service, clear advice, and dependable support. Our goal is to provide practical and professional accounting services that help clients stay organised, meet their obligations, and make informed financial decisions.",
  ],
} as const;

export const ABOUT_SECTIONS: readonly TextSection[] = [
  {
    id: "purpose",
    title: "Our Purpose",
    items: [
      "Our purpose is to provide dependable tax, accounting, and advisory services that help individuals and businesses stay compliant, financially organised, and better supported in their decision-making.",
    ],
  },
  {
    id: "vision",
    title: "Our Vision",
    items: [
      "We aim to be a trusted name in Australia for tax, accounting, bookkeeping, and business advisory services, known for professionalism, accuracy, and reliable client support.",
    ],
  },
  {
    id: "what-we-do",
    title: "What We Do",
    items: [
      "We provide individual and business tax returns, bookkeeping, BAS and GST support, accounting services, financial reporting assistance, and practical business advisory services for clients across a range of industries and business structures.",
    ],
  },
  {
    id: "business-details",
    title: "Business Details",
    items: [
      `${ORG_PROFILE.orgName} operates as an Australian business. ABN: ${ORG_PROFILE.abn}.`,
    ],
  },
] as const;

export const ABOUT_VALUES: ValuesSection = {
  id: "values",
  title: "Our Values",
  icon: "check",
  items: [
    "Providing accurate, professional, and dependable service.",
    "Supporting clients with clear communication and practical guidance.",
    "Helping individuals and businesses meet their tax and accounting obligations with confidence.",
    "Building long-term trust through integrity, consistency, and respectful client service.",
  ],
} as const;