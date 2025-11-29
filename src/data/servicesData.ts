import { Category } from "@/types/services";

export const servicesData: Category[] = [
  {
    id: "laserove-odstranenie",
    name: "Laserové odstránenie chĺpkov",
    description: "Medicínske laserové odstránenie chĺpkov s najmodernejšími technológiami pre trvalé výsledky a maximálny komfort.",
    services: [
      {
        id: "laserove-odstranenie-tvare",
        name: "Laserové odstránenie chĺpkov - tvár",
        description: "Jemné a efektívne odstránenie nežiaducich chĺpkov v oblasti tváre s dôrazom na bezpečnosť a prirodzený výsledok.",
        benefits: [
          "Trvalé výsledky",
          "Bezbolestné ošetrenie",
          "Žiadne podráždenie pleti",
          "Rýchle zotavenie"
        ],
        targetGroup: "Pre ženy aj mužov s nežiaducim ochlpením v oblasti tváre",
        contraindications: ["Tehotenstvo", "Aktívne kožné infekcie", "Čerstvé opálenie"],
        priceText: "Viď cenník",
        bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
        isPopular: true
      }
    ]
  },
  {
    id: "infuzny-bar",
    name: "Infúzny bar",
    description: "Vitamínové a revitalizačné infúzie pre obnovenie energie, hydratáciu a podporu imunitného systému.",
    services: [
      {
        id: "vitaminova-infuzia",
        name: "Vitamínová infúzia",
        description: "Komplexná vitamínová terapia pre okamžité doplnenie živín a zvýšenie celkovej vitality.",
        benefits: [
          "Okamžitý príliv energie",
          "Podpora imunity",
          "Hydratácia",
          "Zlepšenie pleti"
        ],
        targetGroup: "Pre každého, kto hľadá rýchle doplnenie vitamínov a minerálov",
        priceText: "Viď cenník",
        bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
        isPopular: true
      }
    ]
  },
  {
    id: "head-spa",
    name: "Head Spa",
    description: "Luxusný rituál starostlivosti o vlasovú pokožku, vlasy a relaxáciu mysle v jednom.",
    services: [
      {
        id: "head-spa-ritual",
        name: "Head Spa rituál",
        description: "Hĺbkový wellness zážitok pre pokožku hlavy s masážou, aromaterapiou a regeneračnými procedúrami.",
        benefits: [
          "Hlboká relaxácia",
          "Zlepšenie kvality vlasov",
          "Stimulácia rastu vlasov",
          "Stresredukcia"
        ],
        targetGroup: "Pre všetkých hľadajúcich relaxáciu a starostlivosť o vlasy",
        priceText: "Viď cenník",
        bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
        isPopular: true
      }
    ]
  },
  {
    id: "estetická-medicina",
    name: "Estetická medicína",
    description: "Profesionálne ošetrenia pre prirodzené odmladenie a korekciu tváre.",
    services: [
      {
        id: "botox",
        name: "Botox aplikácia",
        description: "Profesionálna aplikácia botulotoxínu pre vyhladzenie vrások a prirodzený vzhľad.",
        benefits: [
          "Vyhladzenie vrások",
          "Prirodzený výsledok",
          "Dlhotrvajúci efekt",
          "Bezpečné ošetrenie"
        ],
        targetGroup: "Pre osoby s mimikami vraskami",
        contraindications: ["Tehotenstvo", "Kojenie", "Neurologické ochorenia"],
        priceText: "Viď cenník",
        bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
      },
      {
        id: "fillery",
        name: "Fillery - vypĺňanie vrások",
        description: "Kyselinové výplne pre obnovenie objemu a vyhladzenie hlbších vrások.",
        benefits: [
          "Obnovenie objemu",
          "Vyhladzenie vrások",
          "Okamžitý výsledok",
          "Minimálna rekonvalescencia"
        ],
        targetGroup: "Pre osoby s objemovými stratami v tvári",
        priceText: "Viď cenník",
        bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
      }
    ]
  },
  {
    id: "tvarovacie-osetrenia",
    name: "Tvarovacie ošetrenia",
    description: "Neinvazívne metódy pre tvarovanie tela a redukciu tuku.",
    services: [
      {
        id: "kryolipoliza",
        name: "Kryolipolýza",
        description: "Zmrazenie tukových buniek pre prirodzenú redukciu tukových vankúšikov.",
        benefits: [
          "Neinvazívne",
          "Bez anestézie",
          "Trvalé výsledky",
          "Bezpečné"
        ],
        targetGroup: "Pre osoby s lokalizovanými tukovými depozitmi",
        priceText: "Viď cenník",
        bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
      }
    ]
  }
];
