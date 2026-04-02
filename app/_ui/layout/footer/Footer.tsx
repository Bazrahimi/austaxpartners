// app/_ui/layout/footer/footer.tsx
// import { BsFillCartFill } from "react-icons/bs";

import { uiFond } from "@/app/_lib/org/font";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { cn } from "@/app/_lib/utils/cn";
import Acknowledgement from "./Acknowledgement";
import GetInTouch from "./GetInTouch";
import OrganisationInfo from "./OrganisationInfo";
import PoweredByKateb from "./PoweredByKateb";
import QuickLinks from "./QuickLinks";
import ServiceLink from "./ServicesLinks";
import SocialLinks from "./SocialLinks";

// -------------------------------
// Reusable className tokens
// -------------------------------
export const CN = {
  footer: "bg-org-secondary-main py-5 text-gray-100",
  wrap: "mx-auto max-w-7xl px-6 py-14",
  grid: "grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 md:grid-cols-4",

  list: "space-y-2 text-sm text-gray-200",
  listDense: "space-y-3 text-sm text-gray-200",

  link: cn(
    uiFond.className,
    "text-gray-100 underline underline-offset-4 decoration-gray-400 hover:text-white hover:decoration-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-sm",
  ),

  socialLink:
    "flex items-center gap-2 text-gray-100 underline underline-offset-4 decoration-gray-400 hover:text-white hover:decoration-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 rounded-sm",

  Item: "flex items-start gap-2 text-gray-200",
  Icon: "mt-1 text-gray-100",
  copy: "border-t border-white/15 px-6 py-4 text-center text-xs text-gray-300",
};

const lightHeader = Boolean(ORG_PROFILE.textOnSecondary);

const Footer = () => {
  return (
    <footer className={CN.footer} role="contentinfo">
      <div className={`${CN.wrap} ${CN.grid}`}>
        {/* Organisation Info */}
        <OrganisationInfo lightHeader={lightHeader} />

        {/* Quick Links */}
        <QuickLinks lightHeader={lightHeader} />

        <ServiceLink lightHeader={lightHeader} />
        {/* Get In touch */}
        <GetInTouch lightHeader={lightHeader} />

        {/* Social Media */}
        <SocialLinks lightHeader={lightHeader} />
      </div>

      {/* Acknowledgements */}

      <Acknowledgement lightHeader={lightHeader} />
      <PoweredByKateb />
    </footer>
  );
};

export default Footer;
