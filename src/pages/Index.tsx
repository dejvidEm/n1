import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <AboutPreview />
      <FAQSection />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
