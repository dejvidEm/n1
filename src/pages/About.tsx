import { Layout } from "@/components/layout/Layout";
import { Award, Heart, Shield, Sparkles, Users } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { fetchAboutPage, type AboutPageData } from "@/content/aboutPage";
import { urlFor } from "@/lib/sanityImage";

const About = () => {
  const [data, setData] = useState<AboutPageData | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchAboutPage()
      .then((res) => {
        if (!cancelled) setData(res);
      })
      .catch((err) => console.error("Failed to load about page:", err));

    return () => {
      cancelled = true;
    };
  }, []);

  const values = data?.values?.length
    ? data.values
    : [
        {
          icon: "heart",
          title: "Starostlivosť srdcom",
          description:
            "Každého klienta vnímame ako jedinečnú osobnosť. Naším cieľom je nielen skrášliť, ale aj priniesť pocit pohody a sebavedomia.",
        },
        {
          icon: "shield",
          title: "Bezpečnosť a kvalita",
          description:
            "Používame len certifikované produkty a najmodernejšie technológie. Vaše zdravie a spokojnosť sú pre nás prvoradé.",
        },
        {
          icon: "sparkles",
          title: "Prirodzené výsledky",
          description:
            "Veríme v jemnú estetiku, ktorá zvýrazňuje vašu prirodzenú krásu bez preháňania. Menej je viac.",
        },
        {
          icon: "users",
          title: "Odborný tím",
          description:
            "Náš tím tvoria skúsení profesionáli s certifikáciami a neustálym vzdelávaním v najnovších trendoch estetickej medicíny.",
        },
      ];

  const iconMap = useMemo(
    () => ({
      heart: Heart,
      shield: Shield,
      sparkles: Sparkles,
      users: Users,
    }),
    []
  );

  const certifications =
    data?.certifications?.length
      ? data.certifications
      : [
          "Medicínske laserové systémy ELISION PRO",
          "Injekčné techniky a dermálne výplne",
          "Mezoterapia a biorevitalizácia",
          "Permanentný make-up (PMU)",
          "Profesionálna kozmetológia",
          "Maderoterapia a wellness procedúry",
        ];

  const phone = data?.ctaPhone ?? "0918 862 508";
  const phoneHref = `tel:${phone.replace(/\s+/g, "")}`;

  const bookioUrl = data?.ctaBookioUrl ?? "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk";

  const philosophyImageUrl = data?.philosophyImage ? urlFor(data.philosophyImage).width(1000).url() : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
              {data?.heroEyebrow ?? "Poznajte nás"}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">
              {data?.heroTitle ?? "O nás"}
            </h1>
            <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data?.heroSubtitle ?? "Miesto, kde sa estetika stretáva s harmóniou"}
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
                {philosophyImageUrl ? (
                  <img src={philosophyImageUrl} alt="Interiér" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-muted" />
                )}
              </div>

              {/* Content */}
              <div className="space-y-8">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">
                  {data?.philosophyEyebrow ?? "Naša filozofia"}
                </p>

                <h2 className="text-3xl md:text-4xl font-display font-medium leading-[1.2]">
                  {(data?.philosophyTitle ?? "Krása s dušou.\nStarostlivosť srdcom.").split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h2>

                <div className="w-16 h-px bg-accent"></div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  {(data?.philosophyText?.length
                    ? data.philosophyText
                    : [
                        "V N1 Pro Aesthetic Clinic veríme, že skutočná krása vzniká tam, kde sa stretáva odborná medicínska starostlivosť s hlbokým porozumením človeku.",
                        "Prepájame modernú estetickú medicínu, špičkové technológie a wellness rituály, ktoré obnovujú nielen vzhľad, ale aj rovnováhu tela a pokoj mysle.",
                        "Odchádzate od nás nielen s viditeľným výsledkom — ale s pocitom, že ste sa vrátili k sebe. Silnejšia, spokojnejšia a sebavedomejšia.",
                      ]
                  ).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}

                  <p className="text-foreground font-display text-xl italic border-l-2 border-accent pl-6">
                    {data?.philosophyQuote ??
                      '"Všetko, čo robíme, je postavené na jemnosti, precíznosti a úprimnom záujme o vás."'}
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
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
                {data?.valuesEyebrow ?? "Čo nás definuje"}
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                {data?.valuesTitle ?? "Naše hodnoty"}
              </h2>
              <div className="w-16 h-px bg-accent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {values.map((value) => {
                const Icon = iconMap[value.icon] ?? Heart;
                return (
                  <div key={value.title} className="bg-background p-8 md:p-10 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 mb-6 text-accent">
                      <Icon className="h-8 w-8 stroke-[1.5]" />
                    </div>
                    <h3 className="text-lg font-display font-medium mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
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
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
                {data?.teamEyebrow ?? "Profesionáli"}
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                {data?.teamTitle ?? "Náš tím"}
              </h2>
              <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
              <p className="text-muted-foreground">
                {data?.teamSubtitle ??
                  "Za každým ošetrením stojí skúsený tím profesionálov, ktorí vám venujú plnú pozornosť a starostlivosť."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {(data?.teamMembers ?? []).length ? (
                (data?.teamMembers ?? []).map((member, idx) => {
                  const img = member.image ? urlFor(member.image).width(800).url() : null;
                  return (
                    <div key={`${member.name}-${idx}`} className="group">
                      <div className="relative aspect-[3/4] overflow-hidden mb-6">
                        {img ? (
                          <img
                            src={img}
                            alt={member.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted" />
                        )}
                      </div>
                      <div className="text-center">
                        <h3 className="font-display text-lg font-medium mb-1">{member.name}</h3>
                        {member.position && (
                          <p className="text-accent text-sm uppercase tracking-[0.15em] mb-2">{member.position}</p>
                        )}
                        {member.specialization && <p className="text-xs text-muted-foreground">{member.specialization}</p>}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-1 md:col-span-3 text-center text-muted-foreground">
                  Doplníte tím v Sanity Studio.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
                  {data?.certEyebrow ?? "Vzdelávanie"}
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                  {data?.certTitle ?? "Certifikácie a odbornosť"}
                </h2>
                <div className="w-16 h-px bg-accent mb-6"></div>
                <p className="text-muted-foreground leading-relaxed">
                  {data?.certText ??
                    "Náš tím sa neustále vzdeláva v najnovších trendoch a technikách estetickej medicíny. Disponujeme certifikáciami od popredných svetových výrobcov a inštitúcií."}
                </p>
              </div>

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
              {data?.ctaEyebrow ?? "Začnite svoju cestu"}
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              {data?.ctaTitle ?? "Pripravení stretnúť sa s nami?"}
            </h2>
            <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground mb-8">
              {data?.ctaText ??
                "Rezervujte si konzultáciu a objavte, ako vám môžeme pomôcť cítiť sa krajšie a sebavedomejšie."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={bookioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground text-sm uppercase tracking-[0.15em] transition-colors"
              >
                Online rezervácia
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center px-8 py-4 border border-border hover:bg-secondary/50 text-sm uppercase tracking-[0.15em] transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;