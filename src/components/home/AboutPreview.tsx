import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const AboutPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Krása s dušou. Starostlivosť srdcom.
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              V N1 Pro Aesthetic Clinic veríme, že skutočná krása vzniká tam, kde sa stretáva 
              odborná medicínska starostlivosť s hlbokým porozumením človeku.
            </p>
            
            <p>
              Prepájame modernú estetickú medicínu, špičkové technológie a wellness rituály, 
              ktoré obnovujú nielen vzhľad, ale aj rovnováhu tela a pokoj mysle.
            </p>
          </div>
          
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-accent hover:bg-accent/10 text-base px-8"
          >
            <Link to="/o-nas">
              Viac o nás
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
