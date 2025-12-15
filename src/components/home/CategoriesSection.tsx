import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
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
    Icon: AestheticMedicineIcon,
    title: "Estetická medicína",
    subtitle: "Regeneratívna terapia",
    href: "/sluzby/esteticka-medicina"
  },
  {
    Icon: CosmetologyIcon,
    title: "Kozmetológia",
    subtitle: "Profesionálna starostlivosť",
    href: "/sluzby/kozmetologia"
  },
  {
    Icon: LaserIcon,
    title: "Laserová epilácia",
    subtitle: "ELISION PRO",
    href: "/sluzby/laserove-odstranenie"
  },
  {
    Icon: PermanentMakeupIcon,
    title: "Permanentný make-up",
    subtitle: "Mikropigmentácia",
    href: "/sluzby/permanentny-makeup"
  },
  {
    Icon: BodyTreatmentIcon,
    title: "Telové ošetrenia",
    subtitle: "Maderoterapia & Depilácia",
    href: "/sluzby/telove-osetrenia"
  },
  {
    Icon: HairCareIcon,
    title: "Vlasová starostlivosť",
    subtitle: "Head Spa & Trichológia",
    href: "/sluzby/vlasy"
  },
  {
    Icon: PedicureIcon,
    title: "Pedikúra",
    subtitle: "Starostlivosť o nohy",
    href: "/sluzby/pedikura"
  },
  {
    Icon: WellnessIcon,
    title: "Wellness procedúry",
    subtitle: "Relaxácia & Masáže",
    href: "/sluzby/wellness"
  },
  {
    Icon: CoursesIcon,
    title: "Kurzy",
    subtitle: "Medzinárodný certifikát",
    href: "/sluzby/kurzy"
  }
];

export const CategoriesSection = () => {
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 md:py-32 bg-background relative">
      {/* Top decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-border to-border/50"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent/60"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-accent/60"></div>
            <div className="w-8 h-px bg-accent/60"></div>
          </div>
          
          <p className="text-sm uppercase tracking-[0.4em] text-accent mb-4">
            Výber procedúr
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Naše služby
          </h2>
          <div className="w-20 h-px bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Komplexná starostlivosť o vašu krásu a well-being
          </p>
        </AnimatedSection>

        {/* Categories Grid - iemspa.sk line-art style */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto"
        >
          {categories.map((category, index) => {
            const { Icon } = category;
            return (
              <Link 
                key={category.title} 
                to={category.href}
                className="group relative p-8 md:p-10 text-center border-b border-r border-border/50 last:border-r-0 [&:nth-child(4n)]:border-r-0 [&:nth-child(n+5)]:md:border-b-0 [&:nth-child(n+7)]:border-b-0 hover:bg-secondary/20 transition-all duration-500"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease-out ${index * 75}ms`
                }}
              >
                {/* Line-art icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-full h-full" />
                </div>
                
                <h3 className="text-sm md:text-base font-display font-medium tracking-wide uppercase mb-2 group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {category.subtitle}
                </p>
                
                {/* Hover indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-px bg-accent group-hover:w-12 transition-all duration-300"></div>
              </Link>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <AnimatedSection className="text-center mt-16" delay={400}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-border"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-accent/60"></div>
            <div className="w-8 h-px bg-border"></div>
          </div>
          <Link 
            to="/sluzby" 
            className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-accent hover:text-accent/80 transition-colors group"
          >
            Zobraziť všetky služby
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </AnimatedSection>
      </div>
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent via-border to-border/50"></div>
    </section>
  );
};
