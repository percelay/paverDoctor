import { Calendar, MapPin, Home, Building2 } from "lucide-react";

const highlights = [
  { icon: Calendar,  label: "20+ Years Experience"       },
  { icon: MapPin,    label: "Tampa Bay Area & Florida"    },
  { icon: Home,      label: "Residential Projects"        },
  { icon: Building2, label: "Commercial Properties"       },
];

export default function About() {
  return (
    <section id="about" className="py-24 section-alt relative overflow-hidden">

      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(27,67,50,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              About
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
              style={{ color: "var(--color-text-main)" }}
            >
              The Florida Pavers{" "}
              <span className="gradient-text">Doctors, Inc.</span>
            </h2>
            <div
              className="space-y-4 leading-relaxed text-[15px]"
              style={{ color: "var(--color-text-muted)" }}
            >
              <p>
                For over 20 years, The Florida Pavers Doctors, Inc. has been
                repairing, cleaning, re-sanding, and sealing concrete and brick
                pavers across Tampa Bay and throughout Florida. We bring the same
                care and expertise to every job — whether it&apos;s a backyard pool
                deck or a commercial shopping center.
              </p>
              <p>
                Our team is professional, courteous, and efficient. We take time
                to assess each project individually and recommend the right
                approach — never more than what&apos;s needed, always done right.
                Free estimates are available Monday through Saturday during
                normal business hours, with exceptions made for customers who
                work during the day.
              </p>
              <p>
                If you&apos;re looking for a high-quality paver restoration contractor
                you can trust, you&apos;ve come to the right place. Call us today for
                your free evaluation.
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass-2 rounded-2xl p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-3)]"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(27,67,50,0.14) 0%, rgba(27,67,50,0.08) 100%)",
                    border: "1px solid rgba(27,67,50,0.20)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                </div>
                <span
                  className="font-semibold text-sm leading-snug"
                  style={{ color: "var(--color-text-main)" }}
                >
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
