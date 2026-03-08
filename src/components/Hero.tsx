import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="site-section section-shell pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
          <div className="glass-card-strong rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="glass-chip inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[var(--color-primary-2)] mb-6 self-start">
              <span className="w-1.5 h-1.5 rounded-full glow-dot bg-[var(--color-accent)]" />
              Tampa Bay Area &amp; Throughout Florida
            </div>

            <div className="relative w-full max-w-[520px] aspect-[3/1] mb-6">
              <Image
                src="/images/ThePaverDoctors-Logo2.png"
                alt="The Florida Pavers Doctors"
                fill
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 460px, 90vw"
                className="object-contain object-left"
                priority
              />
            </div>

            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--color-primary-3)] mb-4">
              Paver Repair, Cleaning &amp; Sealing
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-muted)] max-w-2xl mb-8">
              Concrete and brick paver restoration for residential and commercial
              properties throughout Tampa Bay. Over 20 years of experience — free
              estimates Monday through Saturday.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="tel:8135754300" className="btn-primary px-6 py-3 text-sm sm:text-base">
                <Phone className="w-4 h-4" />
                813-575-4300
              </a>
              <a href="#services" className="btn-glass px-6 py-3 text-sm sm:text-base">
                Our Services
                <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
              </a>
            </div>
          </div>

          <div className="glass-card-strong rounded-3xl p-2 sm:p-3">
            <div className="relative rounded-[1.2rem] overflow-hidden min-h-[320px] sm:min-h-[380px] h-full border border-[var(--color-border-soft)]">
              <Image
                src="/paverRandom.jpg"
                alt="Close-up of sealed brick pavers"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
