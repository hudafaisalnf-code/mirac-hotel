import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { fetchFromSanity } from "@/lib/sanity";

interface HomeData {
  heroTitle?: string;
  heroSubtitle?: string;
  welcomeTitle?: string;
  welcomeText?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButton?: string;
}

const defaults: Required<HomeData> = {
  heroTitle: "Mirak Hotel",
  heroSubtitle: "Where Luxury Meets Serenity",
  welcomeTitle: "A Legacy of Luxury",
  welcomeText:
    "Nestled in the heart of elegance, Mirak Hotel offers a sanctuary for the discerning traveler. Our commitment to exceptional service, timeless design, and culinary excellence sets us apart.",
  ctaTitle: "Begin Your Journey",
  ctaSubtitle:
    "Reserve your stay and discover why discerning travelers choose Mirak Hotel.",
  ctaButton: "Reserve Now",
};

const featuredRooms = [
  {
    title: "Deluxe Room",
    description:
      "Beautifully appointed with panoramic city views and bespoke furnishings crafted for ultimate comfort.",
    badge: "From $350",
  },
  {
    title: "Junior Suite",
    description:
      "Spacious elegance with a separate living area and premium marble bathroom with freestanding tub.",
    badge: "From $650",
  },
  {
    title: "Royal Suite",
    description:
      "The pinnacle of luxury — private terrace, two bedrooms, and dedicated round-the-clock butler service.",
    badge: "From $1,200",
  },
];

const amenityHighlights = [
  { icon: "🌊", label: "Infinity Pool" },
  { icon: "💆", label: "Luxury Spa" },
  { icon: "🍽️", label: "Fine Dining" },
  { icon: "🏋️", label: "Fitness Center" },
  { icon: "🎭", label: "Events Space" },
  { icon: "🌿", label: "Wellness Garden" },
];

export default async function HomePage() {
  const data = await fetchFromSanity<HomeData>(
    `*[_type == "homePage"][0]{ heroTitle, heroSubtitle, welcomeTitle, welcomeText, ctaTitle, ctaSubtitle, ctaButton }`
  );
  const d = { ...defaults, ...data };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light via-navy to-navy opacity-90" />
        <div className="relative z-10 text-center px-4 py-32">
          <p className="text-gold text-xs uppercase tracking-[0.5em] mb-6 font-sans">
            Welcome to
          </p>
          <h1 className="font-serif text-7xl md:text-9xl text-white mb-6 leading-none">
            {d.heroTitle}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl max-w-md mx-auto font-sans">
            {d.heroSubtitle}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/rooms"
              className="px-8 py-4 bg-gold text-navy text-xs uppercase tracking-widest hover:bg-gold-light transition-colors font-sans font-semibold"
            >
              Explore Rooms
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-navy transition-all font-sans"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 text-gold/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Welcome */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6">
              {d.welcomeTitle}
            </h2>
            <div className="w-16 h-px bg-gold mb-6" />
            <p className="text-white/50 text-base leading-relaxed">
              {d.welcomeText}
            </p>
            <Link
              href="/amenities"
              className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest mt-8 hover:text-gold-light transition-colors font-sans"
            >
              Discover More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {amenityHighlights.map((a) => (
              <div
                key={a.label}
                className="border border-gold/20 p-6 hover:border-gold/50 transition-colors"
              >
                <div className="text-3xl mb-3">{a.icon}</div>
                <p className="text-xs uppercase tracking-widest text-white/60 font-sans">
                  {a.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-pad bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Accommodations"
            title="Our Signature Rooms"
            subtitle="Each room is thoughtfully designed to provide an unparalleled experience of comfort and elegance."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <Card
                key={room.title}
                {...room}
                footer={
                  <Link
                    href="/rooms"
                    className="text-gold text-xs uppercase tracking-widest hover:text-gold-light transition-colors font-sans"
                  >
                    View Details →
                  </Link>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad text-center border-t border-gold/10">
        <div className="max-w-2xl mx-auto">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
            Reserve Your Stay
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-4">
            {d.ctaTitle}
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-white/50 text-lg mb-10">{d.ctaSubtitle}</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-gold text-navy text-xs uppercase tracking-widest hover:bg-gold-light transition-colors font-sans font-semibold"
          >
            {d.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
