// app/_ui/Partners.tsx
import Image from "next/image";
import { publicAssets } from "../_lib/org/publicAssets";

const partners = [
  {
    name: "CPA",
    src: publicAssets.partners.cpa,
    alt: "CPA logo",
  },
  {
    name: "NTAA",
    src: publicAssets.partners.ntaa,
    alt: "NTAA logo",
  },
  {
    name: "Tax Practitioners Board",
    src: publicAssets.partners.taxPractitionersBoard,
    alt: "Tax Practitioners Board logo",
  },
  {
    name: "ASIC Registered Agent",
    src: publicAssets.partners.asicRegisteredAgent,
    alt: "ASIC Registered Agent logo",
  },
  {
    name: "Xero",
    src: publicAssets.partners.xero,
    alt: "Xero logo",
  },
] as const;

const Partners = () => {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Trusted Network
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Professional Memberships & Partner Platforms
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;