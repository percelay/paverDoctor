import { Home, Building2 } from "lucide-react";

const residential = [
  "Pool Decks",
  "Driveways",
  "Patios",
  "Walkways",
  "Steps",
  "Entry Areas",
];

const commercial = [
  "Office Buildings",
  "Retail Stores",
  "Condominiums",
  "Hotels",
  "Restaurants",
  "Shopping Centers",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="site-section section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 animate-rise">
          <p className="eyebrow mb-3">Who We Serve</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)]">
            Residential &amp; Commercial
          </h2>
          <p className="text-[var(--color-text-muted)] mt-4 text-sm sm:text-base leading-relaxed max-w-2xl">
            We work on all types of paved surfaces for homeowners and businesses
            throughout the Tampa Bay area.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Residential */}
          <div className="glass-card-strong rounded-2xl p-7 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(91,202,247,0.18) 0%, rgba(30,111,168,0.12) 100%)",
                  border: "1px solid rgba(91,202,247,0.20)",
                }}
              >
                <Home className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-bold text-lg text-[var(--color-text-main)]">Residential</h3>
            </div>
            <hr className="ice-divider" />
            <ul className="space-y-2">
              {residential.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial */}
          <div className="glass-card-strong rounded-2xl p-7 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(91,202,247,0.18) 0%, rgba(30,111,168,0.12) 100%)",
                  border: "1px solid rgba(91,202,247,0.20)",
                }}
              >
                <Building2 className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-bold text-lg text-[var(--color-text-main)]">Commercial</h3>
            </div>
            <hr className="ice-divider" />
            <ul className="space-y-2">
              {commercial.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
