// app/_lib/org/serviceArea.ts

export const ORG_INDUSTRY_SECTORS = {
  BUILDING: {
    industry: "Building and Construction",
    defaultScope: "metro",
    sectors: {
      painting: "Painting and Decorating",
      builder: "Registered Builders",
      rendering: "Solid Plastering and Rendering",
    },
  },

  PROFESSIONAL: {
    industry: "Professional",
    defaultScope: "national",
    sectors: {
      lawyer: "Principal Lawyers",
      accountant: "Registered Tax Agent",
    },
  },

  ASSOCIATION: {
    industry: "Association",
    defaultScope: "state",
    sectors: {
      ngo: "Non profit organisation",
    },
  },

  TECHNOLOGY: {
    industry: "technology",
    defaultScope: "state",
    sectors: {
      web_development: "Web Application | Software",
    },
  },
} as const;

export type OrgIndustrySectorKey = keyof typeof ORG_INDUSTRY_SECTORS;
export type CoverageScope =
  (typeof ORG_INDUSTRY_SECTORS)[OrgIndustrySectorKey]["defaultScope"];

export type ServiceArea = {
  scope: CoverageScope;
  primaryRegion: string;
  state: string;
  country: string;
  featuredSuburbs?: string[];
  note?: string;
};

export const SERVICE_AREA: ServiceArea = {
  scope: ORG_INDUSTRY_SECTORS.PROFESSIONAL.defaultScope,
  primaryRegion: "Australia",
  state: "National",
  country: "Australia",
  featuredSuburbs: [],
  note: "We provide tax, accounting, bookkeeping, and business advisory services for individuals and businesses across Australia.",
};

export const scopeLabel = (scope: string) => {
  switch (scope) {
    case "metro":
      return "Melbourne Metro";
    case "state":
      return "Victoria-Wide";
    case "national":
      return "Australia-Wide";
    default:
      return scope;
  }
};