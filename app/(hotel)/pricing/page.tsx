import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { fetchFromSanity } from "@/lib/sanity";

export const metadata: Metadata = { title: "Pricing" };

interface Plan {
  name: string;
  description: string;
  pricePerNight: number;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

interface PricingData {
  heroTitle?: string;
  heroSubtitle?: string;
  currency?: string;
  plans?: Plan[];
  note?: string;
}

const fallbackPlans: Plan[] = [
  {
    name: "Deluxe Room",
    description: "Ideal for the solo traveler or couple seeking modern elegance and city views.",
    pricePerNight: 350,
    features: [
      "King or Twin Beds",
      "City View",
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

export default async function PricingPage() {
  const data = await fetchFromSanity<PricingData>(
    `*[_type == "pricingPage"][0]{ heroTitle, heroSubtitle, currency, plans[]{ name, description, pricePerNight, features, highlighted, badge }, note }`
  );

  const heroTitle = data?.heroTitle ?? "Rates & Packages";
  const heroSubtitle =
    data?.heroSubtitle ??
    "Transparent pricing with no hidden fees. Every stay includes our signature welcome.";
  const currency = data?.currency ?? "$";
  const plans = data?.plans?.length ? data.plans : fallbackPlans;
  const note =
    data?.note ??
    "* Rates are per night, exclusive of applicable taxes. Minimum stay of 2 nights on weekends.";

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-4 text-center bg-navy-light border-b border-gold/10">
        <span className="text-gold text-xs uppercase tracking-[0.3em] font-sans">Rates</span>
        <h1 className="font-serif text-5xl md:text-7xl text-white mt-4 mb-4">
          {heroTitle}
        </h1>
        <div className="w-16 h-px bg-gold mx-auto mb-6" />
        <p className="text-white/50 text-lg max-w-xl mx-auto">{heroSubtitle}</p>
      </section>

      {/* Plans */}
      <section className="section-pad max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border flex flex-col ${plan.highlighted ? "border-gold bg-navy-light" : "border-gold/20"}`}
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
                    From
                  </span>
                  <span className="font-serif text-5xl text-gold">
                    {currency}
                    {plan.pricePerNight}
                  </span>
                  <span className="text-white/30 text-sm font-sans"> /night</span>
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
                  Reserve
                </Link>
              </div>
            </div>
          ))}
        </div>

        {note && (
          <p className="text-center text-white/20 text-xs mt-10 font-sans">{note}</p>
        )}
      </section>

      {/* Included section */}
      <section className="section-pad bg-navy-light border-t border-gold/10">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="Every Stay Includes"
            title="The Mirak Promise"
            subtitle="From the moment you arrive, every detail is attended to with warmth and precision."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              "Complimentary WiFi",
              "Daily Housekeeping",
              "Welcome Amenities",
              "24h Room Service",
            ].map((item) => (
              <div
                key={item}
                className="border border-gold/20 p-6 text-center hover:border-gold/50 transition-colors"
              >
                <p className="text-xs uppercase tracking-widest text-white/50 font-sans leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
