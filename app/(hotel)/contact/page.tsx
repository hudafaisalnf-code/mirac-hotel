import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { fetchFromSanity } from "@/lib/sanity";

export const metadata: Metadata = { title: "Contact" };

interface ContactData {
  heroTitle?: string;
  heroSubtitle?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
}

const defaults: Required<ContactData> = {
  heroTitle: "Get in Touch",
  heroSubtitle:
    "Our team is available around the clock to assist with your reservation and inquiries.",
  address: "123 Luxury Avenue\nDowntown Dubai\nDubai, UAE",
  phone: "+971 4 123 4567",
  email: "hello@mirakhotel.com",
  hours: "24 hours · 7 days a week",
};

const infoItems = [
  { label: "Address", key: "address" as const },
  { label: "Phone", key: "phone" as const },
  { label: "Email", key: "email" as const },
  { label: "Hours", key: "hours" as const },
];

export default async function ContactPage() {
  const data = await fetchFromSanity<ContactData>(
    `*[_type == "contactPage"][0]{ heroTitle, heroSubtitle, address, phone, email, hours }`
  );
  const d = { ...defaults, ...data };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-4 text-center bg-navy-light border-b border-gold/10">
        <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
          Reservations
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-white mt-4 mb-4">
          {d.heroTitle}
        </h1>
        <div className="w-16 h-px bg-gold mx-auto mb-6" />
        <p className="text-white/50 text-lg max-w-xl mx-auto">{d.heroSubtitle}</p>
      </section>

      <section className="section-pad max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
              Find Us
            </span>
            <h2 className="font-serif text-3xl text-white mt-4 mb-10">
              Hotel Information
            </h2>
            <div className="space-y-8">
              {infoItems.map(({ label, key }) => (
                <div key={label}>
                  <h3 className="text-xs uppercase tracking-widest text-gold mb-2 font-sans">
                    {label}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed whitespace-pre-line">
                    {d[key]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
              Inquire
            </span>
            <h2 className="font-serif text-3xl text-white mt-4 mb-10">
              Make a Reservation
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
