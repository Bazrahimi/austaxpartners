import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { HiMail, HiPhone } from "react-icons/hi";

import { uiFond } from "@/app/_lib/org/font";
import { SOCIAL_MEDIA } from "@/app/_lib/org/orgPages/contactUs";
import { ORG_PROFILE } from "@/app/_lib/org/profile";
import {
  ADMIN_LINKS,
  PublicRoutes,
  QUICK_LINKS,
  SERVICES_LINKS,
} from "@/app/_lib/routes/publicRoutes";
import { cn } from "@/app/_lib/utils/cn";

import { P } from "../../typography/paragraph";
import Acknowledgement from "./Acknowledgement";
import FooterHeader from "./FooterHeader";
import PoweredByKateb from "./PoweredByKateb";

export const CN = {
  footer: "bg-org-secondary-main py-5",
  wrap: "mx-auto max-w-7xl px-6 py-14",
  grid: "grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4",
  list: "space-y-2 text-sm",
  listDense: "space-y-3 text-sm",
  link: cn(
    uiFond.className,
    "rounded-sm underline underline-offset-4 decoration-black/30 hover:decoration-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
  ),
  socialLink:
    "flex items-center gap-2 rounded-sm underline underline-offset-4 decoration-black/30 hover:decoration-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
  item: "flex items-start gap-2",
  icon: "mt-1 text-black",
};

const SOCIAL_META = {
  facebook: {
    label: "Facebook",
    aria: "Open Facebook (opens in new tab)",
    Icon: FaFacebook,
    iconClass: "text-blue-600",
  },
  instagram: {
    label: "Instagram",
    aria: "Open Instagram (opens in new tab)",
    Icon: FaInstagram,
    iconClass: "text-pink-600",
  },
  tiktok: {
    label: "TikTok",
    aria: "Open TikTok (opens in new tab)",
    Icon: FaTiktok,
    iconClass: "text-black",
  },
} as const;

const lightHeader = Boolean(ORG_PROFILE.textOnSecondary);

const socialEntries = Object.entries(SOCIAL_MEDIA).filter(
  ([, href]) => typeof href === "string" && href.length > 0,
);

const Footer = () => {
  return (
    <footer className={CN.footer} role="contentinfo">
      <div className={`${CN.wrap} ${CN.grid}`}>
        <div className="sm:col-span-2">
          <FooterHeader lightContent={lightHeader}>
            {ORG_PROFILE.orgName}
          </FooterHeader>

          <P size="md" className="text-gray-900">
            {ORG_PROFILE.description}
          </P>
          <P className="mt-2 text-gray-900 " size="sm">
            {`Tax Agent Number: ${ORG_PROFILE.taxAgentNumber}`}
          </P>

          <P className="mt-2   text-gray-900" size="sm">
           
            {`ABN: ${ORG_PROFILE.abn}`}
          </P>

          <P className="mt-2 text-gray-900" size="sm">
            {ORG_PROFILE.address}
          </P>
        </div>

        <div>
          <FooterHeader lightContent={lightHeader}>Quick Links</FooterHeader>
          <ul className={CN.list}>
            {QUICK_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={CN.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeader lightContent={lightHeader}>Services</FooterHeader>
          <ul className={CN.list}>
            {SERVICES_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={CN.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic" aria-labelledby="contact-heading">
          <FooterHeader lightContent={lightHeader}>Get in touch</FooterHeader>

          <ul className={CN.listDense}>
            <li className={CN.item}>
              <FaWpforms className={CN.icon} aria-hidden="true" />
              <Link href={PublicRoutes.contact()} className={CN.link}>
                Quick Enquiry
              </Link>
            </li>

            <li className={CN.item}>
              <HiMail className={CN.icon} aria-hidden="true" />
              <a href={`mailto:${ORG_PROFILE.email}`} className={CN.link}>
                {ORG_PROFILE.email}
              </a>
            </li>

            {ORG_PROFILE.phone && (
              <li className={CN.item}>
                <HiPhone className={CN.icon} aria-hidden="true" />
                <a
                  href={`tel:${ORG_PROFILE.phone.replace(/\s/g, "")}`}
                  className={CN.link}
                >
                  {ORG_PROFILE.phone}
                </a>
              </li>
            )}
          </ul>
        </address>

        {socialEntries.length > 0 && (
          <div>
            <FooterHeader lightContent={lightHeader}>Follow Us</FooterHeader>

            <ul className={CN.list}>
              {socialEntries.map(([key, href]) => {
                const meta = SOCIAL_META[key as keyof typeof SOCIAL_META];
                if (!meta) return null;

                const { Icon, label, aria, iconClass } = meta;

                return (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={CN.socialLink}
                      aria-label={aria}
                    >
                      <Icon className={iconClass} aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div>
          <FooterHeader lightContent={lightHeader}>Admin</FooterHeader>
          <ul className={CN.list}>
            {ADMIN_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={CN.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Acknowledgement lightHeader={lightHeader} />
      <PoweredByKateb />
    </footer>
  );
};

export default Footer;
