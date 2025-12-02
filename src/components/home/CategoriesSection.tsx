import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Droplet, 
  Zap, 
  Scissors, 
  Heart, 
  Leaf,
  Eye,
  Hand
} from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    title: "Estetická medicína",
    subtitle: "Regeneratívna terapia",
    description: "Exozómy, mezoterapia, dermálne výplne a peelingy pre omladenie pleti.",
    href: "/sluzby#esteticka-medicina"
  },
  {
    icon: Droplet,
    title: "Infúzny bar",
    subtitle: "Vitamínová terapia",
    description: "Intravenózna terapia pre energiu, imunitu a regeneráciu organizmu.",
    href: "/sluzby#infuzny-bar"
  },
  {
    icon: Zap,
    title: "Laserová epilácia",
    subtitle: "ELISION PRO",
    description: "Medicínsky diodový laser pre trvalé odstránenie chĺpkov.",
    href: "/sluzby#laserove-odstranenie"
  },
  {
    icon: Eye,
    title: "Kozmetológia",
    subtitle: "Profesionálna starostlivosť",
    description: "Mihalnice, obočie, make-up a masáže tváre.",
    href: "/sluzby#kozmetologia"
  },
  {
    icon: Hand,
    title: "Permanentný make-up",
    subtitle: "Mikropigmentácia",
    description: "Dlhodobé zvýraznenie obočia, pier a očných liniek.",
    href: "/sluzby#permanentny-makeup"
  },
  {
    icon: Leaf,
    title: "Wellness & SPA",
    subtitle: "Head Spa & Pedikúra",
    description: "Relaxačné rituály, maderoterapia a starostlivosť o chodidlá.",
    href: "/sluzby#wellness"
  },
  {
    icon: Heart,
    title: "Telové ošetrenia",
    subtitle: "Body contouring",
    description: "Regenerácia, spevnenie a modelácia postavy.",
    href: "/sluzby#telove-osetrenia"
  },
  {
    icon: Scissors,
    title: "Vlasová starostlivosť",
    subtitle: "Trichológia",
    description: "Head Spa, mezoterapia vlasovej pokožky a stimulácia rastu.",
    href: "/sluzby#vlasy"
  }
];

export const CategoriesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Výber procedúr
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Naše služby
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Komplexná starostlivosť o vašu krásu a well-being
          </p>
        </div>

        {/* Categories Grid - iemspa.sk inspired */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border max-w-6xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link 
                key={category.title} 
                to={category.href}
                className="group bg-background p-8 md:p-10 text-center hover:bg-secondary/30 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-accent">
                  <Icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                
                <h3 className="text-base md:text-lg font-display font-medium tracking-wide mb-2 group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {category.subtitle}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed hidden md:block">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link 
            to="/sluzby" 
            className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-accent hover:text-accent/80 transition-colors group"
          >
            Zobraziť všetky služby
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
