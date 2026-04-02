import { SERVICES_LINKS } from "@/app/_lib/routes/publicRoutes";
import Link from "next/link";
import { CN } from "./Footer";
import FooterHeader from "./FooterHeader";

const ServiceLink = ({ lightHeader = false }: { lightHeader: boolean }) => {
  return (
    <div>
      <FooterHeader lightContent={lightHeader}>Services Links</FooterHeader>

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
  );
};

export default ServiceLink;
