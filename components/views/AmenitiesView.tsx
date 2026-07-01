"use client";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/language";
import { urlFor } from "@/lib/sanity";

export interface Amenity {
  title: string;
  description: string;
  icon: string;
  image?: object;
}

export interface AmenitiesData {
  heroTitle?: string;
  heroSubtitle?: string;
  amenities?: Amenity[];
}

const copy = {
  ar: {
    experiencesBadge: "التجارب",
    heroTitle: "مرافق استثنائية",
    heroSubtitle: "كل تفصيلة صُممت بعناية فائقة من أجل راحتكم الكاملة.",
    signatureBadge: "تجربة مميزة",
    spaTitle: "سبا ميراك",
    spaSubtitle:
      "انغمسوا في سبا حائز على جوائز، حيث تلتقي طقوس الشفاء العريقة بالفخامة العصرية. من التدليك بالحجارة الساخنة إلى جلسات تنشيط البشرة، كل علاج هو رحلة نحو الاستجمام التام.",
    stats: [
      ["+12", "علاج مميز"],
      ["5", "غرف علاج"],
      ["∞", "لحظات من الصفاء"],
    ] as [string, string][],
    amenities: [
      {
        title: "مسبح لامتناهي",
        description:
          "مسبح بحافة لامتناهية يطل على ساحل البحر الأحمر، مُدفّأ على مدار العام مع خادم مسبح مخصص لراحتكم.",
        icon: "🌊",
      },
      {
        title: "سبا ميراك",
        description:
          "سبا فاخر متكامل الخدمات يقدّم علاجات مميزة، وجلسات تدليك بالحجارة الساخنة، وطقوساً للعافية والاستجمام.",
        icon: "💆",
      },
      {
        title: "مأكولات راقية",
        description:
          "مطاعم حائزة على جوائز تقدّم أشهى المأكولات العالمية إلى جانب تشكيلة مختارة بعناية من أرقى النبيذ.",
        icon: "🍽️",
      },
      {
        title: "نادي رياضي",
        description:
          "صالة رياضية بأحدث التجهيزات مع مدربين شخصيين، وحصص يوغا، وجناح استشفاء متاح عند الطلب.",
        icon: "🏋️",
      },
      {
        title: "فعاليات خاصة",
        description:
          "قاعات احتفالات وغرف اجتماعات أنيقة لحفلات الزفاف والمناسبات الفاخرة والفعاليات المؤسسية بتنظيم مخصص.",
        icon: "🎭",
      },
      {
        title: "حديقة استجمام",
        description:
          "ملاذ خارجي هادئ صُمم لممارسة اليوغا الصباحية والتأمل والتنزّه الهادئ في أحضان الطبيعة.",
        icon: "🌿",
      },
      {
        title: "خدمة الكونسيرج",
        description:
          "خدمة كونسيرج متاحة على مدار الساعة لتنظيم الرحلات وتجارب تناول الطعام الخاصة وتلبية الطلبات المميزة.",
        icon: "🎩",
      },
      {
        title: "صالة الأعمال",
        description:
          "مركز أعمال متميز بإنترنت فائق السرعة، ومرافق للاجتماعات، ومكاتب خاصة لضيوفنا من رجال الأعمال.",
        icon: "💼",
      },
    ] as Amenity[],
  },
  en: {
    experiencesBadge: "Experiences",
    heroTitle: "World-Class Amenities",
    heroSubtitle: "Every detail thoughtfully curated for your complete indulgence.",
    signatureBadge: "Signature Experience",
    spaTitle: "The Mirak Spa",
    spaSubtitle:
      "Immerse yourself in our award-winning spa, where ancient healing rituals meet modern luxury. From hot stone massages to rejuvenating facials, each treatment is a journey of restoration.",
    stats: [
      ["12+", "Signature Treatments"],
      ["5", "Treatment Rooms"],
      ["∞", "Moments of Serenity"],
    ] as [string, string][],
    amenities: [
      {
        title: "Infinity Pool",
        description:
          "An infinity-edge pool overlooking the Red Sea coastline, heated year-round with a dedicated pool butler.",
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
    ] as Amenity[],
  },
};

export default function AmenitiesView({ data }: { data: AmenitiesData | null }) {
  const { lang } = useLanguage();
  const c = copy[lang];

  const heroTitle = lang === "en" ? data?.heroTitle ?? c.heroTitle : c.heroTitle;
  const heroSubtitle = lang === "en" ? data?.heroSubtitle ?? c.heroSubtitle : c.heroSubtitle;
  const amenities =
    lang === "en" && data?.amenities?.length ? data.amenities : c.amenities;

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-4 text-center bg-navy-light border-b border-gold/10">
        <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">
          {c.experiencesBadge}
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
          {amenities.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="group border border-gold/20 p-8 hover:border-gold/60 hover:bg-navy-light hover:-translate-y-1 transition-all duration-300">
                {a.image ? (
                  <div className="h-32 overflow-hidden mb-4">
                    <img
                      src={urlFor(a.image).width(300).height(200).url()}
                      alt={a.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {a.icon}
                  </div>
                )}
                <h3 className="font-serif text-xl text-white mb-3">{a.title}</h3>
                <div className="w-8 h-px bg-gold mb-3 group-hover:w-12 transition-all duration-300" />
                <p className="text-white/40 text-sm leading-relaxed">
                  {a.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats highlight */}
      <section className="section-pad bg-navy-light border-t border-b border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <SectionHeader
              badge={c.signatureBadge}
              title={c.spaTitle}
              subtitle={c.spaSubtitle}
            />
          </Reveal>
          <div className="grid grid-cols-3 gap-8 mt-12">
            {c.stats.map(([num, label], i) => (
              <Reveal key={label} delay={i * 100} className="text-center">
                <p className="font-serif text-5xl text-gold mb-2">{num}</p>
                <p className="text-xs uppercase tracking-widest text-white/30 font-sans">
                  {label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
