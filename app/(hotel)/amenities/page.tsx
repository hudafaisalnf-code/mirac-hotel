import type { Metadata } from "next";
import AmenitiesView, { type AmenitiesData } from "@/components/views/AmenitiesView";
import { fetchFromSanity } from "@/lib/sanity";

export const metadata: Metadata = { title: "Amenities" };

export default async function AmenitiesPage() {
  const data = await fetchFromSanity<AmenitiesData>(
    `*[_type == "amenitiesPage"][0]{ heroTitle, heroSubtitle, amenities[]{ title, description, icon, image } }`
  );

  return <AmenitiesView data={data} />;
}
