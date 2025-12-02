import { Layout } from "@/components/layout/Layout";
import { Heart, Shield, Sparkles, Users, Award, CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-clinic-interior.jpg";
import teamMember1 from "@/assets/team-member-1.jpeg";
import teamMember2 from "@/assets/team-member-2.jpeg";
import teamMember3 from "@/assets/team-member-3.jpeg";
import teamMember4 from "@/assets/team-member-4.jpeg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Starostlivosť srdcom",
      description: "Každého klienta vnímame ako jedinečnú osobnosť. Naším cieľom je nielen skrášliť, ale aj priniesť pocit pohody a sebavedomia."
    },
    {
      icon: Shield,
      title: "Bezpečnosť a kvalita",
      description: "Používame len certifikované produkty a najmodernejšie technológie. Vaše zdravie a spokojnosť sú pre nás prvoradé."
    },
    {
      icon: Sparkles,
      title: "Prirodzené výsledky",
      description: "Veríme v jemnú estetiku, ktorá zvýrazňuje vašu prirodzenú krásu bez preháňania. Menej je viac."
    },
    {
      icon: Users,
      title: "Odborný tím",
      description: "Náš tím tvoria skúsení profesionáli s certifikáciami a neustálym vzdelávaním v najnovších trendoch estetickej medicíny."
    }
  ];

  const certifications = [
    "Medicínske laserové systémy ELISION PRO",
    "Injekčné techniky a dermálne výplne",
    "Mezoterapia a biorevitalizácia",
    "Permanentný make-up (PMU)",
    "Profesionálna kozmetológia",
    "Maderoterapia a wellness procedúry"
  ];

  const teamMembers = [
    {
      name: "Mgr. Eva Hromadová",
      position: "Zdravotná sestra",
      image: teamMember1,
      specialization: "Estetické procedúry • Laserové technológie"
    },
    {
      name: "Evelin Kaczová",
      position: "Kozmetička",
      image: teamMember2,
      specialization: "Starostlivosť o pleť • Mihalnice"
    },
    {
      name: "Bianka Poštová",
      position: "Manažér predaja",
      image: teamMember3,
      specialization: "Poradenstvo • Starostlivosť o klientov"
    },
    {
      name: "Miroslava Kajanová",
      position: "Recepčná asistentka",
      image: teamMember4,
      specialization: "Rezervácie • Administratíva"
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
              Poznajte nás
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">
              O nás
            </h1>
            <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Miesto, kde sa estetika stretáva s harmóniou
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={aboutImage} 
                  alt="N1 Pro Aesthetic Clinic interiér"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="space-y-8">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">
                  Naša filozofia
                </p>
                
                <h2 className="text-3xl md:text-4xl font-display font-medium leading-[1.2]">
                  Krása s dušou.<br />Starostlivosť srdcom.
                </h2>
                
                <div className="w-16 h-px bg-accent"></div>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    V <strong className="text-foreground">N1 Pro Aesthetic Clinic</strong> veríme, že skutočná krása vzniká tam, 
                    kde sa stretáva odborná medicínska starostlivosť s hlbokým porozumením človeku.
                  </p>

                  <p>
                    Prepájame modernú estetickú medicínu, špičkové technológie a wellness rituály, ktoré obnovujú nielen vzhľad, 
                    ale aj rovnováhu tela a pokoj mysle.
                  </p>

                  <p className="text-foreground font-display text-xl italic border-l-2 border-accent pl-6">
                    "Všetko, čo robíme, je postavené na jemnosti, precíznosti a úprimnom záujme o vás."
                  </p>

                  <p>
                    Odchádzate od nás nielen s viditeľným výsledkom — ale s pocitom, že ste sa vrátili k sebe. 
                    Silnejšia, spokojnejšia a sebavedomejšia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
                Čo nás definuje
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                Naše hodnoty
              </h2>
              <div className="w-16 h-px bg-accent mx-auto"></div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="bg-background p-8 md:p-10 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 mb-6 text-accent">
                      <Icon className="h-8 w-8 stroke-[1.5]" />
                    </div>
                    <h3 className="text-lg font-display font-medium mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
                Profesionáli
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                Náš tím
              </h2>
              <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
              <p className="text-muted-foreground">
                Za každým ošetrením stojí skúsený tím profesionálov, ktorí vám venujú plnú pozornosť a starostlivosť.
              </p>
            </div>
            
            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-display text-lg font-medium mb-1">{member.name}</h3>
                    <p className="text-accent text-sm uppercase tracking-[0.15em] mb-2">{member.position}</p>
                    <p className="text-xs text-muted-foreground">
                      {member.specialization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
                  Vzdelávanie
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                  Certifikácie a odbornosť
                </h2>
                <div className="w-16 h-px bg-accent mb-6"></div>
                <p className="text-muted-foreground leading-relaxed">
                  Náš tím sa neustále vzdeláva v najnovších trendoch a technikách estetickej medicíny. 
                  Disponujeme certifikáciami od popredných svetových výrobcov a inštitúcií.
                </p>
              </div>

              {/* Certifications List */}
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-background border border-border">
                    <Award className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
              Začnite svoju cestu
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Pripravení stretnúť sa s nami?
            </h2>
            <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground mb-8">
              Rezervujte si konzultáciu a objavte, ako vám môžeme pomôcť cítiť sa krajšie a sebavedomejšie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground text-sm uppercase tracking-[0.15em] transition-colors"
              >
                Online rezervácia
              </a>
              <a 
                href="tel:+421918500282"
                className="inline-flex items-center justify-center px-8 py-4 border border-border hover:bg-secondary/50 text-sm uppercase tracking-[0.15em] transition-colors"
              >
                0918 500 282
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
