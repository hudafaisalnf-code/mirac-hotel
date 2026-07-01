"use client";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language";
import { navTranslations } from "@/lib/nav-translations";

export interface ContactData {
  heroTitle?: string;
  heroSubtitle?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
}

const copy = {
  ar: {
    heroBadge: "الحجوزات",
    heroTitle: "تواصل معنا",
    heroSubtitle: "فريقنا متاح على مدار الساعة لمساعدتكم في الحجز والاستفسارات.",
    findUs: "موقعنا",
    hotelInformation: "معلومات الفندق",
    address: "العنوان",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    hours: "ساعات العمل",
    hoursValue: "على مدار الساعة · 7 أيام في الأسبوع",
    inquire: "استفسار",
    makeReservation: "احجز إقامتك",
  },
  en: {
    heroBadge: "Reservations",
    heroTitle: "Get in Touch",
    heroSubtitle:
      "Our team is available around the clock to assist with your reservation and inquiries.",
    findUs: "Find Us",
    hotelInformation: "Hotel Information",
    address: "Address",
    phone: "Phone",
    email: "Email",
    hours: "Hours",
    hoursValue: "24 hours · 7 days a week",
    inquire: "Inquire",
    makeReservation: "Make a Reservation",
  },
};

export default function ContactView({ data }: { data: ContactData | null }) {
  const { lang } = useLanguage();
  const c = copy[lang];
  const footerCopy = navTranslations[lang].footer;

  const heroTitle = lang === "en" ? data?.heroTitle ?? c.heroTitle : c.heroTitle;
  const heroSubtitle =
    lang === "en" ? data?.heroSubtitle ?? c.heroSubtitle : c.heroSubtitle;

  const infoItems = [
    { label: c.address, value: `${footerCopy.address1}\n${footerCopy.address2}` },
    { label: c.phone, value: footerCopy.phone },
    { label: c.email, value: footerCopy.email },
    { label: c.hours, value: c.hoursValue },
  ];

  return (
    <>
      {/* Hero */}
      <Reveal as="div">
        <section className="pt-40 pb-20 px-4 text-center bg-navy-light border-b border-gold/10">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
            {c.heroBadge}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mt-4 mb-4">
            {heroTitle}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-white/50 text-lg max-w-xl mx-auto">{heroSubtitle}</p>
        </section>
      </Reveal>

      <section className="section-pad max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <Reveal>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
              {c.findUs}
            </span>
            <h2 className="font-serif text-3xl text-white mt-4 mb-10">
              {c.hotelInformation}
            </h2>
            <div className="space-y-8">
              {infoItems.map(({ label, value }) => (
                <div
                  key={label}
                  className="transition-transform duration-300 hover:scale-[1.02]"
                >
                  <h3 className="text-xs uppercase tracking-widest text-gold mb-2 font-sans">
                    {label}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed whitespace-pre-line">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
              {c.inquire}
            </span>
            <h2 className="font-serif text-3xl text-white mt-4 mb-10">
              {c.makeReservation}
            </h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
