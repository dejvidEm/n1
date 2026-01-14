import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

import { fetchHomepageContent, type HomepageContent } from "../../homepage/content";

export const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  const [content, setContent] = useState<HomepageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ticking = false;

    const fetchContent = async () => {
      try {
        console.log("Starting to fetch homepage content...");
        const content = await fetchHomepageContent();
        console.log("Fetched homepage content:", content);
        
        if (content && content.headline) {
          setContent(content);
        } else {
          console.warn("No content or headline found, using fallback");
          setContent({
            headline: "Krása, ktorá sa dotýka duše",
            subheadline: undefined,
            phone: undefined,
          });
        }
      } catch (error) {
        console.error("Error fetching homepage content:", error);
        // Set a fallback content if fetch fails
        setContent({
          headline: "Krása, ktorá sa dotýka duše",
          subheadline: undefined,
          phone: undefined,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchContent();

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Adjust multiplier to change parallax strength
          setOffsetY(scrollY * 0.3);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with dark overlay like iemspa.sk */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      >
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
            {content?.headline || "Krása, ktorá sa dotýka duše"}
          </h1>
          
          <div className="w-20 h-px bg-[hsl(var(--soft-gold))]/80 mx-auto"></div>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          {content?.subheadline || "Prepájame modernú estetickú medicínu so špičkovými technológiami a wellness rituálmi, ktoré obnovujú nielen vzhľad, ale aj rovnováhu tela a pokoj mysle."}
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
              className="text-sm uppercase tracking-[0.15em] px-10 py-6 border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50"
            >
              <a href="/sluzby">
                Naše služby
              </a>
            </Button>
          </div>
          
          {/* Contact Info */}
          {content?.phone && (
            <div className="pt-8">
              <a 
                href={`tel:${content.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-white/70 hover:text-[hsl(var(--soft-gold))] transition-colors"
              >
                <Phone className="h-4 w-4 mr-3" />
                Infolinka: {content.phone}
              </a>
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10"></div>
    </section>
  );
};
