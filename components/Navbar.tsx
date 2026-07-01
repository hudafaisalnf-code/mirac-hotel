"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { navTranslations } from "@/lib/nav-translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const t = navTranslations[lang];

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/rooms", label: t.nav.rooms },
    { href: "/amenities", label: t.nav.amenities },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/60 text-gold font-serif text-lg transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-105">
            M
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-xl text-gold tracking-widest">
              {t.brandName}
            </span>
            <span className="text-[10px] text-white/50 tracking-[0.3em]">
              {t.brandTagline}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-2 text-xs uppercase tracking-widest transition-colors duration-200 ${
                  active ? "text-gold" : "text-white/70 hover:text-gold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 start-0 h-px bg-gold transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2.5 border border-white/20 text-white/70 text-xs uppercase tracking-widest transition-all duration-200 hover:border-gold hover:text-gold hover:-translate-y-0.5"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12h18M12 3c2.5 2.7 4 6.2 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6.2-4-9s1.5-6.3 4-9z"
              />
            </svg>
            {t.switchTo}
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-2.5 bg-gold text-navy text-xs uppercase tracking-widest font-semibold transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20"
          >
            {t.bookNow}
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label={t.menuToggle}
        >
          <svg
            className="h-6 w-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20 px-6 pb-6 pt-2 flex flex-col gap-5 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-widest text-white/70 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleLang();
              setOpen(false);
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white/70 text-xs uppercase tracking-widest transition-all hover:border-gold hover:text-gold"
          >
            {t.switchTo}
          </button>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy text-xs uppercase tracking-widest font-semibold transition-all hover:bg-gold-light"
          >
            {t.bookNow}
          </Link>
        </div>
      )}
    </header>
  );
}
