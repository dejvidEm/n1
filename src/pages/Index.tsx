import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { NewsSaleSection } from "@/components/NewsSaleSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

// Sample reviews - replace with actual Google reviews or remove to use API
const sampleReviews = [
  {
    author_name: "Mária Kováčová",
    rating: 5,
    text: "Vynikajúce služby! Profesionálny prístup a krásne výsledky. Určite odporúčam všetkým, ktorí hľadajú kvalitnú estetickú starostlivosť.",
    relative_time_description: "pred týždňom",
    time: Date.now() - 7 * 24 * 60 * 60 * 1000,
  },
  {
    author_name: "Jana Nováková",
    rating: 5,
    text: "Najlepšia kozmetička v meste! Perfektné ošetrenie pleti a príjemná atmosféra. Cítim sa skvelo po každej návšteve.",
    relative_time_description: "pred 2 týždňami",
    time: Date.now() - 14 * 24 * 60 * 60 * 1000,
  },
  {
    author_name: "Peter Horváth",
    rating: 5,
    text: "Laserová epilácia funguje perfektne. Rýchle a bezbolestné ošetrenie. Personál je veľmi milý a profesionálny.",
    relative_time_description: "pred mesiacom",
    time: Date.now() - 30 * 24 * 60 * 60 * 1000,
  },
  {
    author_name: "Lucia Šimková",
    rating: 5,
    text: "Permanentný make-up obočia vyzerá úžasne! Prirodzený vzhľad a profesionálna práca. Veľmi spokojná.",
    relative_time_description: "pred 3 týždňami",
    time: Date.now() - 21 * 24 * 60 * 60 * 1000,
  },
  {
    author_name: "Eva Tóthová",
    rating: 5,
    text: "Wellness pedikúra bola skvelá. Relaxačná atmosféra a perfektná starostlivosť o nohy. Určite sa vrátim.",
    relative_time_description: "pred 2 týždňami",
    time: Date.now() - 14 * 24 * 60 * 60 * 1000,
  },
  {
    author_name: "Tomáš Baláž",
    rating: 5,
    text: "Biorevitalizácia pleti priniesla viditeľné výsledky. Pleť je hydratovanejšia a sviežejšia. Odporúčam!",
    relative_time_description: "pred mesiacom",
    time: Date.now() - 30 * 24 * 60 * 60 * 1000,
  },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <NewsSaleSection />
      <AboutPreview />
      <GoogleReviews reviews={sampleReviews} />
      <FAQSection />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
