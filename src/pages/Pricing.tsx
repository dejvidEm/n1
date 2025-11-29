import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { servicesData } from "@/data/servicesData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState(servicesData[0].id);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">
              Cenník
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparentné ceny pre všetky naše služby
            </p>
          </div>
        </div>
      </section>

      {/* Pricing tables */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="flex flex-wrap h-auto justify-center gap-2 bg-transparent mb-12">
              {servicesData.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-6 py-3"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {servicesData.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-display font-semibold mb-8 text-center">
                    {category.name}
                  </h2>

                  <Card>
                    <CardContent className="p-0">
                      <div className="divide-y divide-border">
                        {category.services.map((service) => (
                          <div
                            key={service.id}
                            className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-muted/30 transition-colors"
                          >
                            <div className="flex-1 mb-4 md:mb-0">
                              <h3 className="font-semibold text-lg mb-1">
                                {service.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {service.description}
                              </p>
                            </div>

                            <div className="flex items-center gap-4 md:flex-shrink-0">
                              <div className="text-right min-w-[120px]">
                                <p className="font-semibold text-foreground">
                                  {service.priceText || "Na konzultáciu"}
                                </p>
                              </div>

                              <Button
                                size="sm"
                                variant="outline"
                                asChild
                                className="border-accent hover:bg-accent/10"
                              >
                                <a
                                  href={service.bookioUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  Rezervovať
                                </a>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Note */}
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-secondary rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Poznámka:</strong> Presné ceny závisia od rozsahu ošetrenia 
              a sú stanovené individuálne počas konzultácie. Kontaktujte nás pre presný cenový odhad.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
