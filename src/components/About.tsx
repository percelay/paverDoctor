import { Building2, Globe, Package, Truck } from "lucide-react";

const highlights = [
  { icon: Building2, label: "Founded 1986" },
  { icon: Globe, label: "USA & Canada" },
  { icon: Package, label: "Commercial & Residential" },
  { icon: Truck, label: "Central Warehouse" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
              About
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)] mb-6 leading-tight">
              MarketAir, Inc.
            </h2>
            <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
              <p>
                Originally founded as a manufacturer&apos;s representative company by
                Gerry Spanger in April 1986, MarketAir, Inc. reinvented itself in
                January 2016 as an importer, exporter, manufacturer and distributor
                specializing in installation components and accessories for the
                HVACR industry.
              </p>
              <p>
                We have developed and acquired a number of innovative new products
                for commercial and residential applications, and cover both the
                ducted and ductless sectors, as well as the fast developing VRF/VRV
                market. These include our own dedicated products which are
                manufactured to our specifications, as well as a range of imported
                items sourced from international manufacturers.
              </p>
              <p>
                In addition, we act as a national distributor for smaller
                independent USA manufacturers who do not have their own sales
                organizations. MarketAir has a national network of manufacturers&apos;
                reps who sell our products into the HVACR industry through wholesale
                distribution and operates a centrally situated warehouse from which
                its products are shipped throughout the USA and Canada.
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-[var(--color-bg)] rounded-2xl p-6 shadow-sm flex flex-col items-start gap-3 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <span className="font-semibold text-[var(--color-text-main)] text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
