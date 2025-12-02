import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="N1 Pro Aesthetic Clinic - luxusný interiér"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Subtitle */}
          <p className="text-sm uppercase tracking-[0.3em] text-accent">
            N1 Pro Aesthetic Clinic
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight leading-[1.1]">
            Krása, ktorá sa<br />dotýka duše
          </h1>
          
          <div className="w-16 h-px bg-accent mx-auto"></div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Prepájame modernú estetickú medicínu so špičkovými technológiami a wellness rituálmi, ktoré obnovujú nielen vzhľad, ale aj rovnováhu tela a pokoj mysle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
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
              className="text-sm uppercase tracking-[0.15em] px-10 py-6 border-border hover:bg-secondary/50"
            >
              <a href="/sluzby">
                Naše služby
              </a>
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="pt-8">
            <a 
              href="tel:+421918500282" 
              className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4 mr-3" />
              Infolinka: 0918 500 282
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border"></div>
    </section>
  );
};
