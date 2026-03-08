import { Phone } from "lucide-react";

export default function EstimateBanner() {
  return (
    <section className="site-section section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card-strong rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 animate-rise">
          <div>
            <p className="eyebrow mb-2">No Commitment</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-main)] mb-3">
              Free Estimates — Mon through Sat
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed max-w-lg">
              We&apos;re happy to come out, take a look, and give you a clear,
              honest quote. No pressure, no obligation. If you work during the
              day, just let us know — we can make it work.
            </p>
          </div>
          <a
            href="tel:8135754300"
            className="btn-primary px-8 py-4 text-base font-bold shrink-0 whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            813-575-4300
          </a>
        </div>
      </div>
    </section>
  );
}
