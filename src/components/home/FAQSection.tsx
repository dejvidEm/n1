import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ako prebieha prvá konzultácia?",
    answer: "Prvá konzultácia trvá približne 30 minút. Počas nej s vami prediskutujeme vaše predstavy, zanalyzujeme stav pleti a navrhneme optimálny plán ošetrení. Súčasťou môže byť aj vizualizácia výsledkov. Cena konzultácie je 20 €."
  },
  {
    question: "Je laserové odstránenie chĺpkov bolestivé?",
    answer: "Moderný laser ELISION PRO, ktorý používame, je vybavený chladiacim systémom, vďaka ktorému je ošetrenie takmer bezbolestné. Väčšina klientov popisuje pocit ako jemné štípanie. Citlivosť závisí od ošetrovanej oblasti a individuálnej tolerancie."
  },
  {
    question: "Koľko sedení potrebujem na trvalé odstránenie chĺpkov?",
    answer: "Pre optimálne výsledky odporúčame 5-6 sedení v intervaloch 30-60 dní, v závislosti od ošetrovanej oblasti. Počet sedení závisí od typu pokožky, farby a hrúbky chĺpkov. Po ukončení kúry je možné očakávať 80-90% trvalú redukciu."
  },
  {
    question: "Aký je rozdiel medzi mezoterapiou a biorevitalizáciou?",
    answer: "Obe metódy využívajú mikroinjekcie, ale líšia sa zložením. Biorevitalizácia používa čistú kyselinu hyalurónovú pre intenzívnu hydratáciu. Mezoterapia obsahuje koktail vitamínov, aminokyselín a antioxidantov pre komplexnú regeneráciu a riešenie špecifických problémov pleti."
  },
  {
    question: "Kedy uvidím výsledky po ošetrení?",
    answer: "Závisí to od typu procedúry. Pri niektorých ošetreniach (dermálne výplne, infúzie) sú výsledky viditeľné okamžite. Pri mezoterapii a laserových procedúrach sa plný efekt prejaví po 2-4 týždňoch, keď pleť zregeneruje a vytvorí nový kolagén."
  },
  {
    question: "Môžem absolvovať ošetrenie počas tehotenstva?",
    answer: "Väčšina estetických procedúr sa počas tehotenstva a dojčenia neodporúča. Medzi bezpečné alternatívy patria relaxačné masáže, niektoré wellness procedúry a základná kozmetická starostlivosť. Vždy nás informujte o tehotenstve pred rezerváciou."
  },
  {
    question: "Ako sa mám pripraviť na ošetrenie?",
    answer: "Pred väčšinou ošetrení odporúčame vyhnúť sa slneniu, soláriu a samoopaľovacím prípravkom minimálne 2 týždne. Pred laserovým ošetrením nepoužívajte vosk ani pinzetu. Pred mezoterapiou sa vyhnite alkoholu a aspirínu. Konkrétne inštrukcie vám poskytneme pri rezervácii."
  },
  {
    question: "Aké sú možnosti platby?",
    answer: "Akceptujeme hotovosť aj platobné karty. Pre rozsiahlejšie procedúry je možné dohodnúť individuálny splátkový kalendár. Darčekové poukazy sú k dispozícii v ľubovoľnej hodnote."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Potrebujete poradiť?
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Časté otázky
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Odpovede na najčastejšie otázky o našich službách a procedúrach
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border bg-secondary/20 px-6 data-[state=open]:bg-secondary/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-medium hover:no-underline hover:text-accent py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Nenašli ste odpoveď na vašu otázku?
          </p>
          <a 
            href="tel:+421918500282" 
            className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-accent hover:text-accent/80 transition-colors group"
          >
            Zavolajte nám: 0918 500 282
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
