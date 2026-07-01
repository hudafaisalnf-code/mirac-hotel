"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/language";
import { navTranslations } from "@/lib/nav-translations";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  const { lang } = useLanguage();
  const t = navTranslations[lang];

  const quickLinks = [
    [t.nav.home, "/"],
    [t.nav.rooms, "/rooms"],
    [t.nav.amenities, "/amenities"],
    [t.nav.pricing, "/pricing"],
    [t.nav.contact, "/contact"],
  ] as const;

  return (
    <footer className="bg-navy border-t border-gold/20 py-16 px-4 md:px-8">
      <Reveal className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl text-gold tracking-widest uppercase mb-4">
            {t.brandName}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            {t.footer.about}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold mb-5">
            {t.footer.navigate}
          </h4>
          <ul className="space-y-3">
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/50 transition-all duration-200 hover:text-gold hover:ps-1"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold mb-5">
            {t.footer.contactTitle}
          </h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>{t.footer.address1}</li>
            <li>{t.footer.address2}</li>
            <li className="pt-2">{t.footer.phone}</li>
            <li>{t.footer.email}</li>
          </ul>
        </div>
      </Reveal>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-white/25">{t.footer.rights}</p>
        <p className="text-xs text-white/25">{t.footer.crafted}</p>
      </div>
    </footer>
  );
}
