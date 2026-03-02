import { Phone, Mail, MapPin, User } from "lucide-react";

type Person = {
  name: string;
  title: string;
  address: string;
  phones: string[];
  email: string;
};

const personnel: Person[] = [
  {
    name: "Gerry Spanger",
    title: "President & CEO",
    address: "402 Merrywood Drive, Edison, NJ 08817",
    phones: [
      "Office: (732) 985-8226",
      "Cell: (908) 400-6888",
      "Fax: (732) 985-2134",
    ],
    email: "gerry@marketair.com",
  },
  {
    name: "Jim DeSantis",
    title: "National Sales Manager",
    address: "7375 Schefflera Street, Punta Gorda, FL 33955-1138",
    phones: ["Cell: (978) 631-5856"],
    email: "jim@marketair.com",
  },
  {
    name: "Lou Laroche",
    title: "VP of Sales and Marketing",
    address: "5833 Cottage Circle, Granger, IN 46530",
    phones: ["Cell: (574) 850-7924", "Fax: (866) 372-0992"],
    email: "lou@marketair.com",
  },
  {
    name: "Sue O'Neill",
    title: "Operations Manager",
    address: "402 Merrywood Drive, Edison, NJ 08817",
    phones: [
      "Office: (732) 985-8226",
      "Cell: (732) 319-8647",
      "Fax: (732) 985-2134",
    ],
    email: "sue@marketair.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
            Contact
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)] mb-2">
            Get in Touch
          </h2>
        </div>

        {/* General contact bar */}
        <div className="bg-[var(--color-surface)] rounded-2xl p-6 shadow-sm flex flex-wrap gap-6 items-center mb-10">
          <a
            href="tel:7329858226"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors duration-200"
          >
            <Phone className="w-4 h-4 text-[var(--color-primary)]" />
            732-985-8226
          </a>
          <a
            href="mailto:info@marketair.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors duration-200"
          >
            <Mail className="w-4 h-4 text-[var(--color-primary)]" />
            info@marketair.com
          </a>
        </div>

        {/* Personnel grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {personnel.map((p) => (
            <div
              key={p.name}
              className="bg-[var(--color-surface)] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4"
            >
              {/* Avatar */}
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                <User className="w-5 h-5 text-[var(--color-primary)]" />
              </div>

              {/* Name & title */}
              <div>
                <p className="font-bold text-[var(--color-text-main)]">
                  {p.name}
                </p>
                <p className="text-xs text-[var(--color-primary)] font-semibold mt-0.5">
                  {p.title}
                </p>
              </div>

              {/* Address */}
              <div className="flex gap-2 items-start">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-text-muted)] mt-0.5 shrink-0" />
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {p.address}
                </p>
              </div>

              {/* Phones */}
              <div className="flex flex-col gap-0.5">
                {p.phones.map((ph) => (
                  <p key={ph} className="text-xs text-[var(--color-text-muted)]">
                    {ph}
                  </p>
                ))}
              </div>

              {/* Email */}
              <a
                href={`mailto:${p.email}`}
                className="text-xs font-medium text-[var(--color-primary)] hover:underline"
              >
                {p.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
