import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { servicesData } from "@/data/servicesData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(servicesData[0].id);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">
              Naše služby
            </h1>
            <p className="text-xl text-muted-foreground">
              Objavte komplexné riešenia pre vašu krásu a well-being
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
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
              <TabsContent key={category.id} value={category.id} className="space-y-12">
                {/* Category description */}
                <div className="max-w-3xl mx-auto text-center mb-12" id={category.id}>
                  <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                    {category.name}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.services.map((service) => (
                    <Card key={service.id} className="hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-2xl font-display flex-1">
                            {service.name}
                          </CardTitle>
                          {service.isPopular && (
                            <Badge className="bg-accent text-accent-foreground ml-2">
                              Populárne
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        {/* Benefits */}
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Benefity:</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start text-muted-foreground">
                                <span className="mr-2 text-accent mt-1">•</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Target group */}
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Pre koho je určená:</h4>
                          <p className="text-muted-foreground">{service.targetGroup}</p>
                        </div>

                        {/* Contraindications */}
                        {service.contraindications && service.contraindications.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2 text-foreground">Kontraindikácie:</h4>
                            <ul className="space-y-1">
                              {service.contraindications.map((contraindication, index) => (
                                <li key={index} className="text-sm text-muted-foreground">
                                  • {contraindication}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Price */}
                        {service.priceText && (
                          <div className="pt-2 border-t border-border">
                            <p className="text-sm text-muted-foreground">
                              <strong className="text-foreground">Cena:</strong> {service.priceText}
                            </p>
                          </div>
                        )}

                        {/* CTA */}
                        <Button
                          asChild
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        >
                          <a href={service.bookioUrl} target="_blank" rel="noopener noreferrer">
                            Rezervovať termín
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
