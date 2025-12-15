import { Category } from "@/types/services";

export const servicesData: Category[] = [
  {
    id: "esteticka-medicina",
    name: "Estetická medicína",
    description: "Moderná estetická medicína využívajúca najnovšie technológie pre omladenie, regeneráciu a obnovu pokožky.",
    subcategories: [
      {
        id: "exozomy",
        name: "Exozómy, rastové faktory, bunkové ošetrenia",
        description: "Najmodernejšia úroveň regenerácie pleti aktivujúca prirodzené procesy obnovy.",
        services: [
          {
            id: "exozomy-bunkova-regeneracia",
            name: "Exozómy – bunková regenerácia pleti",
            description: "Exozómy majú silné protizápalové a regeneračné vlastnosti, signalizujú bunkám aby vytvárali vlákna kolagénu.",
            fullDescription: "Exozómy sú nanočastice prirodzene produkované bunkami, nabité bioaktívnymi látkami – lipidmi, proteínmi a nukleovými kyselinami. Majú schopnosť prenášať regeneračné signály medzi bunkami, čím spúšťajú obnovu poškodených tkanív. V estetickej medicíne sa získavajú najčastejšie z kmeňových buniek, ktoré sú známe svojou vysokou regeneračnou kapacitou.",
            duration: "1h",
            price: "od 200 €",
            benefits: [
              "Intenzívna regenerácia buniek",
              "Zlepšenie textúry a elasticity pleti",
              "Zmiernenie vrások a známok starnutia",
              "Zjednotenie tónu pleti",
              "Podpora rastu vlasov a prevenciu ich rednutia"
            ],
            targetGroup: "Všetky typy pleti",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          }
        ]
      },
      {
        id: "konzultacie",
        name: "Konzultácie a kontroly",
        description: "Odborné konzultácie a následné kontroly pre optimálne výsledky.",
        services: [
          {
            id: "esteticka-konzultacia",
            name: "Estetická konzultácia s vizualizáciou",
            description: "Odborná konzultácia s analyzou pleti a vizualizáciou výsledku zákroku pre vašu lepšiu predstavu.",
            duration: "30 min",
            price: "20 €",
            benefits: ["Analýza pleti", "Vizualizácia výsledku", "Odborné odporúčania"],
            targetGroup: "Všetci klienti",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "kontrola",
            name: "Kontrola",
            description: "Kontrolné vyšetrenie po ošetrení.",
            duration: "30 min",
            price: "10 €",
            benefits: ["Sledovanie výsledkov", "Optimalizácia liečby"],
            targetGroup: "Klienti po ošetrení",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "mezoterapie",
        name: "Mezoterapie a estetické zákroky",
        description: "Medicínska revitalizačná metóda pomocou mikroinjekcií vitamínov, aminokyselín a antioxidantov.",
        services: [
          {
            id: "biorevitalizacia",
            name: "Biorevitalizácia",
            description: "Intenzívna hydratácia a regenerácia pleti 25+",
            fullDescription: "Biorevitalizácia využíva kombináciu čistej kyseliny hyalurónovej a aminokyselín, ktoré okamžite obnovujú hydratáciu, podporujú regeneráciu pokožky a redukujú jemné vrásky. Zlepšujú pružnosť dermy, dopĺňajú stratenú vitalitu a obnovujú mladistvú štruktúru kože.",
            duration: "1h",
            price: "175 €",
            benefits: ["Okamžitá hydratácia", "Redukcia vrások", "Zlepšenie pružnosti", "Omladenie pleti"],
            targetGroup: "Pleť 25+",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "dermaheal",
            name: "Dermaheal – peptidová mezoterapia",
            description: "Odporúčané pri pigmentáciách, akné a unavenej pleti 18+",
            fullDescription: "Dermaheal obsahuje pokročilý komplex biomimetických peptidov a rastových faktorov, ktoré cielene zlepšujú stav pokožky. Redukujú pigmentácie, zjemňujú póry, regulujú mazotok a podporujú regeneráciu tkanív.",
            duration: "45 min",
            price: "100 €",
            benefits: ["Redukcia pigmentácií", "Zjemnenie pórov", "Regulácia mazotoku", "Regenerácia tkanív"],
            targetGroup: "Pleť 18+",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "elixir-krasy",
            name: "Elixír krásy – mezoterapia na mieru",
            description: "Personalizovaná kúra podľa potrieb pleti 25+",
            fullDescription: "Elixír krásy predstavuje individuálne vytvorený regeneračný koktail aktívnych látok. Môže obsahovať HA, vitamíny, peptidy, aminokyseliny či antioxidačné látky podľa aktuálneho stavu pokožky.",
            duration: "50 min",
            price: "200 €",
            benefits: ["Personalizovaná starostlivosť", "Hydratácia", "Rozjasnenie", "Anti-aging"],
            targetGroup: "Pleť 25+",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "jalupro",
            name: "Jalupro – bio-revitalizácia",
            description: "Intenzívna aminokyselinová výživa pre mdlú pleť 30+",
            fullDescription: "Jalupro obsahuje vysokú koncentráciu aminokyselín, ktoré stimulujú fibroblasty, podporujú tvorbu kolagénu a obnovujú štruktúru pokožky.",
            duration: "45 min",
            price: "120 €",
            benefits: ["Stimulácia fibroblastov", "Tvorba kolagénu", "Zlepšenie pružnosti"],
            targetGroup: "Pleť 30+",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "mezobotox",
            name: "Mezobotox",
            description: "Jemné vyhladenie mimických vrások 30+",
            fullDescription: "Mezobotox kombinuje účinok botulotoxínu a mezoterapie, čo umožňuje zjemnenie mimických vrások bez straty prirodzenej mimiky. Zmenšuje póry, zlepšuje kvalitu pokožky.",
            duration: "1h",
            price: "200 €",
            benefits: ["Vyhladenie vrások", "Zmenšenie pórov", "Efekt 6 mesiacov"],
            targetGroup: "Pleť 30+",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "mezonitovy-lifting",
            name: "Mezoniťový lifting",
            description: "Nechirurgické spevnenie kontúr a stimulácia kolagénu 30+",
            fullDescription: "Mezoniťový lifting využíva jemné vstrebateľné nite, ktoré spevňujú pokožku a obnovujú kontúry tváre.",
            duration: "1h",
            price: "od 100 €",
            benefits: ["Spevnenie kontúr", "Stimulácia kolagénu", "Prirodzený lifting"],
            targetGroup: "Pleť 30+",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "profhilo",
            name: "Profhilo – hydratačný lifting",
            description: "Biostimulačná HA pre obnovu elasticity 30+",
            fullDescription: "Profhilo používa najčistejšiu a najkoncentrovanejšiu kyselinu hyalurónovú, ktorá obnovuje elasticitu, stimuluje elastín a kolagén.",
            duration: "30 min",
            price: "250 €",
            benefits: ["Obnova elasticity", "Stimulácia kolagénu", "Bez pridania objemu"],
            targetGroup: "Pleť 30+",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "radiesse",
            name: "Radiesse – kolagénový biostimulátor",
            description: "Spevnenie kontúr a stimulácia kolagénu 35+",
            fullDescription: "Radiesse okamžite spevňuje kontúry tváre a stimuluje dlhodobú produkciu kolagénu. Efekt až na 18 mesiacov.",
            duration: "1h",
            price: "od 290 €",
            benefits: ["Okamžité spevnenie", "Stimulácia kolagénu", "Efekt 18 mesiacov"],
            targetGroup: "Pleť 35+",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "mikroinvazivne-zakroky",
        name: "Mikroinvazívne estetické zákroky",
        description: "Pokročilé estetické procedúry s minimálnou rekonvalescenciou.",
        services: [
          {
            id: "dermalna-vypln",
            name: "Dermálna výplň",
            description: "Obnova objemu, korekcia kontúr a redukcia vrások s okamžitým efektom",
            fullDescription: "Dermálne výplne predstavujú modernú, medicínsky overenú metódu na doplnenie objemu tváre, vyhladenie vrások a modeláciu kontúr. Kyselina hyalurónová je telu vlastná látka, ktorá dokáže viazať vodu, obnoviť hydratáciu a navrátiť tvári mladistvú architektúru.",
            duration: "30-60 min",
            price: "od 250 €",
            benefits: ["Okamžitý efekt", "Obnova objemu", "Korekcia kontúr"],
            targetGroup: "Klienti so stratou objemu",
            contraindications: ["Tehotenstvo a dojčenie", "Aktívne kožné infekcie", "Autoimunitné ochorenia"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "neinvazivna-blefaroplastika",
            name: "Neinvazívna blefaroplastika",
            description: "Plazmové vypnutie očného viečka bez chirurgického zákroku",
            fullDescription: "Neinvazívna blefaroplastika predstavuje modernú alternatívu ku chirurgickej úprave viečok. Pomocou presne kontrolovaného plazmového výboja dochádza k šetrnému napnutiu pokožky v oblasti horného či dolného viečka.",
            duration: "40 min",
            price: "120 €",
            benefits: ["Liftingový efekt", "Novotvorba kolagénu", "Bez chirurgie"],
            targetGroup: "Klienti s poklesnutými viečkami",
            contraindications: ["Aktívny zápal kože", "Herpes", "Tehotenstvo"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "odstranenie-jaziev",
            name: "Odstránenie jaziev",
            description: "Komplexný regeneračný protokol pre jazvy po akné, operáciách a úrazoch",
            fullDescription: "Liečba jaziev si vyžaduje individuálny medicínsky prístup. Využívame kombináciu moderných metód: Plasmapen, Dermapen, PRP plazma, exozómy alebo chemický peeling.",
            duration: "1h",
            price: "od 100 €",
            benefits: ["Remodelácia jazvy", "Zlepšenie farby", "Zlepšenie povrchu"],
            targetGroup: "Klienti s jazvami",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "odstranenie-vyrastkov",
            name: "Odstránenie kožných výrastkov",
            description: "Presná plazmová eliminácia fibrómov a drobných kožných lézií",
            fullDescription: "Kožné výrastky sú časté neinvazívne kožné zmeny. Plazmové ošetrenie umožňuje ich rýchle a bezpečné odstránenie bez rezu a bez jazvy.",
            duration: "45 min",
            price: "od 45 €",
            benefits: ["Rýchle odstránenie", "Bez jazvy", "Okamžitý výsledok"],
            targetGroup: "Klienti s kožnými výrastkami",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "peelingy",
        name: "Peelingy a resurfacing",
        description: "Odborná exfoliácia a omladenie pokožky pomocou klinicky overených kyselín.",
        services: [
          {
            id: "biorepeel",
            name: "BioRePeelCl3 – biologický revitalizačný peeling",
            description: "Komplexná regenerácia bez lúpaní, vhodná aj pre citlivú a aknóznu pleť",
            fullDescription: "BioRePeelCl3 je inovatívny, dvojfázový biostimulačný TCA peeling určený na obnovu a revitalizáciu pokožky bez nutnosti odlupovania.",
            duration: "40 min",
            price: "90 €",
            benefits: ["Bez lúpania", "Vhodné celoročne", "Regenerácia"],
            targetGroup: "Všetky typy pleti",
            contraindications: ["Aktívny herpes", "Otvorené rany"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "prx-t33",
            name: "PRX-T33 – biorevitalizácia bez ihiel",
            description: "Biostimulačný TCA gél bez exfoliácie – intenzívne omladenie",
            fullDescription: "PRX-T33 je patentovaný biorevitalizačný protokol, ktorý kombinuje TCA, peroxid vodíka a kyselinu kojovú. Preniká do hlbších vrstiev bez poškodenia povrchovej epidermy.",
            duration: "30 min",
            price: "90 €",
            benefits: ["Bez exfoliácie", "Stimulácia kolagénu", "Vhodné celoročne"],
            targetGroup: "Citlivá aj zrelá pleť",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "povrchovy-anti-aging-peeling",
            name: "Povrchový anti-aging peeling",
            description: "Jemné ošetrenie na rozjasnenie, hydratáciu a prevenciu starnutia",
            duration: "30 min",
            price: "60 €",
            benefits: ["Rozjasnenie", "Hydratácia", "Bez rekonvalescencie"],
            targetGroup: "Citlivá pleť, prvé prejavy starnutia",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "tca-peeling",
            name: "TCA peeling – hĺbková regenerácia",
            description: "Intenzívne omladenie pre pleť so známkami poškodenia, jazvami a pigmentáciami",
            fullDescription: "TCA peeling využíva kyselinu trichlóroctovú vo vyššej koncentrácii, ktorá preniká do stredných vrstiev kože a spúšťa intenzívny regeneračný proces.",
            duration: "40 min",
            price: "80 €",
            benefits: ["Hĺbková regenerácia", "Redukcia jaziev", "Omladenie"],
            targetGroup: "Pleť s poškodením a pigmentáciami",
            contraindications: ["Aktívne akné", "Tehotenstvo", "Tmavý fototyp"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "infuzie",
        name: "Infúzna terapia",
        description: "Regenerácia organizmu prostredníctvom intravenózneho podávania vitamínov, minerálov a antioxidantov.",
        services: [
          {
            id: "liver-detox",
            name: "Liver Detox infúzia",
            description: "Podpora pečene, detoxikácia a zlepšenie metabolických procesov",
            fullDescription: "Infúzia obsahuje kombináciu vitamínov a minerálov, ktoré stimulujú činnosť pečene, podporujú detoxikačné dráhy a zlepšujú metabolizmus toxínov.",
            duration: "1h",
            price: "90 €",
            benefits: ["Detoxikácia pečene", "Podpora metabolizmu", "Antioxidačná ochrana"],
            targetGroup: "Klienti potrebujúci detox",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "b-komplex",
            name: "B-komplex infúzia",
            description: "Podpora nervového systému, energie a celkovej vitality",
            duration: "1h",
            price: "50 €",
            benefits: ["Energia", "Podpora nervov", "Zníženie únavy"],
            targetGroup: "Pri únave a strese",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "vitamin-c",
            name: "Vitamín C infúzia",
            description: "Podpora imunity, kolagénu a vitality organizmu",
            duration: "1h",
            price: "55 €",
            benefits: ["Posilnenie imunity", "Tvorba kolagénu", "Antioxidant"],
            targetGroup: "Pri infekciách a únave",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "glutathione",
            name: "Glutathione infúzia",
            description: "Silná antioxidantová a detoxikačná kúra pre regeneráciu buniek",
            duration: "1h",
            price: "85 €",
            benefits: ["Antioxidant", "Detoxikácia", "Spomalenie starnutia"],
            targetGroup: "Anti-aging, detox",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "immune-booster",
            name: "Immune Booster infúzia",
            description: "Komplexná podpora imunity, energie a obranyschopnosti",
            duration: "1h",
            price: "70 €",
            benefits: ["Posilnenie imunity", "Energia", "Detoxikácia"],
            targetGroup: "Pri oslabení imunity",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "hangover",
            name: "Hangover infúzia",
            description: "Rýchla regenerácia po nadmernej konzumácii alkoholu",
            duration: "1h",
            price: "70 €",
            benefits: ["Hydratácia", "Doplnenie minerálov", "Úľava od symptómov"],
            targetGroup: "Po konzumácii alkoholu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "magnezium-booster",
            name: "Magnézium Booster infúzia",
            description: "Rýchle doplnenie horčíka pre nervy, svaly a proti stresu",
            duration: "1h",
            price: "45 €",
            benefits: ["Uvoľnenie svalov", "Zníženie stresu", "Proti kŕčom"],
            targetGroup: "Pri strese a svalových kŕčoch",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  },
  {
    id: "kozmetologia",
    name: "Kozmetológia",
    description: "Profesionálna kozmetická starostlivosť o pleť s použitím najmodernejších techník a produktov.",
    subcategories: [
      {
        id: "aknozna-plet",
        name: "Aknózna a problematická pleť",
        description: "Cielená odborná starostlivosť pre pleť so sklonom k akné.",
        services: [
          {
            id: "diamantova-mikrodermabrazia",
            name: "Diamantová mikrodermabrázia",
            description: "Precízne hĺbkové čistenie a obnova povrchovej štruktúry pleti",
            fullDescription: "Diamantová mikrodermabrázia je šetrná, nechirurgická exfoliačná metóda, ktorá pomocou diamantových hlavíc a vákuového podtlaku odstraňuje odumreté bunky z povrchu pokožky.",
            duration: "1h",
            price: "35 €",
            benefits: ["Hĺbkové čistenie", "Zmenšenie pórov", "Zjemnenie textúry"],
            targetGroup: "Aknózna a problematická pleť",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "hydrafacial",
            name: "HydraFacial Rejuvenation",
            description: "Komplexné hydratačné a regeneračné ošetrenie",
            duration: "1h",
            price: "50 €",
            benefits: ["Hĺbková hydratácia", "Čistenie", "Omladenie"],
            targetGroup: "Všetky typy pleti",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          }
        ]
      },
      {
        id: "regeneracia-plet",
        name: "Regenerácia a obnova pleti",
        description: "Komplexné ošetrenia pre všetky typy pleti.",
        services: [
          {
            id: "hydrarepair",
            name: "HydraRepair – Hĺbková hydratácia a regenerácia",
            description: "Intenzívna hydratácia, obnova kožnej bariéry a okamžitý návrat pružnosti",
            fullDescription: "HydraRepair je profesionálne hydratačné ošetrenie vytvorené na rýchle doplnenie vlhkosti, obnovu kožnej bariéry a okamžité oživenie pleti.",
            duration: "1h",
            price: "52 €",
            benefits: ["Hĺbková hydratácia", "Obnova bariéry", "Zjemnenie vrások"],
            targetGroup: "Dehydratovaná pleť",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "exocell-renewal",
            name: "ExoCell Renewal – bunková obnova s exozómami",
            description: "Prémiové regeneračné ošetrenie využívajúce exozómy",
            fullDescription: "ExoCell Renewal využíva exozómy – vysoko aktívne nanočastice schopné aktivovať prirodzené opravné procesy pleti.",
            duration: "1h 15 min",
            price: "79 €",
            benefits: ["Bunková regenerácia", "Stimulácia kolagénu", "Anti-aging"],
            targetGroup: "Unavená, poškodená pleť",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "kolagenova-terapia",
            name: "Kolagénová terapia – Elastic Boost",
            description: "Cielené spevnenie, lifting a obnova pružnosti pleti",
            duration: "1h",
            price: "54 €",
            benefits: ["Spevnenie", "Lifting", "Obnova pružnosti"],
            targetGroup: "Pleť 30+",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "lux-skin-ritual",
            name: "Lux Skin Ritual – kompletná výživná kúra",
            description: "Komplexná regeneračná starostlivosť pre všetky typy pleti",
            duration: "1h 30 min",
            price: "65 €",
            benefits: ["Peeling", "Masáž", "Maska", "Regenerácia"],
            targetGroup: "Všetky typy pleti",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "chemicky-peeling",
        name: "Chemický peeling",
        description: "Profesionálne peelingy pre rôzne potreby pleti.",
        services: [
          {
            id: "gold-peeling",
            name: "Gold – chemický peeling + invazívna mezoterapia",
            description: "Luxusná obnova pleti s hĺbkovou hydratáciou a anti-aging efektom",
            duration: "1h 30 min",
            price: "35 €",
            benefits: ["Exfoliácia", "Mezoterapia", "Anti-aging"],
            targetGroup: "Zrelá pleť",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "platinum-peeling",
            name: "Platinum – komplexné omladenie",
            description: "Prémiové peelingovo-mezoterapeutické ošetrenie",
            duration: "1h 50 min",
            price: "od 50 €",
            benefits: ["Chemický peeling", "Invazívna mezoterapia", "Neinvazívna mezoterapia"],
            targetGroup: "Anti-aging 30+",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "mihalnice",
        name: "Mihalnice",
        description: "Profesionálne služby pre krásne mihalnice.",
        services: [
          {
            id: "1d-mihalnice",
            name: "1D – Klasické mihalnice",
            description: "Prirodzený a elegantný efekt – jedna umelá riasa na každú prirodzenú",
            duration: "2h",
            price: "45 €",
            benefits: ["Prirodzený vzhľad", "Profesionálna aplikácia"],
            targetGroup: "Pre prirodzený efekt",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "2d-mihalnice",
            name: "2D – Jemný objem",
            description: "Dve ultraľahké riasy pre jemne zvýraznený pohľad",
            duration: "2h",
            price: "50 €",
            benefits: ["Jemný objem", "Zvýraznený pohľad"],
            targetGroup: "Pre jemný objem",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "3d-mihalnice",
            name: "3D – Stredný objem",
            description: "Tri ľahučké riasy na jeden korienok",
            duration: "2h",
            price: "55 €",
            benefits: ["Hustejší objem", "Prirodzený vzhľad"],
            targetGroup: "Pre hustejší objem",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "4d-6d-mihalnice",
            name: "4D–6D – Objemové mihalnice",
            description: "Výrazný, plný a dramatický objem",
            duration: "2h",
            price: "60 €",
            benefits: ["Dramatický objem", "Glamour efekt"],
            targetGroup: "Pre výrazný objem",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "doplnanie-mihalnic",
            name: "Dopĺňanie mihalníc",
            description: "Profesionálne doplnenie pre udržanie krásneho efektu",
            duration: "1h",
            price: "od 30 €",
            benefits: ["Udržanie efektu", "Hustý vzhľad"],
            targetGroup: "Klientky s predĺženými mihalnicami",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "obocie",
        name: "Obočie",
        description: "Profesionálna úprava a starostlivosť o obočie.",
        services: [
          {
            id: "hairbrow",
            name: "HairBrow – zahusťovanie živými vlasmi",
            description: "Najprirodzenejšie dočasné zahustenie obočia bez farbenia kože",
            duration: "1h",
            price: "od 40 €",
            benefits: ["Prirodzený vzhľad", "Bez bolesti", "Bez rekonvalescencie"],
            targetGroup: "Riedke obočie",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "laminacia-obocia",
            name: "Laminácia obočia",
            description: "Dlhodobá fixácia, optické zahustenie a výživa chĺpkov",
            duration: "1h",
            price: "30 €",
            benefits: ["Fixácia tvaru", "Zahustenie", "Výdrž 6-8 týždňov"],
            targetGroup: "Neposlušné obočie",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "uprava-farbenie-obocia",
            name: "Úprava a farbenie obočia",
            description: "Profesionálne tónovanie a tvarovanie obočia",
            duration: "30 min",
            price: "10 €",
            benefits: ["Tvarovanie", "Farbenie", "Výživa"],
            targetGroup: "Všetky typy obočia",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "makeup",
        name: "Make-up",
        description: "Profesionálne líčenie pre každý typ udalosti.",
        services: [
          {
            id: "denny-makeup",
            name: "Denný make-up – Natural Beauty",
            description: "Prirodzený denný vzhľad",
            duration: "30 min",
            price: "22 €",
            benefits: ["Prirodzený vzhľad", "Dlhá výdrž"],
            targetGroup: "Pre každodenné nosenie",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "vecerny-makeup",
            name: "Večerný make-up – Glam Look",
            description: "Výrazný večerný alebo príležitostný make-up",
            duration: "1h",
            price: "30 €",
            benefits: ["Výrazný vzhľad", "Dlhá výdrž"],
            targetGroup: "Pre večerné udalosti",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "svadobny-makeup",
            name: "Svadobný make-up – Bridal Glow",
            description: "Exkluzívny svadobný styling",
            duration: "1h 15 min",
            price: "45 €",
            benefits: ["Fotostabilita", "Dlhá výdrž", "Luxusný vzhľad"],
            targetGroup: "Nevesty",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "masaze-tvar",
        name: "Masáže tváre",
        description: "Relaxačné a regeneračné ošetrenia pre tvár.",
        services: [
          {
            id: "klasicka-masaz-tvare",
            name: "Klasická masáž tváre",
            description: "Jemná stimulácia pre sviežu a žiarivú pleť",
            duration: "30 min",
            price: "17 €",
            benefits: ["Relaxácia", "Prekrvenie", "Žiarivá pleť"],
            targetGroup: "Všetky typy pleti",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "maderoterapia-face-basic",
            name: "Maderoterapia face Basic",
            description: "Neinvazívne spevnenie a detoxikácia tváre",
            duration: "25 min",
            price: "20 €",
            benefits: ["Spevnenie", "Detoxikácia", "Relaxácia"],
            targetGroup: "Všetky typy pleti",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "maderoterapia-face-gold",
            name: "Maderoterapia face Gold",
            description: "Luxusná detoxikačná masáž s peelingom",
            duration: "1h",
            price: "30 €",
            benefits: ["Peeling", "Maska", "Hĺbková regenerácia"],
            targetGroup: "Pre luxusný zážitok",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "masaz-tvare-dekoltu",
            name: "Masáž tváre a dekoltu",
            description: "Komplexná relaxačná masáž",
            duration: "45 min",
            price: "27 €",
            benefits: ["Relaxácia", "Prekrvenie", "Hydratácia"],
            targetGroup: "Všetky typy pleti",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  },
  {
    id: "laserove-odstranenie",
    name: "Laserová epilácia",
    description: "Najúčinnejšia metóda trvalého odstránenia nežiaduceho ochlpenia pomocou medicínskeho diódového lasera ELISION PRO.",
    subcategories: [
      {
        id: "laser-tvar",
        name: "Tvár a krk",
        description: "Laserová epilácia tváre a krku.",
        services: [
          {
            id: "laser-horna-pera",
            name: "Horná pera",
            duration: "15 min",
            price: "23 €",
            benefits: ["Trvalá redukcia", "Takmer bezbolestné"],
            targetGroup: "Ženy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "laser-brada",
            name: "Brada",
            duration: "15 min",
            price: "16 €",
            benefits: ["Trvalá redukcia", "Bez zarastania"],
            targetGroup: "Ženy aj muži",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "laser-cela-tvar",
            name: "Celá tvár",
            duration: "45 min",
            price: "63 €",
            benefits: ["Komplexné ošetrenie", "Hladká pleť"],
            targetGroup: "Ženy aj muži",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "laser-krk",
            name: "Krk",
            duration: "20 min",
            price: "24 €",
            benefits: ["Trvalá redukcia", "Rýchle ošetrenie"],
            targetGroup: "Ženy aj muži",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "laser-telo-zena",
        name: "Telo – ženy",
        description: "Laserová epilácia tela pre ženy.",
        services: [
          {
            id: "laser-podpazusie",
            name: "Podpazušie",
            duration: "15 min",
            price: "39 €",
            benefits: ["Hladká pokožka", "Bez zarastania"],
            targetGroup: "Ženy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "laser-bikiny",
            name: "Bikiny",
            duration: "30 min",
            price: "55 €",
            benefits: ["Trvalá redukcia", "Komfortné ošetrenie"],
            targetGroup: "Ženy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "laser-cele-nohy",
            name: "Celé nohy",
            duration: "1h 15 min",
            price: "143 €",
            benefits: ["Hladké nohy", "Dlhotrvajúci efekt"],
            targetGroup: "Ženy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "laser-cele-ruky",
            name: "Celé ruky",
            duration: "45 min",
            price: "79 €",
            benefits: ["Hladká pokožka", "Rýchle ošetrenie"],
            targetGroup: "Ženy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "laser-telo-muz",
        name: "Telo – muži",
        description: "Laserová epilácia tela pre mužov.",
        services: [
          {
            id: "laser-chrbat",
            name: "Celý chrbát",
            duration: "1h",
            price: "140 €",
            benefits: ["Hladký chrbát", "Trvalá redukcia"],
            targetGroup: "Muži",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "laser-hrud",
            name: "Hruď",
            duration: "45 min",
            price: "88 €",
            benefits: ["Hladká hruď", "Estetický vzhľad"],
            targetGroup: "Muži",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "laser-brucho",
            name: "Celé brucho",
            duration: "30 min",
            price: "64 €",
            benefits: ["Hladké brucho", "Trvalá redukcia"],
            targetGroup: "Muži",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  },
  {
    id: "permanentny-makeup",
    name: "Permanentný make-up",
    description: "Profesionálna mikropigmentácia pre prirodzené a dlhotrvajúce výsledky.",
    subcategories: [
      {
        id: "pmu-sluzby",
        name: "PMU služby",
        description: "Kompletná ponuka permanentného make-upu.",
        services: [
          {
            id: "pmu-obocia",
            name: "PMU Obočia",
            description: "Permanentný make-up obočia s 2× korekciou v cene",
            fullDescription: "Permanentný make-up predstavuje modernú, bezpečnú a presnú formu mikropigmentácie, pri ktorej sa do vrchných vrstiev kože aplikujú špeciálne minerálne pigmenty.",
            duration: "2h",
            price: "220 €",
            benefits: ["2× korekcia v cene", "Prirodzený vzhľad", "Dlhotrvajúci efekt"],
            targetGroup: "Ženy s riedkym obočím",
            contraindications: ["Aktívny herpes", "Tehotenstvo", "Krvné ochorenia"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "pmu-pier",
            name: "PMU pier",
            description: "Permanentný make-up pier s 2× korekciou v cene",
            duration: "2h",
            price: "od 270 €",
            benefits: ["2× korekcia v cene", "Plnší vzhľad", "Dlhotrvajúca farba"],
            targetGroup: "Ženy",
            contraindications: ["Aktívny herpes", "Tehotenstvo"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "pmu-ocnych-liniek",
            name: "PMU očných liniek",
            description: "Permanentný make-up očných liniek s 2× korekciou",
            duration: "1h 30 min",
            price: "170 €",
            benefits: ["2× korekcia v cene", "Zvýraznený pohľad"],
            targetGroup: "Ženy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "pmu-ocnych-tienov",
            name: "PMU Očných tieňov",
            description: "Permanentný make-up očných tieňov s 2× korekciou",
            duration: "2h",
            price: "220 €",
            benefits: ["2× korekcia v cene", "Dramatický efekt"],
            targetGroup: "Ženy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "tetovanie-vlasov",
            name: "Tetovanie vlasov – Hair Tattoo",
            description: "Micropigmentácia vlasových folikulov",
            fullDescription: "Technika vytvára efekt hustejšieho porastu alebo oholenej hlavy s prirodzeným tieňovaním.",
            duration: "1h 30 min",
            price: "od 280 €",
            benefits: ["Efekt hustých vlasov", "Prirodzený vzhľad"],
            targetGroup: "Muži aj ženy s redšími vlasmi",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "pmu-korekcia",
            name: "PMU korekcia",
            description: "Korekcia existujúceho permanentného make-upu",
            duration: "1h",
            price: "od 30 €",
            benefits: ["Obnovenie farby", "Úprava tvaru"],
            targetGroup: "Klientky s PMU",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  },
  {
    id: "telove-osetrenia",
    name: "Telové ošetrenia",
    description: "Komplexná starostlivosť o telo vrátane maderoterapie a depilácie.",
    subcategories: [
      {
        id: "maderoterapia",
        name: "Maderoterapia",
        description: "Prírodné formovanie postavy a stimulácia lymfy.",
        services: [
          {
            id: "brazilska-maderoterapia",
            name: "Brazílska maderoterapia – formovanie postavy",
            description: "Intenzívna technika pre modeláciu postavy",
            fullDescription: "Brazílska maderoterapia kombinuje hlboké drevené valčeky, zvončeky a tvarovacie nástroje, ktoré podporujú rozrušenie tukových usadenín, aktiváciu lymfy a spevnenie pokožky.",
            duration: "1h",
            price: "50 €",
            benefits: ["Formovanie postavy", "Redukcia celulitídy", "Spevnenie pokožky"],
            targetGroup: "Pre modeláciu postavy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "maderoterapia-basic",
            name: "Maderoterapia Basic",
            description: "Komplexná detoxikačná terapia",
            duration: "1h",
            price: "30 €",
            benefits: ["Detoxikácia", "Redukcia celulitídy", "Relaxácia"],
            targetGroup: "Pre detox a relaxáciu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "depilacia-cukrova",
        name: "Depilácia cukrovou pastou",
        description: "Šetrná, prírodná metóda odstránenia chĺpkov.",
        services: [
          {
            id: "depilacia-nohy-cele",
            name: "Nohy celé",
            duration: "45 min",
            price: "26 €",
            benefits: ["Prírodné zloženie", "Šetrné k pokožke"],
            targetGroup: "Ženy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "depilacia-bikiny-hlboke",
            name: "Bikiny hlboké (Brazilian)",
            duration: "35 min",
            price: "22 €",
            benefits: ["Hladká pokožka", "Minimálne zarastanie"],
            targetGroup: "Ženy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "depilacia-podpazusie",
            name: "Podpazušie",
            duration: "15 min",
            price: "10 €",
            benefits: ["Rýchle ošetrenie", "Hladká pokožka"],
            targetGroup: "Ženy aj muži",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "depilacia-hollywood",
            name: "Intímna oblasť komplet (Hollywood)",
            duration: "50 min",
            price: "28 €",
            benefits: ["Kompletné ošetrenie", "Minimálna bolesť"],
            targetGroup: "Ženy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "parafinove-zabaly",
        name: "Parafínové zábaly",
        description: "Teplo, výživa a regenerácia pre pokožku.",
        services: [
          {
            id: "parafin-ruky-chodidla",
            name: "Ruky + chodidlá s parafínom",
            description: "Komplexné prehriatie a regenerácia dlaní aj chodidiel",
            duration: "40 min",
            price: "24 €",
            benefits: ["Hydratácia", "Regenerácia", "Relaxácia"],
            targetGroup: "Suchá pokožka",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "parafin-maska-tvar",
            name: "Parafínová maska na tvár",
            description: "Hĺbková hydratácia a liftingový efekt",
            duration: "30 min",
            price: "15 €",
            benefits: ["Hydratácia", "Lifting", "Regenerácia"],
            targetGroup: "Suchá a unavená pleť",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  },
  {
    id: "vlasy",
    name: "Vlasová starostlivosť",
    description: "Head Spa rituály a trichologické ošetrenia pre zdravé a krásne vlasy.",
    subcategories: [
      {
        id: "vlasove-osetrenia",
        name: "Vlasové ošetrenia",
        description: "Profesionálna starostlivosť o vlasy a vlasovú pokožku.",
        services: [
          {
            id: "mezoterapia-vlasov",
            name: "Mezoterapia vlasovej pokožky",
            description: "Stimulácia rastu, pri vypadávaní vlasov 18+",
            fullDescription: "Terapia aktivuje vlasové folikuly, zlepšuje prekrvenie pokožky hlavy a posilňuje korienky vlasov. Redukuje vypadávanie, podporuje rast a zlepšuje kvalitu vlasového vlákna.",
            duration: "1h",
            price: "85 €",
            benefits: ["Stimulácia rastu", "Posilnenie vlasov", "Redukcia vypadávania"],
            targetGroup: "Pri vypadávaní vlasov",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  },
  {
    id: "pedikura",
    name: "Pedikúra",
    description: "Profesionálna starostlivosť o nohy a nechty.",
    subcategories: [
      {
        id: "pedikura-sluzby",
        name: "Pedikúra",
        description: "Komplexná starostlivosť o chodidlá.",
        services: [
          {
            id: "mokra-pedikura",
            name: "Mokrá pedikúra",
            description: "Komplexná pedikúra s kúpeľom a hydratačnou masážou",
            fullDescription: "Počas pedikúry sa chodidlá najprv zmäkčia v teplom kúpeli, ktorý pripraví pokožku na šetrné odstránenie zrohovatenej kože a otlakov.",
            duration: "1h",
            price: "od 22 €",
            benefits: ["Odstránenie zrohovatenej kože", "Úprava nechtov", "Masáž"],
            targetGroup: "Pre všetkých",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "wellness-pedikura",
            name: "Wellness pedikúra",
            description: "Luxusná procedúra s peelingom, parafínom a masážou",
            duration: "2h",
            price: "32 €",
            benefits: ["Peeling", "Parafínový zábal", "Masáž", "Lakovanie"],
            targetGroup: "Pre luxusný zážitok",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "odstranenie-kurieho-oka",
            name: "Odstránenie kurieho oka / otlaku",
            description: "Odborné lokálne ošetrenie",
            duration: "15 min",
            price: "5 €",
            benefits: ["Úľava od bolesti", "Odborné ošetrenie"],
            targetGroup: "Pri kurom oku alebo otlaku",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "osetrenie-zarasteneho-nechtu",
            name: "Ošetrenie zarasteného nechtu",
            description: "Jemné uvoľnenie, čistenie a tamponáda",
            duration: "20 min",
            price: "7 €",
            benefits: ["Úľava", "Prevencia zápalov"],
            targetGroup: "Pri zarastenom nechte",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  },
  {
    id: "wellness",
    name: "Wellness procedúry",
    description: "Relaxačné a regeneračné procedúry pre telo aj myseľ.",
    subcategories: [
      {
        id: "masaze-telo",
        name: "Masáže",
        description: "Rôzne typy masáží pre relaxáciu a regeneráciu.",
        services: [
          {
            id: "masaz-ruk",
            name: "Masáž rúk",
            description: "Uvoľnenie, prekrvenie a regenerácia namáhaných rúk",
            fullDescription: "Masáž rúk uvoľňuje svaly, zlepšuje cirkuláciu a pomáha zmierniť stres, ktorý sa často hromadí v končatinách.",
            duration: "20 min",
            price: "15 €",
            benefits: ["Uvoľnenie", "Prekrvenie", "Regenerácia"],
            targetGroup: "Pri napätí v rukách",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "masaz-chodidiel",
            name: "Masáž chodidiel – relaxačná",
            description: "Uvoľňuje napätie a zlepšuje cirkuláciu",
            duration: "15 min",
            price: "8 €",
            benefits: ["Relaxácia", "Zlepšenie cirkulácie"],
            targetGroup: "Pre unavené nohy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "pristrojove-osetrenia",
        name: "Prístrojové ošetrenia",
        description: "Pokročilé technológie pre regeneráciu.",
        services: [
          {
            id: "pdt-terapia",
            name: "PDT terapia svetlom",
            description: "Regenerácia kože pomocou terapeutického LED svetla",
            fullDescription: "PDT terapia je vysoko účinná neinvazívna metóda, ktorá využíva rôzne spektrá LED svetla na ovplyvnenie bunkových procesov.",
            duration: "30 min",
            price: "15 €",
            benefits: ["Regenerácia", "Proti akné", "Upokojenie"],
            targetGroup: "Problematická pleť",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "radiofrekvencia",
            name: "Rádiofrekvencia / Tripolárna rádiofrekvencia",
            description: "Neinvazívny lifting a spevnenie kože",
            fullDescription: "Rádiofrekvencia je pokročilé neinvazívne ošetrenie, ktoré pôsobí na hlbšie vrstvy kože pomocou presne riadených rádiových vĺn.",
            duration: "1h",
            price: "35 €",
            benefits: ["Lifting", "Spevnenie", "Stimulácia kolagénu"],
            targetGroup: "Ochabnutá pleť",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "neinvazivna-mezoterapia",
            name: "Neinvazívna mezoterapia",
            description: "Revitalizácia, hydratácia a spevnenie bez ihiel",
            duration: "1h",
            price: "25 €",
            benefits: ["Bez ihiel", "Hydratácia", "Spevnenie"],
            targetGroup: "Pre citlivých klientov",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  },
  {
    id: "kurzy",
    name: "Kurzy",
    description: "Profesionálne vzdelávanie s medzinárodným certifikátom.",
    subcategories: [
      {
        id: "vzdelavacie-kurzy",
        name: "Vzdelávacie kurzy",
        description: "Certifikované školenia pre profesionálov.",
        services: [
          {
            id: "kurz-kozmetika",
            name: "Kozmetický kurz s medzinárodným certifikátom",
            description: "Komplexné vzdelávanie v oblasti kozmetológie",
            fullDescription: "Profesionálne vzdelávacie programy s medzinárodným certifikátom pre budúcich kozmetičiek a kozmetičky.",
            duration: "Podľa programu",
            price: "Podľa programu",
            benefits: ["Medzinárodný certifikát", "Praktické skúsenosti", "Odborné vedenie"],
            targetGroup: "Záujemcovia o kariéru v kozmetike",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  }
];
