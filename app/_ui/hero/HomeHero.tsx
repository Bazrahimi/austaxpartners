// app/(home)/_ui/HomeHero.tsx
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import HeroCta from "./components/HeroCta";
import { HeroHeadAndDesc } from "./components/HeroHeadAndDesc";
// import HeroMicroNav from "./components/HeroMicroNav";

import MultilingualSupport from "./components/MultilingualSupport";

import { CTA } from "@/app/_lib/content/cta";
// import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import {
  // getServiceCategoryLinks,
  PublicRoutes,
} from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";
import HeroBackground from "./components/HeroBackground";
import HeroLogoVisualCard from "./components/HeroLogoVisualCard";

type Props = {
  className?: string;
};

// ✅ Safe on server (pure function call)
// const HERO_SERVICE_CATEGORY_LINKS = getServiceCategoryLinks();

export default function HomeHero({ className }: Props) {
  const activeCta = CTA[op.cta];

  const quoteHref = {
    pathname: PublicRoutes.freeConsultation(),
    query: {
      headingLabel: activeCta.label,
      serviceLabel: "General enquiry",
      message: activeCta.message,
    },
  };

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-slate-200 shadow-xl lg:min-h-[700px]",
        className,
      )}
      aria-label={`${op.orgName} hero`}
    >
      <HeroBackground orgName={op.orgName} />

      <div className="relative z-10 flex flex-col lg:min-h-[700px]">
        <div className="grid flex-1 gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:items-stretch">
          {/* LEFT */}
          <div className="flex flex-col justify-start lg:col-span-7">
            <div className="space-y-5 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md sm:p-7">
              <HeroHeadAndDesc
                orgName={op.orgName}
                orgNameFarsi={op.orgNameFarsi}
                otherLangKeys={op.otherLangKeys}
                description={op.description}
              />

              <MultilingualSupport otherLangKeys={op.otherLangKeys} />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-start lg:col-span-5 lg:justify-end">
            <HeroLogoVisualCard
              orgName={op.orgName}
              ctaLabel={activeCta.label}
            />
          </div>
        </div>

        <div className="mt-auto border-t border-white/10">
          <HeroCta
            quoteHref={quoteHref}
            label={activeCta.label}
            phone={op.phone}
          />
        </div>
      </div>
    </section>
  );
}
