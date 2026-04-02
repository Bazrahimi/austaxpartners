import { HiPhone } from "react-icons/hi";

import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { PublicRoutes } from "@/app/_lib/routes/publicRoutes";
import Link from "next/link";
import { FaWpforms } from "react-icons/fa6";
import {
  // HiLocationMarker,
  HiMail,
} from "react-icons/hi";
import { CN } from "./Footer";
import FooterHeader from "./FooterHeader";

const CONTACT = {
  email: ORG_PROFILE.email,
  ...(ORG_PROFILE.phone && {
    phone: ORG_PROFILE.phone,
  }),
  address: ORG_PROFILE.address,
};

const GetInTouch = ({ lightHeader = false }: { lightHeader: boolean }) => {
  return (
    <address className="not-italic" aria-labelledby="contact-heading">
      <FooterHeader lightContent={lightHeader}>Get in touch</FooterHeader>

      <ul className={CN.listDense}>
        <li className={CN.Item}>
          <FaWpforms className={CN.Icon} aria-hidden="true" />
          <Link href={PublicRoutes.contact()} className={CN.link}>
            Quick Enquiry
          </Link>
        </li>

        <li className={CN.Item}>
          <HiMail className={CN.Icon} aria-hidden="true" />
          <a href={`mailto:${CONTACT.email}`} className={CN.link}>
            {CONTACT.email}
          </a>
        </li>
        <li className={CN.Item}>
          <HiPhone className={CN.Icon} aria-hidden="true" />
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className={CN.link}
          >
            {CONTACT.phone}
          </a>
        </li>
      </ul>
    </address>
  );
};

export default GetInTouch;
