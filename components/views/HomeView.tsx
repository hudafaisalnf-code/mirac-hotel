"use client";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language";
import { urlFor } from "@/lib/sanity";

export interface HomeData {
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: object;
  welcomeTitle?: string;
  welcomeText?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButton?: string;
}

const copy = {
  ar: {
    heroBadge: "في قلب بورتسودان · على ساحل البحر الأحمر",
    heroLine1: "مرحباً بكم في قلب بورتسودان",
    heroLine2: "حيث تبدأ الحكاية من البحر",
    heroLine3: "وتكتمل براحة الإقامة",
    heroText:
      "في فندقنا نؤمن أن الإقامة ليست مجرد غرفة، بل تجربة تجمع بين الهدوء والراحة والضيافة السودانية الأصيلة. إقامتكم معنا... راحة تليق بكم وذكريات تبقى معكم.",
    exploreRooms: "استكشف الغرف",
    bookNow: "احجز الآن",
    discoverMore: "اكتشف المزيد",
    storyBadge: "قصتنا",
    welcomeTitle: "إرث من الفخامة",
    welcomeText:
      "في قلب بورتسودان، على ساحل البحر الأحمر، يقدّم فندق ميراك ملاذاً للمسافر المميز. التزامنا بالخدمة الاستثنائية والتصميم الخالد والتميز في الضيافة يجعلنا خياراً لا يُنسى.",
    discoverMoreLink: "اكتشف المزيد",
    amenities: [
      { icon: "🌊", label: "مسبح لامتناهي" },
      { icon: "💆", label: "سبا فاخر" },
      { icon: "🍽️", label: "مأكولات راقية" },
      { icon: "🏋️", label: "نادي رياضي" },
      { icon: "🎭", label: "قاعة فعاليات" },
      { icon: "🌿", label: "حديقة استجمام" },
    ],
    accommodationsBadge: "أماكن الإقامة",
    signatureTitle: "غرفنا المميزة",
    signatureSubtitle:
      "كل غرفة صُممت بعناية فائقة لتقدّم تجربة لا مثيل لها من الراحة والأناقة.",
    rooms: [
      {
        title: "غرفة ديلوكس",
        description:
          "غرفة مؤثثة بعناية مع إطلالة بانورامية وتفاصيل مصممة خصيصاً لراحة استثنائية.",
        badge: "من 350$",
      },
      {
        title: "جناح جونيور",
        description:
          "أناقة واسعة مع صالة معيشة مستقلة وحمام رخامي فاخر مع بانيو مستقل.",
        badge: "من 650$",
      },
      {
        title: "الجناح الملكي",
        description:
          "قمة الفخامة في ميراك — تراس خاص، غرفتا نوم، وخدمة خادم على مدار الساعة.",
        badge: "من 1,200$",
      },
    ],
    viewDetails: "عرض التفاصيل",
    reserveBadge: "احجزوا إقامتكم",
    ctaTitle: "ابدأوا رحلتكم",
    ctaSubtitle:
      "احجزوا إقامتكم الآن واكتشفوا لماذا يختار المسافرون المميزون فندق ميراك.",
    ctaButton: "احجز الآن",
  },
  en: {
    heroBadge: "In the Heart of Port Sudan · On the Red Sea Coast",
    heroLine1: "Welcome to the Heart of Port Sudan",
    heroLine2: "Where the Story Begins by the Sea",
    heroLine3: "And Is Completed by Comfort",
    heroText:
      "At our hotel, we believe a stay is more than just a room — it's an experience that blends tranquility, comfort, and authentic Sudanese hospitality. Your stay with us... comfort that suits you, memories that stay with you.",
    exploreRooms: "Explore Rooms",
    bookNow: "Book Now",
    discoverMore: "Discover More",
    storyBadge: "Our Story",
    welcomeTitle: "A Legacy of Luxury",
    welcomeText:
      "In the heart of Port Sudan, on the shores of the Red Sea, Mirak Hotel offers a sanctuary for the discerning traveler. Our commitment to exceptional service, timeless design, and outstanding hospitality makes us unforgettable.",
    discoverMoreLink: "Discover More",
    amenities: [
      { icon: "🌊", label: "Infinity Pool" },
      { icon: "💆", label: "Luxury Spa" },
      { icon: "🍽️", label: "Fine Dining" },
      { icon: "🏋️", label: "Fitness Center" },
      { icon: "🎭", label: "Events Space" },
      { icon: "🌿", label: "Wellness Garden" },
    ],
    accommodationsBadge: "Accommodations",
    signatureTitle: "Our Signature Rooms",
    signatureSubtitle:
      "Each room is thoughtfully designed to provide an unparalleled experience of comfort and elegance.",
    rooms: [
      {
        title: "Deluxe Room",
        description:
          "Beautifully appointed with panoramic views and bespoke furnishings crafted for ultimate comfort.",
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
    ],
    viewDetails: "View Details",
    reserveBadge: "Reserve Your Stay",
    ctaTitle: "Begin Your Journey",
    ctaSubtitle:
      "Reserve your stay now and discover why discerning travelers choose Mirak Hotel.",
    ctaButton: "Reserve Now",
  },
};

export default function HomeView({ data }: { data: HomeData | null }) {
  const { lang, isRTL } = useLanguage();
  const c = copy[lang];

  const welcomeTitle = lang === "en" ? data?.welcomeTitle ?? c.welcomeTitle : c.welcomeTitle;
  const welcomeText = lang === "en" ? data?.welcomeText ?? c.welcomeText : c.welcomeText;
  const ctaTitle = lang === "en" ? data?.ctaTitle ?? c.ctaTitle : c.ctaTitle;
  const ctaSubtitle = lang === "en" ? data?.ctaSubtitle ?? c.ctaSubtitle : c.ctaSubtitle;
  const ctaButton = lang === "en" ? data?.ctaButton ?? c.ctaButton : c.ctaButton;
  const heroImageUrl = data?.heroImage
    ? urlFor(data.heroImage).width(1920).height(1080).url()
    : null;

  const textSideX = isRTL ? 80 : 20;
  const glowSideX = isRTL ? 18 : 82;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
        {heroImageUrl ? (
          <Image
            src={heroImageUrl}
            alt=""
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at ${glowSideX}% 62%, rgba(191,160,106,0.32), transparent 42%), radial-gradient(circle at ${glowSideX}% 88%, rgba(191,160,106,0.20), transparent 35%), radial-gradient(circle at ${textSideX}% 38%, rgba(0,0,0,0.55), transparent 55%), linear-gradient(to bottom, #060d1c 0%, #0D2043 45%, #060d1c 100%)`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-32">
          <div className="max-w-2xl me-auto text-start animate-fade-in-up">
            <span className="inline-flex items-center gap-2 border border-gold/30 bg-navy/40 backdrop-blur-sm px-4 py-2 text-gold text-xs uppercase tracking-widest font-sans">
              <span aria-hidden>〜</span>
              {c.heroBadge}
            </span>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-white mt-8 leading-[1.3]">
              {c.heroLine1}
              <br />
              <span className="text-gold">{c.heroLine2}</span>
              <br />
              {c.heroLine3}
            </h1>

            <p className="text-white/60 text-base md:text-lg mt-6 max-w-lg leading-relaxed font-sans">
              {c.heroText}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy text-xs uppercase tracking-widest font-semibold font-sans transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25"
              >
                {c.bookNow}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeWidth={1.5} d="M3 10h18M8 3v4M16 3v4" />
                </svg>
              </Link>
              <Link
                href="/rooms"
                className="inline-flex items-center px-8 py-4 border border-gold text-gold text-xs uppercase tracking-widest font-sans transition-all duration-300 hover:bg-gold hover:text-navy hover:-translate-y-0.5"
              >
                {c.exploreRooms}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/50">
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans">
            {c.discoverMore}
          </span>
          <svg
            className="w-5 h-5 animate-bounce"
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
          <Reveal>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
              {c.storyBadge}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-6">
              {welcomeTitle}
            </h2>
            <div className="w-16 h-px bg-gold mb-6" />
            <p className="text-white/50 text-base leading-relaxed">{welcomeText}</p>
            <Link
              href="/amenities"
              className="group inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest mt-8 transition-colors font-sans hover:text-gold-light"
            >
              {c.discoverMoreLink}
              <svg
                className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" : ""}`}
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
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {c.amenities.map((a, i) => (
              <Reveal
                key={a.label}
                delay={i * 80}
                className="border border-gold/20 p-6 transition-all duration-300 hover:border-gold/50 hover:-translate-y-1 hover:bg-navy-light"
              >
                <div className="text-3xl mb-3">{a.icon}</div>
                <p className="text-xs uppercase tracking-widest text-white/60 font-sans">
                  {a.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-pad bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <SectionHeader
              badge={c.accommodationsBadge}
              title={c.signatureTitle}
              subtitle={c.signatureSubtitle}
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {c.rooms.map((room, i) => (
              <Reveal key={room.title} delay={i * 120}>
                <Card
                  {...room}
                  footer={
                    <Link
                      href="/rooms"
                      className="group inline-flex items-center gap-1.5 text-gold text-xs uppercase tracking-widest transition-colors font-sans hover:text-gold-light"
                    >
                      {c.viewDetails}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" : ""}`}
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
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad text-center border-t border-gold/10">
        <Reveal className="max-w-2xl mx-auto">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
            {c.reserveBadge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4 mb-4">
            {ctaTitle}
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-white/50 text-lg mb-10">{ctaSubtitle}</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-gold text-navy text-xs uppercase tracking-widest font-semibold font-sans transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25"
          >
            {ctaButton}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
