import { Layout } from "@/components/layout/Layout";
import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-clinic-interior.jpg";
import teamMember1 from "@/assets/team-member-1.jpeg";
import teamMember2 from "@/assets/team-member-2.jpeg";
import teamMember3 from "@/assets/team-member-3.jpeg";
import teamMember4 from "@/assets/team-member-4.jpeg";

const About = () => {
  const whyChooseUs = [
    "Kvalifikovaný a skúsený personál",
    "Najmodernejšie technológie a zariadenia",
    "Individuálny prístup ku každému klientovi",
    "Bezpečnosť a profesionalita na prvom mieste",
    "Spojenie estetiky, medicíny a wellness",
    "Príjemné a diskrétne prostredie"
  ];

  const teamMembers = [
    {
      name: "Mgr. Anna Nováková",
      position: "Vedúca estetička",
      image: teamMember1,
      description: "Špecializácia na neinvazívne estetické procedúry a laserové technológie."
    },
    {
      name: "Bc. Martina Kováčová",
      position: "Estetická špecialistka",
      image: teamMember2,
      description: "Odborníčka na ošetrenie pleti, mezoterapiu a laserovú epiláciu."
    },
    {
      name: "Lucia Svobodová",
      position: "Wellness terapeutka",
      image: teamMember3,
      description: "Certifikovaná terapeutka pre Head Spa a relaxačné wellness rituály."
    },
    {
      name: "MUDr. Petra Horváthová",
      position: "Estetická lekárka",
      image: teamMember4,
      description: "Špecializácia na estetickú medicínu a dermatologické ošetrenia."
    }
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
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-elegant order-2 lg:order-1">
                <img 
                  src={aboutImage} 
                  alt="N1 Pro Aesthetic Clinic interiér"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-8 text-lg leading-relaxed text-muted-foreground order-1 lg:order-2">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-elegant transition-all duration-300">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-accent text-sm mb-3 font-medium">{member.position}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
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
