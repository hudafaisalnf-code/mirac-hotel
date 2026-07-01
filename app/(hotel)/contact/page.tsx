import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";
import { fetchFromSanity } from "@/lib/sanity";

export const metadata: Metadata = { title: "Contact" };

interface ContactData {
  heroTitle?: string;
  heroSubtitle?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
}

export default async function ContactPage() {
  const data = await fetchFromSanity<ContactData>(
    `*[_type == "contactPage"][0]{ heroTitle, heroSubtitle, address, phone, email, hours }`
  );

  return <ContactView data={data} />;
}
