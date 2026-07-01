"use client";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language";
import { urlFor } from "@/lib/sanity";

export interface RoomItem {
  name: string;
  description: string;
  size: string;
  capacity: number;
  pricePerNight: number;
  features: string[];
  image?: object;
}

export interface RoomsData {
  heroTitle?: string;
  heroSubtitle?: string;
  rooms?: RoomItem[];
}

const fallbackRoomsAr: RoomItem[] = [
  {
    name: "غرفة ديلوكس",
    description:
      "غرفة مؤثثة بعناية فائقة مع إطلالة بانورامية، أثاث مُختار بعناية، وحمام رخامي داخلي.",
    size: "45 م²",
    capacity: 2,
    pricePerNight: 350,
    features: ["سرير كينج", "إطلالة على المدينة", "حمام رخامي", "ميني بار", "شاشة تلفاز ذكية"],
  },
  {
    name: "جناح جونيور",
    description:
      "أناقة واسعة مع صالة معيشة مستقلة، حمام رخامي فاخر، وبانيو مستقل خاص.",
    size: "75 م²",
    capacity: 2,
    pricePerNight: 650,
    features: ["سرير كينج", "صالة معيشة", "بانيو مستقل", "خدمة الخادم", "تراس"],
  },
  {
    name: "الجناح التنفيذي",
    description:
      "ملاذ راقٍ يوفر مكتباً خاصاً، وركن طعام مستقلاً، وإطلالة بانورامية شاملة على المدينة.",
    size: "110 م²",
    capacity: 3,
    pricePerNight: 950,
    features: ["سرير كينج", "مكتب خاص", "ركن طعام", "إطلالة بانورامية", "ميني بار فاخر"],
  },
  {
    name: "الجناح الملكي",
    description:
      "قمة الفخامة في ميراك — غرفتا نوم، تراس خاص، وخدمة خادم على مدار الساعة.",
    size: "180 م²",
    capacity: 4,
    pricePerNight: 1200,
    features: ["غرفتا نوم", "تراس خاص", "غرفة طعام", "خادم على مدار الساعة", "مسبح خاص"],
  },
];

const copy = {
  ar: {
    accommodationsBadge: "أماكن الإقامة",
    heroTitle: "الغرف والأجنحة",
    heroSubtitle: "كل مساحة شاهد على فن الفخامة والراحة.",
    upTo: "لغاية",
    guests: "نزلاء",
    from: "ابتداءً من",
    perNight: "لليلة",
    reserve: "احجز الآن",
    roomPreview: "معاينة الغرفة",
    rooms: fallbackRoomsAr,
  },
  en: {
    accommodationsBadge: "Accommodations",
    heroTitle: "Rooms & Suites",
    heroSubtitle: "Each space is a testament to luxury craftsmanship and comfort.",
    upTo: "Up to",
    guests: "guests",
    from: "From",
    perNight: "/night",
    reserve: "Reserve",
    roomPreview: "Room Preview",
    rooms: [
      {
        name: "Deluxe Room",
        description:
          "A beautifully appointed room with panoramic city views, hand-selected furniture, and a marble en-suite bathroom.",
        size: "45 m²",
        capacity: 2,
        pricePerNight: 350,
        features: ["King Bed", "City View", "Marble Bathroom", "Mini Bar", "Smart TV"],
      },
      {
        name: "Junior Suite",
        description:
          "Spacious elegance with a separate living area, premium marble bathroom, and a private freestanding bathtub.",
        size: "75 m²",
        capacity: 2,
        pricePerNight: 650,
        features: ["King Bed", "Living Room", "Freestanding Tub", "Butler Service", "Terrace"],
      },
      {
        name: "Executive Suite",
        description:
          "Sophisticated retreat offering a private study, dining area, and sweeping panoramic views of the city.",
        size: "110 m²",
        capacity: 3,
        pricePerNight: 950,
        features: ["King Bed", "Study", "Dining Area", "Panoramic View", "Premium Minibar"],
      },
      {
        name: "Royal Suite",
        description:
          "The pinnacle of Mirak luxury — two bedrooms, a private terrace, and round-the-clock butler service.",
        size: "180 m²",
        capacity: 4,
        pricePerNight: 1200,
        features: ["2 Bedrooms", "Private Terrace", "Dining Room", "24h Butler", "Private Pool"],
      },
    ] as RoomItem[],
  },
};

export default function RoomsView({ data }: { data: RoomsData | null }) {
  const { lang, isRTL } = useLanguage();
  const c = copy[lang];

  const heroTitle = lang === "en" ? data?.heroTitle ?? c.heroTitle : c.heroTitle;
  const heroSubtitle = lang === "en" ? data?.heroSubtitle ?? c.heroSubtitle : c.heroSubtitle;
  const rooms = lang === "en" && data?.rooms?.length ? data.rooms : c.rooms;

  return (
    <>
      {/* Hero */}
      <Reveal as="div">
        <section className="pt-40 pb-20 px-4 text-center bg-navy-light border-b border-gold/10">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
            {c.accommodationsBadge}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mt-4 mb-4">
            {heroTitle}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-white/50 text-lg max-w-xl mx-auto">{heroSubtitle}</p>
        </section>
      </Reveal>

      {/* Rooms */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="space-y-20">
          {rooms.map((room, i) => (
            <Reveal key={room.name} delay={i * 120}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div
                  className={`group bg-navy-light border border-gold/20 h-80 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-gold/50 hover:-translate-y-1 ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  {room.image ? (
                    <img
                      src={urlFor(room.image).width(600).height(400).url()}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-center opacity-20">
                      <div className="text-6xl mb-2">🏨</div>
                      <p className="text-xs uppercase tracking-widest text-white/50">
                        {c.roomPreview}
                      </p>
                    </div>
                  )}
                </div>

                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
                    {room.size} · {c.upTo} {room.capacity} {c.guests}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-white mt-2 mb-4">
                    {room.name}
                  </h2>
                  <div className="w-12 h-px bg-gold mb-5" />
                  <p className="text-white/50 leading-relaxed mb-6 text-sm">
                    {room.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {room.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-white/40"
                      >
                        <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white/30 text-xs uppercase tracking-widest block mb-1">
                        {c.from}
                      </span>
                      <p className="font-serif text-3xl text-gold">
                        ${room.pricePerNight}
                        <span className="text-sm text-white/30 font-sans">
                          {c.perNight}
                        </span>
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-1.5 px-6 py-3 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-navy transition-all font-sans"
                    >
                      {c.reserve}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 ${
                          isRTL ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" : ""
                        }`}
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
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
