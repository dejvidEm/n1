import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { servicesData } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, AlertTriangle, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  AestheticMedicineIcon,
  CosmetologyIcon,
  LaserIcon,
  PermanentMakeupIcon,
  BodyTreatmentIcon,
  HairCareIcon,
  PedicureIcon,
  WellnessIcon,
  CoursesIcon
} from "@/components/icons/CategoryIcons";

const categories = [
  {
    id: "esteticka-medicina",
    Icon: AestheticMedicineIcon,
    title: "Estetická medicína",
    subtitle: "Regeneratívna terapia"
  },
  {
    id: "kozmetologia",
    Icon: CosmetologyIcon,
    title: "Kozmetológia",
    subtitle: "Profesionálna starostlivosť"
  },
  {
    id: "laserove-odstranenie",
    Icon: LaserIcon,
    title: "Laserová epilácia",
    subtitle: "ELISION PRO"
  },
  {
    id: "permanentny-makeup",
    Icon: PermanentMakeupIcon,
    title: "Permanentný make-up",
    subtitle: "Mikropigmentácia"
  },
  {
    id: "telove-osetrenia",
    Icon: BodyTreatmentIcon,
    title: "Telové ošetrenia",
    subtitle: "Maderoterapia & Depilácia"
  },
  {
    id: "vlasy",
    Icon: HairCareIcon,
    title: "Vlasová starostlivosť",
    subtitle: "Head Spa & Trichológia"
  },
  {
    id: "pedikura",
    Icon: PedicureIcon,
    title: "Pedikúra",
    subtitle: "Starostlivosť o nohy"
  },
  {
    id: "wellness",
    Icon: WellnessIcon,
    title: "Wellness procedúry",
    subtitle: "Relaxácia & Masáže"
  },
  {
    id: "kurzy",
    Icon: CoursesIcon,
    title: "Kurzy",
    subtitle: "Medzinárodný certifikát"
  }
];

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  
  const initialCategory = categoryFromUrl && servicesData.find(c => c.id === categoryFromUrl)
    ? categoryFromUrl
    : servicesData[0].id;
    
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(
    servicesData.find(c => c.id === initialCategory)?.subcategories?.[0]?.id || null
  );
  
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  // Handle URL changes
  useEffect(() => {
    if (categoryFromUrl && servicesData.find(c => c.id === categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
      const category = servicesData.find(c => c.id === categoryFromUrl);
      setExpandedSubcategory(category?.subcategories?.[0]?.id || null);
    }
  }, [categoryFromUrl]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setExpandedSubcategory(servicesData.find(c => c.id === categoryId)?.subcategories?.[0]?.id || null);
    setSearchParams({ category: categoryId });
  };

  const currentCategory = servicesData.find(c => c.id === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent/60"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-accent/60"></div>
              <div className="w-8 h-px bg-accent/60"></div>
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
              Výber procedúr
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">
              Naše služby
            </h1>
            <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Komplexná starostlivosť o vašu krásu a well-being s najmodernejšími technológiami
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div 
            ref={gridRef}
            className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto"
          >
            {categories.map((category, index) => {
              const { Icon } = category;
              return (
                <button 
                  key={category.id} 
                  onClick={() => handleCategoryChange(category.id)}
                  className={cn(
                    "group relative p-8 md:p-10 text-center border-b border-r border-border/50 last:border-r-0 [&:nth-child(4n)]:border-r-0 [&:nth-child(n+5)]:md:border-b-0 [&:nth-child(n+7)]:border-b-0 transition-all duration-500",
                    selectedCategory === category.id 
                      ? "bg-accent/10" 
                      : "hover:bg-secondary/20"
                  )}
                  style={{
                    opacity: gridVisible ? 1 : 0,
                    transform: gridVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s ease-out ${index * 75}ms`
                  }}
                >
                  {/* Line-art icon */}
                  <div className={cn(
                    "inline-flex items-center justify-center w-16 h-16 mb-6 transition-transform duration-300",
                    selectedCategory === category.id ? "text-accent scale-110" : "text-accent group-hover:scale-110"
                  )}>
                    <Icon className="w-full h-full" />
                  </div>
                  
                  <h3 className={cn(
                    "text-sm md:text-base font-display font-medium tracking-wide uppercase mb-2 transition-colors",
                    selectedCategory === category.id ? "text-accent" : "group-hover:text-accent"
                  )}>
                    {category.title}
                  </h3>
                  
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {category.subtitle}
                  </p>
                  
                  {/* Active/Hover indicator */}
                  <div className={cn(
                    "absolute bottom-4 left-1/2 -translate-x-1/2 h-px bg-accent transition-all duration-300",
                    selectedCategory === category.id ? "w-12" : "w-0 group-hover:w-12"
                  )}></div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Infolinka
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-6">
            Máte otázky? Kontaktujte nás
          </h2>
          <a 
            href="tel:+421918500282" 
            className="text-xl font-display text-accent hover:text-accent/80 transition-colors"
          >
            0918 500 282
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
