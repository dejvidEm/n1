import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary via-ivory to-champagne relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Pripravení začať svoju cestu ku kráse?
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Rezervujte si svoj termín a objavte, ako môžeme pomôcť vám cítiť sa 
            sebavedomejšie, krajšie a harmonickejšie.
          </p>
          
          <Button 
            size="lg" 
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 shadow-elegant"
          >
            <a href="https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Rezervovať termín
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
