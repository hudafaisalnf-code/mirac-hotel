import HomeView, { type HomeData } from "@/components/views/HomeView";
import { fetchFromSanity } from "@/lib/sanity";

export default async function HomePage() {
  const data = await fetchFromSanity<HomeData>(
    `*[_type == "homePage"][0]{ heroTitle, heroSubtitle, heroImage, welcomeTitle, welcomeText, ctaTitle, ctaSubtitle, ctaButton }`
  );

  return <HomeView data={data} />;
}
