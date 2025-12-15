import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { servicesData } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, AlertTriangle, ArrowRight, ChevronDown, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
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

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "esteticka-medicina": AestheticMedicineIcon,
  "kozmetologia": CosmetologyIcon,
  "laserove-odstranenie": LaserIcon,
  "permanentny-makeup": PermanentMakeupIcon,
  "telove-osetrenia": BodyTreatmentIcon,
  "vlasy": HairCareIcon,
  "pedikura": PedicureIcon,
  "wellness": WellnessIcon,
  "kurzy": CoursesIcon
};

const ServiceCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = servicesData.find(c => c.id === categoryId);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(
    category?.subcategories?.[0]?.id || null
  );

  if (!category) {
    return (
      <Layout>
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-display font-medium mb-6">Kategória nenájdená</h1>
            <Link to="/sluzby" className="text-accent hover:text-accent/80">
              ← Späť na služby
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const Icon = categoryIcons[category.id] || AestheticMedicineIcon;
  const hasServices = category.subcategories && category.subcategories.length > 0;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Back link */}
            <Link 
              to="/sluzby" 
              className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Späť na služby
            </Link>
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-accent">
              <Icon className="w-full h-full" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">
              {category.name}
            </h1>
            <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {hasServices ? (
              // Show subcategories and services
              category.subcategories?.map((subcategory) => (
                <div key={subcategory.id} className="mb-8" id={subcategory.id}>
                  {/* Subcategory Header */}
                  <button
                    onClick={() => setExpandedSubcategory(
                      expandedSubcategory === subcategory.id ? null : subcategory.id
                    )}
                    className="w-full flex items-center justify-between p-6 bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="text-left">
                      <h3 className="text-xl font-display font-medium">{subcategory.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{subcategory.description}</p>
                    </div>
                    <ChevronDown className={cn(
                      "h-5 w-5 text-accent transition-transform",
                      expandedSubcategory === subcategory.id && "rotate-180"
                    )} />
                  </button>

                  {/* Services List */}
                  {expandedSubcategory === subcategory.id && (
                    <div className="border border-t-0 border-border">
                      {subcategory.services.length > 0 ? (
                        subcategory.services.map((service, index) => (
                          <div
                            key={service.id}
                            className={cn(
                              "p-6 hover:bg-secondary/20 transition-colors",
                              index !== subcategory.services.length - 1 && "border-b border-border"
                            )}
                          >
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="text-lg font-display font-medium">{service.name}</h4>
                                  {service.isPopular && (
                                    <Badge className="bg-accent text-accent-foreground text-xs">
                                      Populárne
                                    </Badge>
                                  )}
                                </div>
                                
                                {service.description && (
                                  <p className="text-sm text-muted-foreground mb-4">
                                    {service.description}
                                  </p>
                                )}

                                <div className="flex flex-wrap gap-4 text-sm">
                                  {service.duration && (
                                    <span className="flex items-center gap-1 text-muted-foreground">
                                      <Clock className="h-4 w-4" />
                                      {service.duration}
                                    </span>
                                  )}
                                  <span className="flex items-center gap-1 text-muted-foreground">
                                    <Users className="h-4 w-4" />
                                    {service.targetGroup}
                                  </span>
                                </div>

                                {service.contraindications && service.contraindications.length > 0 && (
                                  <div className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
                                    <AlertTriangle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                                    <span>Kontraindikácie: {service.contraindications.join(", ")}</span>
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center gap-4 lg:flex-col lg:items-end">
                                <span className="text-lg font-display font-medium text-accent">
                                  {service.price}
                                </span>
                                <Button
                                  size="sm"
                                  asChild
                                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs uppercase tracking-wider"
                                >
                                  <a href={service.bookioUrl} target="_blank" rel="noopener noreferrer">
                                    Rezervovať
                                    <ArrowRight className="ml-2 h-3 w-3" />
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center text-muted-foreground">
                          Služby budú čoskoro pridané
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              // Empty state
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-6 text-accent/50">
                  <Icon className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-display font-medium mb-4">
                  Služby budú čoskoro pridané
                </h3>
                <p className="text-muted-foreground mb-8">
                  Pripravujeme pre vás ponuku služieb v tejto kategórii.
                </p>
                <Button asChild variant="outline">
                  <a 
                    href="https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Kontaktujte nás pre viac informácií
                  </a>
                </Button>
              </div>
            )}
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

export default ServiceCategory;
