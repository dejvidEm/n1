import { Layout } from "@/components/layout/Layout";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const whyChooseUs = [
    "Kvalifikovaný a skúsený personál",
    "Najmodernejšie technológie a zariadenia",
    "Individuálny prístup ku každému klientovi",
    "Bezpečnosť a profesionalita na prvom mieste",
    "Spojenie estetiky, medicíny a wellness",
    "Príjemné a diskrétne prostredie"
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">
              O nás
            </h1>
            <p className="text-xl text-muted-foreground">
              Miesto, kde sa estetika stretáva s harmóniou
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              V <strong className="text-foreground">N1 Pro Aesthetic Clinic</strong> veríme, že skutočná krása vzniká tam, 
              kde sa stretáva odborná medicínska starostlivosť s hlbokým porozumením človeku. Každý z nás nesie príbeh, 
              ktorý sa odráža v pokožke, držaní tela aj v spôsobe, akým sa cítime sami so sebou. Našou úlohou nie je 
              tento príbeh prepisovať - ale pomôcť vám žiť ho s väčšou ľahkosťou, sebaláskou a zdravím.
            </p>

            <p>
              Prepájame modernú estetickú medicínu, špičkové technológie a wellness rituály, ktoré obnovujú nielen vzhľad, 
              ale aj rovnováhu tela a pokoj mysle. Naše služby sú starostlivo navrhnuté tak, aby prinášali prirodzené 
              výsledky, rešpektovali individualitu každého klienta a podporovali zdravie zvnútra aj zvonku.
            </p>

            <p className="text-foreground font-medium italic text-xl text-center py-4">
              Všetko, čo robíme, je postavené na jemnosti, precíznosti a úprimnom záujme o vás.
            </p>

            <p>
              Každý dotyk, každý krok ošetrenia a každý detail v našom priestore je vytvorený s cieľom poskytnúť vám 
              pocit bezpečia, dôvery a výnimočnosti.
            </p>

            <p>
              Naša klinika je miestom, kde sa estetika stretáva s harmóniou. Miestom, kde sa technológia snúbi s pokojom, 
              a kde sa starostlivosť mení na skutočný zážitok.
            </p>

            <p>
              Odchádzate od nás nielen s viditeľným výsledkom — ale s pocitom, že ste sa vrátili k sebe. 
              Silnejšia, spokojnejšia a sebavedomejšia.
            </p>

            <p className="text-foreground font-display text-2xl text-center py-6">
              S láskou Vaša N1 Pro Aesthetic Clinic.
            </p>

            <p className="text-center text-xl text-accent italic">
              Krása s dušou. Starostlivosť srdcom. Výsledky, ktoré sprevádzajú váš život.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">
              Prečo si vybrať N1 Pro?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-6 rounded-lg border border-border">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Náš tím
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Za každým ošetrením stojí skúsený tím profesionálov, ktorí vám venujú plnú pozornosť a starostlivosť.
            </p>
            
            {/* Placeholder for team members - can be added later */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="font-display text-xl font-semibold mb-1">Meno</h3>
                  <p className="text-muted-foreground text-sm mb-2">Pozícia</p>
                  <p className="text-sm text-muted-foreground">
                    Krátky popis člena tímu, vzdelanie a špecializácia.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
