import Image from "next/image";

const beforeAfters = [
  { src: "/beforePaver1.jpg",  alt: "Paver repair before and after — job 1" },
  { src: "/beforePaver2.jpg",  alt: "Paver cleaning before and after — job 2" },
  { src: "/beforePaver3.jpeg", alt: "Paver sealing before and after — job 3" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="site-section section-shell section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 animate-rise">
          <p className="eyebrow mb-3">Our Work</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)]">
            Before &amp; After
          </h2>
          <p className="text-[var(--color-text-muted)] mt-4 text-sm sm:text-base leading-relaxed max-w-2xl">
            See the difference a professional restoration makes. Each photo shows
            the transformation from start to finish.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {beforeAfters.map(({ src, alt }) => (
            <div
              key={src}
              className="glass-card rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
