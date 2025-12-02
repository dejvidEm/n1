import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with dark overlay like iemspa.sk */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="N1 Pro Aesthetic Clinic - luxusný interiér"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[hsl(var(--soft-gold))]/60"></div>
            <div className="w-2 h-2 rotate-45 border border-[hsl(var(--soft-gold))]/60"></div>
            <div className="w-12 h-px bg-[hsl(var(--soft-gold))]/60"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-sm uppercase tracking-[0.4em] text-[hsl(var(--soft-gold))]">
            N1 Pro Aesthetic Clinic
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight leading-[1.1] text-white">
            Krása, ktorá sa<br />dotýka duše
          </h1>
          
          <div className="w-20 h-px bg-[hsl(var(--soft-gold))]/80 mx-auto"></div>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Prepájame modernú estetickú medicínu so špičkovými technológiami a wellness rituálmi, ktoré obnovujú nielen vzhľad, ale aj rovnováhu tela a pokoj mysle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              asChild
              className="bg-[hsl(var(--soft-gold))] hover:bg-[hsl(var(--soft-gold))]/90 text-[hsl(var(--deep-charcoal))] text-sm uppercase tracking-[0.15em] px-10 py-6"
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
              className="text-sm uppercase tracking-[0.15em] px-10 py-6 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
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
              className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-white/70 hover:text-[hsl(var(--soft-gold))] transition-colors"
            >
              <Phone className="h-4 w-4 mr-3" />
              Infolinka: 0918 500 282
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10"></div>
    </section>
  );
};
