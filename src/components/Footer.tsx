import { Phone, MapPin } from "lucide-react";

const links = [
  { label: "About",    href: "#about"    },
  { label: "Services", href: "#services" },
  { label: "Gallery",  href: "#gallery"  },
  { label: "Contact",  href: "#contact"  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="glass-card-strong rounded-3xl p-7 sm:p-10 grid md:grid-cols-3 gap-10">
          <div>
            <span className="font-bold text-lg text-[var(--color-text-main)] block mb-4">
              The Florida Pavers Doctors, Inc.
            </span>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              Concrete and brick paver repair, cleaning, re-sanding, and sealing
              for residential and commercial properties throughout Tampa Bay and
              Florida.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)] mb-4">Navigation</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary-2)] transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)] mb-4">Contact</p>
            <div className="space-y-3">
              <a
                href="tel:8135754300"
                className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary-2)] transition-colors duration-200"
              >
                <Phone className="w-4 h-4 shrink-0" />
                813-575-4300
              </a>
              <div className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Tampa Bay Area, Florida</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--color-border-soft)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-dim)]">
          <p>
            &copy; {year} The Florida Pavers Doctors, Inc. All rights reserved.
          </p>
          <p>
            Free estimates Mon – Sat &nbsp;·&nbsp; 813-575-4300
          </p>
        </div>
      </div>
    </footer>
  );
}
