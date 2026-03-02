import { FileDown } from "lucide-react";

export default function Downloads() {
  return (
    <section id="downloads" className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
            Downloads
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)]">
            Product Resources
          </h2>
        </div>

        <div className="bg-[var(--color-bg)] rounded-2xl p-10 shadow-sm flex flex-col items-center text-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center">
            <FileDown className="w-7 h-7 text-[var(--color-primary)]" />
          </div>
          <p className="text-[var(--color-text-muted)]">
            Boilerplate PDFs available for download.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
          >
            <FileDown className="w-4 h-4" />
            Contact Us for Files
          </a>
        </div>
      </div>
    </section>
  );
}
