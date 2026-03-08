import { Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="site-section section-shell section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 animate-rise">
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)] mb-2">
            Get in Touch
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="glass-card-strong rounded-2xl p-8 flex flex-col gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(91,202,247,0.18) 0%, rgba(30,111,168,0.12) 100%)",
                border: "1px solid rgba(91,202,247,0.20)",
              }}
            >
              <Phone className="w-5 h-5 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)] mb-1">Call Us</p>
              <a
                href="tel:8135754300"
                className="text-3xl font-bold text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors duration-200"
              >
                813-575-4300
              </a>
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Free estimates available. We&apos;ll come out, assess your pavers, and
              give you a straight quote.
            </p>
          </div>

          <div className="glass-card-strong rounded-2xl p-8 flex flex-col gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(91,202,247,0.18) 0%, rgba(30,111,168,0.12) 100%)",
                border: "1px solid rgba(91,202,247,0.20)",
              }}
            >
              <Clock className="w-5 h-5 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)] mb-1">Hours</p>
              <p className="text-xl font-bold text-[var(--color-text-main)]">Monday – Saturday</p>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">Normal business hours</p>
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Can&apos;t make it during the day? We&apos;re flexible — just mention it when
              you call and we&apos;ll work something out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
