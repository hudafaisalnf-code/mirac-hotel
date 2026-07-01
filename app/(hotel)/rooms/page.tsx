import type { Metadata } from "next";
import { fetchFromSanity } from "@/lib/sanity";
import RoomsView, { type RoomsData } from "@/components/views/RoomsView";

export const metadata: Metadata = { title: "Rooms & Suites" };

export default async function RoomsPage() {
  const data = await fetchFromSanity<RoomsData>(
    `*[_type == "roomsPage"][0]{ heroTitle, heroSubtitle, rooms[]{ name, description, size, capacity, pricePerNight, features, image } }`
  );

  return <RoomsView data={data} />;
}
