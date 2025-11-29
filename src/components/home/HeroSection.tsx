import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight">
            Krása, ktorá sa dotýka duše
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Prepájame modernú estetickú medicínu so špičkovými technológiami a wellness rituálmi, ktoré obnovujú nielen vzhľad, ale aj rovnováhu tela a pokoj mysle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 shadow-elegant"
            >
              <a href="https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" target="_blank" rel="noopener noreferrer">
                Rezervovať termín
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="text-base px-8 py-6 border-accent hover:bg-accent/10"
            >
              <a href="/sluzby">
                Naše služby
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-softGold/20 rounded-full blur-3xl"></div>
    </section>
  );
};
