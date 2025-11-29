import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { PopularServices } from "@/components/home/PopularServices";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <AboutPreview />
      <PopularServices />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
