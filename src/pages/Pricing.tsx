import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { servicesData } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState(servicesData[0].id);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(
    servicesData[0].subcategories?.[0]?.id || null
  );

  const currentCategory = servicesData.find(c => c.id === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
              Transparentné ceny
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">
              Cenník
            </h1>
            <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Prehľad cien pre všetky naše služby
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-6 border-b border-border sticky top-16 bg-background z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {servicesData.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setExpandedSubcategory(category.subcategories?.[0]?.id || null);
                }}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-[0.1em] transition-all duration-300 border",
                  selectedCategory === category.id
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-transparent text-muted-foreground border-border hover:border-accent hover:text-accent"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          {currentCategory && (
            <div className="max-w-4xl mx-auto">
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-medium mb-2">
                  {currentCategory.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {currentCategory.description}
                </p>
              </div>

              {/* Subcategories */}
              {currentCategory.subcategories?.map((subcategory) => (
                <div key={subcategory.id} className="mb-6">
                  {/* Subcategory Header */}
                  <button
                    onClick={() => setExpandedSubcategory(
                      expandedSubcategory === subcategory.id ? null : subcategory.id
                    )}
                    className="w-full flex items-center justify-between p-4 bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <h3 className="text-lg font-display font-medium">{subcategory.name}</h3>
                    <ChevronDown className={cn(
                      "h-5 w-5 text-accent transition-transform",
                      expandedSubcategory === subcategory.id && "rotate-180"
                    )} />
                  </button>

                  {/* Services List */}
                  {expandedSubcategory === subcategory.id && (
                    <div className="border border-t-0 border-border">
                      {subcategory.services.map((service, index) => (
                        <div
                          key={service.id}
                          className={cn(
                            "flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-secondary/20 transition-colors gap-3",
                            index !== subcategory.services.length - 1 && "border-b border-border"
                          )}
                        >
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{service.name}</h4>
                            {service.duration && (
                              <span className="text-xs text-muted-foreground">{service.duration}</span>
                            )}
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-base font-display text-accent min-w-[100px] text-right">
                              {service.price}
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              asChild
                              className="border-accent hover:bg-accent/10 text-xs"
                            >
                              <a
                                href={service.bookioUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Rezervovať
                              </a>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Note */}
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-secondary/30 border border-border">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Poznámka:</strong> Presné ceny závisia od rozsahu ošetrenia 
              a sú stanovené individuálne počas konzultácie. Kontaktujte nás na{" "}
              <a href="tel:+421918500282" className="text-accent hover:underline">0918 500 282</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
