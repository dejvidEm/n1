import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center space-y-8" animation="scale">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            Infolinka & Objednávky
          </p>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium">
            Pripravení začať svoju cestu ku kráse?
          </h2>
          
          <div className="w-16 h-px bg-accent mx-auto"></div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Rezervujte si svoj termín online alebo nás kontaktujte telefonicky.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm uppercase tracking-[0.15em] px-10 py-6"
            >
              <a href="https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" target="_blank" rel="noopener noreferrer">
                Online rezervácia
                <ArrowRight className="ml-3 h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="text-sm uppercase tracking-[0.15em] px-10 py-6 border-border hover:bg-background"
            >
              <a href="tel:+421918500282">
                <Phone className="mr-3 h-4 w-4" />
                0918 500 282
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
