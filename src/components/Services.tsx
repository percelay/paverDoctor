import { Wrench, Droplets, Shield } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Paver Repairs",
    price: "$15.00 / sq ft",
    minimum: "$500 minimum",
    note: "Excessive roots may be more.",
    items: [
      "Remove roots under pavers",
      "Lift and re-level pavers as needed",
      "Repair perimeter concrete border",
      "Repair steps",
      "Install paver base sand as needed",
    ],
  },
  {
    icon: Droplets,
    title: "Cleaning & Re-Sanding",
    price: "$0.65 / sq ft",
    minimum: "$400 minimum",
    items: [
      "Pre-wash pavers",
      "Apply mold, mildew & degreaser compounds",
      "Pressure wash and clean pavers",
      "Apply angular silica (20/30 sand)",
      "Wet sand joints to hydro compact",
      "Check sand level — 1/8\"–1/4\" below paver chamfer",
    ],
  },
  {
    icon: Shield,
    title: "Paver Sealing",
    price: "$0.95 / sq ft",
    minimum: "$500 minimum",
    options: [
      {
        name: "Ultra-Wet Look",
        desc: "High solids nano acrylic with urethane. High enhancement, low VOC, durable barrier with joint stabilization and mold/mildew inhibitors.",
      },
      {
        name: "Super-Wet",
        desc: "High solids, low VOC two-component commercial grade water-based pure urethane. Ultimate enhancement and joint stabilization.",
      },
      {
        name: "Natural Luster",
        desc: "High solids, low VOC water-based urethane modified acrylic with algae and mold inhibitors. Penetrates the paver and provides a protective barrier with beautiful enhancement.",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="site-section section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 animate-rise">
          <p className="eyebrow mb-3">Services</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)] leading-tight">
            What We Do
          </h2>
          <p className="text-[var(--color-text-muted)] mt-4 text-sm sm:text-base leading-relaxed max-w-2xl">
            Full-service paver restoration — from root removal and leveling to
            deep cleaning and professional sealing. Every job comes with a free
            estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, price, minimum, note, items, options }) => (
            <div key={title} className="glass-card-strong rounded-2xl p-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(27,67,50,0.14) 0%, rgba(27,67,50,0.08) 100%)",
                    border: "1px solid rgba(27,67,50,0.20)",
                  }}
                >
                  <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-lg text-[var(--color-text-main)]">{title}</h3>
              </div>

              <hr className="ice-divider" />

              <div>
                <span className="text-2xl font-extrabold gradient-text">{price}</span>
                <p className="text-xs text-[var(--color-text-dim)] mt-0.5">{minimum}{note ? ` — ${note}` : ""}</p>
              </div>

              {items && (
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {options && (
                <div className="space-y-3">
                  {options.map((opt) => (
                    <div key={opt.name} className="glass-chip rounded-xl p-3">
                      <p className="text-xs font-bold text-[var(--color-primary-2)] mb-1">{opt.name}</p>
                      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
