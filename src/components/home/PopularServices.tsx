import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { servicesData } from "@/data/servicesData";
import { Service } from "@/types/services";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const PopularServices = () => {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });
  
  // Get popular services from nested subcategories
  const popularServices: Service[] = servicesData
    .flatMap(category => category.subcategories || [])
    .flatMap(subcategory => subcategory.services)
    .filter(service => service?.isPopular)
    .slice(0, 3);

  if (popularServices.length === 0) return null;

  return (
    <section className="py-24 bg-background relative">
      {/* Top subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent/60"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-accent/60"></div>
            <div className="w-8 h-px bg-accent/60"></div>
          </div>
          
          <p className="text-sm uppercase tracking-[0.4em] text-accent mb-4">
            Obľúbené
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-4">
            Najpopulárnejšie služby
          </h2>
          <div className="w-20 h-px bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Naše najžiadanejšie ošetrenia pre vašu krásu a pohodu
          </p>
        </AnimatedSection>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {popularServices.map((service, index) => (
            <Card 
              key={service.id} 
              className="relative overflow-hidden hover:shadow-elegant transition-all duration-300 border-border"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s ease-out ${index * 150}ms`
              }}
            >
              <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs">
                Populárne
              </Badge>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-display font-medium pr-20">{service.name}</CardTitle>
                {service.description && (
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                )}
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-accent">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-border">
                  <p className="text-lg font-display text-accent mb-3">{service.price}</p>
                </div>
                
                <Button 
                  asChild 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-sm uppercase tracking-wider"
                >
                  <a href={service.bookioUrl} target="_blank" rel="noopener noreferrer">
                    Rezervovať termín
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
};
