import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { servicesData } from "@/data/servicesData";

export const PopularServices = () => {
  // Get popular services
  const popularServices = servicesData
    .flatMap(category => category.services)
    .filter(service => service.isPopular)
    .slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Najpopulárnejšie služby
          </h2>
          <p className="text-muted-foreground text-lg">
            Naše najžiadanejšie ošetrenia pre vašu krásu a pohodu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularServices.map((service) => (
            <Card key={service.id} className="relative overflow-hidden hover:shadow-elegant transition-all duration-300">
              <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                Populárne
              </Badge>
              
              <CardHeader>
                <CardTitle className="text-2xl font-display">{service.name}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Benefity:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-accent">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
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
      </div>
    </section>
  );
};
