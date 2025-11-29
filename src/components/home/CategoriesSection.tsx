import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Droplet, Users, Zap } from "lucide-react";

const categories = [
  {
    icon: Zap,
    title: "Laserové odstránenie chĺpkov",
    description: "Medicínske laserové technológie pre trvalé výsledky a maximálny komfort.",
    href: "/sluzby#laserove-odstranenie"
  },
  {
    icon: Droplet,
    title: "Infúzny bar",
    description: "Vitamínové a revitalizačné infúzie pre obnovenie energie a podporu imunity.",
    href: "/sluzby#infuzny-bar"
  },
  {
    icon: Sparkles,
    title: "Head Spa",
    description: "Luxusný rituál starostlivosti o vlasovú pokožku a relaxáciu mysle.",
    href: "/sluzby#head-spa"
  },
  {
    icon: Users,
    title: "Estetická medicína",
    description: "Profesionálne ošetrenia pre prirodzené odmladenie a korekciu tváre.",
    href: "/sluzby#esteticka-medicina"
  }
];

export const CategoriesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Naše služby
          </h2>
          <p className="text-muted-foreground text-lg">
            Objavte komplexné riešenia pre vašu krásu a well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="group hover:shadow-elegant transition-all duration-300 border-border bg-card">
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-full bg-secondary group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-display">{category.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0 h-auto text-accent hover:text-accent/80">
                    <Link to={category.href}>
                      Zobraziť služby →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
