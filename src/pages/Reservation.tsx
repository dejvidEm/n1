import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";

const Reservation = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">
              Rezervácia
            </h1>
            <p className="text-xl text-muted-foreground">
              Rezervujte si termín online jednoducho a rýchlo
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Info card */}
            <Card className="border-accent/30">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-3xl font-display">Online rezervačný systém</CardTitle>
                <CardDescription className="text-base">
                  Všetky naše rezervácie prebiehajú cez náš bezpečný a jednoduchý online systém Bookio
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Vyberte si službu</p>
                      <p className="text-sm text-muted-foreground">
                        Prehľadný zoznam všetkých našich ošetrení
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Zvoľte termín</p>
                      <p className="text-sm text-muted-foreground">
                        Dostupné termíny v reálnom čase
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Potvrdenie rezervácie</p>
                      <p className="text-sm text-muted-foreground">
                        Okamžité potvrdenie e-mailom a SMS
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    size="lg"
                    asChild
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                  >
                    <a
                      href="https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Prejsť na rezerváciu
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional info */}
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground text-center">
                  Potrebujete pomoc s rezerváciou alebo máte otázky? Kontaktujte nás 
                  telefonicky na <a href="tel:+421000000000" className="text-accent hover:underline">+421 000 000 000</a> alebo 
                  emailom na <a href="mailto:info@n1pro.sk" className="text-accent hover:underline">info@n1pro.sk</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reservation;
