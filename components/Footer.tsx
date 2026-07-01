import Link from "next/link";

const quickLinks = [
  ["Home", "/"],
  ["Rooms", "/rooms"],
  ["Amenities", "/amenities"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
] as const;

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/20 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl text-gold tracking-widest uppercase mb-4">
            Mirak Hotel
          </h3>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            A sanctuary of luxury and serenity. Every stay is crafted to
            perfection for the discerning traveler.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold mb-5">
            Navigate
          </h4>
          <ul className="space-y-3">
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gold mb-5">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>123 Luxury Avenue</li>
            <li>Downtown Dubai, UAE</li>
            <li className="pt-2">+971 4 123 4567</li>
            <li>hello@mirakhotel.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-white/25">
          © 2026 Mirak Hotel. All rights reserved.
        </p>
        <p className="text-xs text-white/25">Crafted with excellence</p>
      </div>
    </footer>
  );
}
