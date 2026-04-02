// app/_lib/org/aboutUs.ts
import type { TeamSection } from "../definitions";
import { ORG_PROFILE } from "../profile";
import { publicAssets } from "../publicAssets";

export const ABOUT_TEAM: TeamSection = {
  id: "team",
  title: "Our Team",
  professionalTitles: [
    "Rendering Contractors",
    "Solid Plastering Specialists",
    "Cladding Installation Professionals",
    "Residential and Commercial Facade Finishes",
  ],
  intro: `${ORG_PROFILE.orgName} is backed by practical industry experience and a strong commitment to quality workmanship across residential and commercial rendering and cladding projects in Victoria.`,
  members: [
    {
      name: "Essa Rahimi",
      role: "Director",
      image: publicAssets.team.placeholder,
      bio: "Essa Rahimi is the Director of Excel Render Pty Ltd and brings practical experience across rendering, solid plastering, external cladding systems, acrylic coatings, texture finishes, and facade improvement works. He is committed to delivering reliable service, quality workmanship, and professional results across residential and commercial projects.",
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
    `${ORG_PROFILE.orgName} provides professional rendering, solid plastering, external cladding systems, Hebel finishing, foam board applications, acrylic coatings, and texture coating services across Victoria for residential and commercial projects. We work across new builds, houses, apartments, developments, renovation jobs, and remedial facade works.`,
    "We understand that quality exterior finishes depend on proper preparation, skilled workmanship, compatible systems, and attention to detail. Our goal is to deliver clean, durable, and professional results that improve appearance, weather protection, and long-term value.",
  ],
} as const;

export const ABOUT_SECTIONS: readonly TextSection[] = [
  {
    id: "purpose",
    title: "Our Purpose",
    items: [
      "Our purpose is to provide dependable rendering and cladding services that improve the finish, durability, protection, and presentation of residential and commercial properties.",
    ],
  },
  {
    id: "vision",
    title: "Our Vision",
    items: [
      "We aim to be a trusted name in Victoria for rendering, solid plastering, cladding, and facade finishing services, known for honest service, strong workmanship, and reliable project delivery.",
    ],
  },
  {
    id: "what-we-do",
    title: "What We Do",
    items: [
      "We provide solid plastering, cement rendering, acrylic rendering, texture coating, Hebel and foam board systems, external cladding installation, cladding replacement, surface preparation, and facade repair works for homes, apartments, developments, and commercial sites.",
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
    "Delivering quality workmanship with attention to detail.",
    "Being reliable, professional, and respectful on every site.",
    "Using suitable systems, proper preparation, and practical methods for durable finishes.",
    "Providing honest communication and dependable service from start to finish.",
  ],
} as const;