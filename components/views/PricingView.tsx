"use client";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language";

export interface Plan {
  name: string;
  description: string;
  pricePerNight: number;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface PricingData {
  heroTitle?: string;
  heroSubtitle?: string;
  currency?: string;
  plans?: Plan[];
  note?: string;
}

const fallbackPlansAr: Plan[] = [
  {
    name: "غرفة ديلوكس",
    description: "مثالية للمسافر المنفرد أو الزوجين الباحثين عن أناقة عصرية وإطلالات على المدينة.",
    pricePerNight: 350,
    features: [
      "سرير كينج أو سريران مفردان",
      "إطلالة على المدينة",
      "إفطار يومي",
      "واي فاي فائق السرعة",
      "خدمة الغرف",
    ],
  },
  {
    name: "جناح جونيور",
    description: "خيارنا الأكثر طلباً — رحابة واسعة وأناقة وراحة لا تقبل المساومة.",
    pricePerNight: 650,
    features: [
      "سرير كينج",
      "صالة معيشة مستقلة",
      "إفطار وعشاء يومياً",
      "دخول كامل إلى السبا",
      "خدمة الخادم الخاص",
    ],
    highlighted: true,
    badge: "الأكثر طلباً",
  },
  {
    name: "الجناح الملكي",
    description: "التعبير الأسمى عن فخامة ميراك لأكثر ضيوفنا رفعةً في الذوق.",
    pricePerNight: 1200,
    features: [
      "غرفتا نوم",
      "تراس خاص",
      "جميع الوجبات مشمولة",
      "دخول خاص إلى المسبح",
      "خدمة كونسيرج شخصية على مدار الساعة",
    ],
  },
];

const fallbackPlansEn: Plan[] = [
  {
    name: "Deluxe Room",
    description: "Ideal for the solo traveler or couple seeking modern elegance and sea views over Port Sudan.",
    pricePerNight: 350,
    features: [
      "King or Twin Beds",
      "Red Sea View",
      "Daily Breakfast",
      "High-Speed WiFi",
      "Room Service",
    ],
  },
  {
    name: "Junior Suite",
    description: "Our most sought-after choice — generous space, style, and uncompromising comfort.",
    pricePerNight: 650,
    features: [
      "King Bed",
      "Separate Living Room",
      "Breakfast & Dinner Daily",
      "Full Spa Access",
      "Butler Service",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Royal Suite",
    description: "The ultimate expression of Mirak luxury for the most discerning of guests.",
    pricePerNight: 1200,
    features: [
      "Two Bedrooms",
      "Private Terrace",
      "All Meals Included",
      "Private Pool Access",
      "24h Personal Concierge",
    ],
  },
];

const copy = {
  ar: {
    heroBadge: "الأسعار",
    heroTitle: "الأسعار والباقات",
    heroSubtitle: "أسعار شفافة بلا رسوم خفية. كل إقامة تتضمن ترحيبنا المميز.",
    mostPopular: "الأكثر طلباً",
    from: "ابتداءً من",
    perNight: "لليلة",
    reserve: "احجز الآن",
    includedBadge: "كل إقامة تشمل",
    includedTitle: "وعد ميراك",
    includedSubtitle: "من لحظة وصولكم، كل تفصيل يُدار بحفاوة ودقة.",
    included: [
      "واي فاي مجاني",
      "تنظيف يومي للغرفة",
      "هدايا ترحيبية",
      "خدمة الغرف على مدار الساعة",
    ],
    note: "* الأسعار لليلة الواحدة، غير شاملة الضرائب المطبقة. الحد الأدنى للإقامة ليلتان في عطلات نهاية الأسبوع.",
  },
  en: {
    heroBadge: "Rates",
    heroTitle: "Rates & Packages",
    heroSubtitle: "Transparent pricing with no hidden fees. Every stay includes our signature welcome.",
    mostPopular: "Most Popular",
    from: "From",
    perNight: "/night",
    reserve: "Reserve",
    includedBadge: "Every Stay Includes",
    includedTitle: "The Mirak Promise",
    includedSubtitle: "From the moment you arrive, every detail is attended to with warmth and precision.",
    included: [
      "Complimentary WiFi",
      "Daily Housekeeping",
      "Welcome Amenities",
      "24h Room Service",
    ],
    note: "* Rates are per night, exclusive of applicable taxes. Minimum stay of 2 nights on weekends.",
  },
};

export default function PricingView({ data }: { data: PricingData | null }) {
  const { lang } = useLanguage();
  const c = copy[lang];

  const heroTitle = lang === "en" ? data?.heroTitle ?? c.heroTitle : c.heroTitle;
  const heroSubtitle = lang === "en" ? data?.heroSubtitle ?? c.heroSubtitle : c.heroSubtitle;
  const currency = data?.currency ?? "$";
  const note = lang === "en" ? data?.note ?? c.note : c.note;

  const fallbackPlans = lang === "ar" ? fallbackPlansAr : fallbackPlansEn;
  const plans = lang === "en" && data?.plans?.length ? data.plans : fallbackPlans;

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

      {/* Plans */}
      <section className="section-pad max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120}>
              <div
                className={`relative border flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30 ${plan.highlighted ? "border-gold bg-navy-light" : "border-gold/20"}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-navy text-xs uppercase tracking-widest px-4 py-1 font-sans font-semibold whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="p-8 flex-1">
                  <h3 className="font-serif text-2xl text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="w-8 h-px bg-gold mb-4" />
                  <p className="text-white/40 text-sm leading-relaxed mb-8">
                    {plan.description}
                  </p>
                  <div className="mb-8">
                    <span className="text-white/30 text-xs uppercase tracking-widest block mb-1">
                      {c.from}
                    </span>
                    <span className="font-serif text-5xl text-gold">
                      {currency}
                      {plan.pricePerNight}
                    </span>
                    <span className="text-white/30 text-sm font-sans"> {c.perNight}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-white/50"
                      >
                        <svg
                          className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0">
                  <Link
                    href="/contact"
                    className={`w-full flex items-center justify-center py-3.5 text-xs uppercase tracking-widest transition-all font-sans ${
                      plan.highlighted
                        ? "bg-gold text-navy hover:bg-gold-light"
                        : "border border-gold text-gold hover:bg-gold hover:text-navy"
                    }`}
                  >
                    {c.reserve}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {note && (
          <p className="text-center text-white/20 text-xs mt-10 font-sans">{note}</p>
        )}
      </section>

      {/* Included section */}
      <section className="section-pad bg-navy-light border-t border-gold/10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionHeader
              badge={c.includedBadge}
              title={c.includedTitle}
              subtitle={c.includedSubtitle}
            />
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {c.included.map((item, i) => (
              <Reveal key={item} delay={i * 80}>
                <div className="border border-gold/20 p-6 text-center transition-colors hover:border-gold/50">
                  <p className="text-xs uppercase tracking-widest text-white/50 font-sans leading-relaxed">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
