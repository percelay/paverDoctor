import { Lightbulb } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
            Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)]">
            What We Do
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[var(--color-surface)] rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors duration-200">
              <Lightbulb className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-3">
              Products
            </h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
              Our sole emphasis is to find and introduce new and innovative
              components for environmental systems into the HVACR industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
