import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[var(--color-bg)] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface)] border border-gray-200 text-xs font-medium text-[var(--color-text-muted)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
            HVACR Industry Specialists
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-main)] leading-[1.1] mb-6">
            Components for{" "}
            <span className="text-[var(--color-primary)]">Environmental</span>{" "}
            Systems
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-10 max-w-2xl">
            Importer, exporter, manufacturer, and distributor specializing in
            installation components and accessories for the HVACR industry.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:opacity-90 hover:-translate-y-1 transition-all duration-200 shadow-md"
            >
              Buy Products
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#reps"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 bg-[var(--color-surface)] text-[var(--color-text-main)] font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:-translate-y-1 transition-all duration-200"
            >
              <MapPin className="w-4 h-4" />
              Search Reps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
