import type { Metadata } from "next";
import Link from "next/link";
import { fetchFromSanity, urlFor } from "@/lib/sanity";

export const metadata: Metadata = { title: "Rooms & Suites" };

interface RoomItem {
  name: string;
  description: string;
  size: string;
  capacity: number;
  pricePerNight: number;
  features: string[];
  image?: object;
}

interface RoomsData {
  heroTitle?: string;
  heroSubtitle?: string;
  rooms?: RoomItem[];
}

const fallbackRooms: RoomItem[] = [
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
];

export default async function RoomsPage() {
  const data = await fetchFromSanity<RoomsData>(
    `*[_type == "roomsPage"][0]{ heroTitle, heroSubtitle, rooms[]{ name, description, size, capacity, pricePerNight, features, image } }`
  );

  const heroTitle = data?.heroTitle ?? "Rooms & Suites";
  const heroSubtitle =
    data?.heroSubtitle ?? "Each space is a testament to luxury craftsmanship and comfort.";
  const rooms = data?.rooms?.length ? data.rooms : fallbackRooms;

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-4 text-center bg-navy-light border-b border-gold/10">
        <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
          Accommodations
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-white mt-4 mb-4">
          {heroTitle}
        </h1>
        <div className="w-16 h-px bg-gold mx-auto mb-6" />
        <p className="text-white/50 text-lg max-w-xl mx-auto">{heroSubtitle}</p>
      </section>

      {/* Rooms */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="space-y-20">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div
                className={`bg-navy-light border border-gold/20 h-80 flex items-center justify-center overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                {room.image ? (
                  <img
                    src={urlFor(room.image).width(600).height(400).url()}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center opacity-20">
                    <div className="text-6xl mb-2">🏨</div>
                    <p className="text-xs uppercase tracking-widest text-white/50">
                      Room Preview
                    </p>
                  </div>
                )}
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
                  {room.size} · Up to {room.capacity} guests
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
                      From
                    </span>
                    <p className="font-serif text-3xl text-gold">
                      ${room.pricePerNight}
                      <span className="text-sm text-white/30 font-sans">
                        /night
                      </span>
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="px-6 py-3 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-navy transition-all font-sans"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
