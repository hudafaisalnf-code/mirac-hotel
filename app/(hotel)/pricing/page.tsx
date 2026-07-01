import type { Metadata } from "next";
import PricingView, { type PricingData } from "@/components/views/PricingView";
import { fetchFromSanity } from "@/lib/sanity";

export const metadata: Metadata = { title: "Pricing" };

export default async function PricingPage() {
  const data = await fetchFromSanity<PricingData>(
    `*[_type == "pricingPage"][0]{ heroTitle, heroSubtitle, currency, plans[]{ name, description, pricePerNight, features, highlighted, badge }, note }`
  );

  return <PricingView data={data} />;
}
