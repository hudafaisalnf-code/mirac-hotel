import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import { fetchFromSanity, urlFor } from "@/lib/sanity";

export const metadata: Metadata = { title: "Amenities" };

interface Amenity {
  title: string;
  description: string;
  icon: string;
  image?: object;
}

interface AmenitiesData {
  heroTitle?: string;
  heroSubtitle?: string;
  amenities?: Amenity[];
}

const fallbackAmenities: Amenity[] = [
  {
    title: "Infinity Pool",
    description:
      "An infinity-edge pool overlooking the city skyline, heated year-round with a dedicated pool butler.",
    icon: "🌊",
  },
  {
    title: "Mirak Spa",
    description:
      "A full-service luxury spa offering signature treatments, hot stone therapy, and wellness rituals.",
    icon: "💆",
  },
  {
    title: "Fine Dining",
    description:
      "Award-winning restaurants showcasing international cuisine and expertly curated wine selections.",
    icon: "🍽️",
  },
  {
    title: "Fitness Center",
    description:
      "State-of-the-art gymnasium with personal trainers, yoga classes, and recovery suites available on request.",
    icon: "🏋️",
  },
  {
    title: "Private Events",
    description:
      "Elegant ballrooms and boardrooms for weddings, galas, and corporate events with bespoke planning.",
    icon: "🎭",
  },
  {
    title: "Wellness Garden",
    description:
      "A tranquil outdoor sanctuary designed for morning yoga, meditation, and contemplative walks.",
    icon: "🌿",
  },
  {
    title: "Concierge",
    description:
      "24-hour concierge service to arrange excursions, private dining experiences, and special requests.",
    icon: "🎩",
  },
  {
    title: "Business Lounge",
    description:
      "A premium business center with high-speed connectivity, meeting facilities, and private offices.",
    icon: "💼",
  },
];

export default async function AmenitiesPage() {
  const data = await fetchFromSanity<AmenitiesData>(
    `*[_type == "amenitiesPage"][0]{ heroTitle, heroSubtitle, amenities[]{ title, description, icon, image } }`
  );

  const heroTitle = data?.heroTitle ?? "World-Class Amenities";
  const heroSubtitle =
    data?.heroSubtitle ?? "Every detail thoughtfully curated for your complete indulgence.";
  const amenities = data?.amenities?.length ? data.amenities : fallbackAmenities;

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-4 text-center bg-navy-light border-b border-gold/10">
        <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
          Experiences
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-white mt-4 mb-4">
          {heroTitle}
        </h1>
        <div className="w-16 h-px bg-gold mx-auto mb-6" />
        <p className="text-white/50 text-lg max-w-xl mx-auto">{heroSubtitle}</p>
      </section>

      {/* Amenities grid */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((a) => (
            <div
              key={a.title}
              className="group border border-gold/20 p-8 hover:border-gold/60 hover:bg-navy-light transition-all duration-300"
            >
              {a.image ? (
                <div className="h-32 overflow-hidden mb-4">
                  <img
                    src={urlFor(a.image).width(300).height(200).url()}
                    alt={a.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="text-4xl mb-4">{a.icon}</div>
              )}
              <h3 className="font-serif text-xl text-white mb-3">{a.title}</h3>
              <div className="w-8 h-px bg-gold mb-3 group-hover:w-12 transition-all duration-300" />
              <p className="text-white/40 text-sm leading-relaxed">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats highlight */}
      <section className="section-pad bg-navy-light border-t border-b border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            badge="Signature Experience"
            title="The Mirak Spa"
            subtitle="Immerse yourself in our award-winning spa, where ancient healing rituals meet modern luxury. From hot stone massages to rejuvenating facials, each treatment is a journey of restoration."
          />
          <div className="grid grid-cols-3 gap-8 mt-12">
            {[
              ["12+", "Signature Treatments"],
              ["5", "Treatment Rooms"],
              ["∞", "Moments of Serenity"],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <p className="font-serif text-5xl text-gold mb-2">{num}</p>
                <p className="text-xs uppercase tracking-widest text-white/30 font-sans">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
