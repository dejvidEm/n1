import { Category } from "@/types/services";

export const servicesData: Category[] = [
  {
    id: "esteticka-medicina",
    name: "Estetická a regeneratívna medicína",
    description: "Moderná estetická medicína využívajúca najnovšie technológie pre omladenie, regeneráciu a obnovu pokožky.",
    subcategories: [
      {
        id: "exozomy",
        name: "Exozómy, rastové faktory, bunkové ošetrenia",
        description: "Najmodernejšia úroveň regenerácie pleti aktivujúca prirodzené procesy obnovy.",
        services: [
          {
            id: "exozomy-regeneracia",
            name: "Exozómy – bunková regenerácia pleti i.d",
            description: "Exozómy majú silné protizápalové a regeneračné vlastnosti, signalizujú bunkám aby vytvárali vlákna kolagénu. Pokožka je mladá na hlbokej bunkovej úrovni.",
            duration: "1h",
            price: "od 200 €",
            benefits: ["Intenzívna regenerácia buniek", "Zlepšenie textúry a elasticity", "Zmiernenie vrások", "Podpora rastu vlasov"],
            targetGroup: "Pre osoby hľadajúce hlbokú regeneráciu pleti",
            contraindications: ["Tehotenstvo", "Aktívne kožné infekcie", "Autoimunitné ochorenia"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
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
            description: "Odborná konzultácia s analýzou pleti a vizualizáciou výsledku zákroku pre vašu lepšiu predstavu.",
            duration: "30min",
            price: "20 €",
            benefits: ["Analýza stavu pleti", "Vizualizácia výsledkov", "Individuálny plán ošetrení"],
            targetGroup: "Pre všetkých záujemcov o estetické zákroky",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "kontrola",
            name: "Kontrola",
            description: "Následná kontrola po absolvovanom ošetrení.",
            duration: "30min",
            price: "10 €",
            benefits: ["Zhodnotenie výsledkov", "Úprava liečebného plánu"],
            targetGroup: "Pre klientov po absolvovaní ošetrenia",
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
            description: "Intenzívna hydratácia a regenerácia pleti 25+. Využíva kombináciu čistej kyseliny hyalurónovej a aminokyselín.",
            duration: "1h",
            price: "175 €",
            benefits: ["Okamžitá hydratácia", "Regenerácia pokožky", "Redukcia jemných vrások", "Zlepšenie pružnosti"],
            targetGroup: "Pre osoby 25+ hľadajúce hydratáciu a prevenciu starnutia",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "dermaheal",
            name: "Dermaheal – peptidová mezoterapia",
            description: "Odporúčané pri pigmentáciách, akné a unavenej pleti 18+. Obsahuje biomimetické peptidy a rastové faktory.",
            duration: "45min",
            price: "100 €",
            benefits: ["Redukcia pigmentácií", "Zjemnenie pórov", "Regulácia mazotoku"],
            targetGroup: "Pre osoby s pigmentáciami a akné 18+",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "elixir-krasy",
            name: "Elixír krásy – mezoterapia na mieru",
            description: "Personalizovaná kúra podľa potrieb pleti 25+. Individuálne vytvorený regeneračný koktail aktívnych látok.",
            duration: "50min",
            price: "200 €",
            benefits: ["Personalizovaný prístup", "Hydratácia", "Rozjasnenie", "Spevnenie"],
            targetGroup: "Pre osoby 25+ vyžadujúce individuálny prístup",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "jalupro",
            name: "Jalupro – bio-revitalizácia",
            description: "Intenzívna aminokyselinová výživa pre mdlú pleť 30+. Stimuluje fibroblasty a podporuje tvorbu kolagénu.",
            duration: "45min",
            price: "120 €",
            benefits: ["Stimulácia kolagénu", "Redukcia vrások", "Zlepšenie pružnosti"],
            targetGroup: "Pre osoby 30+ s unavou pleti",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "mezobotox",
            name: "Mezobotox",
            description: "Jemné vyhladenie mimických vrások 30+. Kombinuje účinok botulotoxínu a mezoterapie.",
            duration: "1h",
            price: "200 €",
            benefits: ["Zjemnenie mimických vrások", "Zmenšenie pórov", "Zmatnenie pleti"],
            targetGroup: "Pre osoby 30+ s mimickými vráskami",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "mezonitovy-lifting",
            name: "Mezoniťový lifting",
            description: "Nechirurgické spevnenie kontúr a stimulácia kolagénu 30+. Využíva jemné vstrebateľné nite.",
            duration: "1h",
            price: "od 100 €",
            benefits: ["Spevnenie pokožky", "Obnova kontúr", "Aktivácia kolagénu"],
            targetGroup: "Pre osoby preferujúce neinvazívne riešenie",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "mezoterapia-oci",
            name: "Mezoterapia očného okolia",
            description: "Cielené ošetrenie pre tmavé kruhy, opuchy a unavené oči 18+.",
            duration: "30min",
            price: "55 €",
            benefits: ["Zlepšenie mikrocirkulácie", "Spevnenie pleti", "Redukcia opuchov"],
            targetGroup: "Pre osoby s tmavými kruhmi pod očami",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "mezoterapia-ruk",
            name: "Mezoterapia rúk",
            description: "Omladenie a zjednotenie pokožky rúk 30+.",
            duration: "1h",
            price: "od 200 €",
            benefits: ["Hydratácia", "Redukcia pigmentácií", "Zjemnenie textúry"],
            targetGroup: "Pre osoby 30+ s prejavmi starnutia na rukách",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "mezoterapia-vlasy",
            name: "Mezoterapia vlasovej pokožky",
            description: "Stimulácia rastu pri vypadávaní vlasov 18+.",
            duration: "1h",
            price: "85 €",
            benefits: ["Aktivácia vlasových folikulov", "Posilnenie korienkov", "Podpora rastu"],
            targetGroup: "Pre osoby s vypadávaním vlasov",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "profhilo",
            name: "Profhilo – hydratačný lifting",
            description: "Biostimulačná HA pre obnovu elasticity 30+. Najčistejšia koncentrovaná kyselina hyalurónová.",
            duration: "30min",
            price: "250 €",
            benefits: ["Obnova elasticity", "Stimulácia elastínu", "Zlepšenie kvality pleti"],
            targetGroup: "Pre osoby 30+ hľadajúce prirodzený lifting",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "radiesse",
            name: "Radiesse – kolagénový biostimulátor",
            description: "Spevnenie kontúr a stimulácia kolagénu 35+. Okamžité spevnenie s dlhodobým účinkom až 18 mesiacov.",
            duration: "1h",
            price: "od 290 €",
            benefits: ["Spevnenie kontúr", "Stimulácia kolagénu", "Dlhodobý efekt"],
            targetGroup: "Pre osoby 35+ so stratou objemu",
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
            description: "Obnova objemu, korekcia kontúr a redukcia vrások s okamžitým efektom pomocou kyseliny hyalurónovej.",
            duration: "30-60min",
            price: "od 250 €",
            benefits: ["Obnova objemu", "Vyhladenie vrások", "Modelácia kontúr", "Okamžitý výsledok"],
            targetGroup: "Pre osoby so stratou objemu a vráskami",
            contraindications: ["Tehotenstvo a dojčenie", "Aktívne kožné infekcie", "Autoimunitné ochorenia", "Alergia na zložky"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "blefaroplastika",
            name: "Neinvazívna blefaroplastika",
            description: "Plazmové vypnutie očného viečka bez chirurgického zákroku.",
            duration: "40min",
            price: "120 €",
            benefits: ["Liftingový efekt", "Novotvorba kolagénu", "Bez chirurgického zákroku"],
            targetGroup: "Pre osoby s poklesnutými viečkami",
            contraindications: ["Aktívny zápal kože", "Herpes", "Tehotenstvo", "Veľmi tmavá pleť"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "odstranenie-jaziev",
            name: "Odstránenie jaziev",
            description: "Komplexný regeneračný protokol pre jazvy po akné, operáciách a úrazoch.",
            duration: "1h",
            price: "od 100 €",
            benefits: ["Remodelácia jazvy", "Zlepšenie farby a povrchu", "Zvýšenie elasticity"],
            targetGroup: "Pre osoby s jazvami po akné, chirurgii alebo úrazoch",
            contraindications: ["Aktívne akné", "Zápal kože", "Čerstvo opálená pokožka"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "odstranenie-vyrastkov",
            name: "Odstránenie kožných výrastkov",
            description: "Presná plazmová eliminácia fibrómov a drobných kožných lézií.",
            duration: "45min",
            price: "45–100 €",
            benefits: ["Rýchle odstránenie", "Bez rezu a jazvy", "Okamžite hladšia pokožka"],
            targetGroup: "Pre osoby s fibrómami a drobnými kožnými léziami",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "nastrelovanie-nausnic-deti",
            name: "Nastreľovanie náušníc – deti",
            description: "Bezpečné, šetrné a hygienické prepichnutie uší pre najmenších.",
            duration: "20min",
            price: "od 45 €",
            benefits: ["Bezbolestné", "Hygienické", "Hypoalergénne materiály"],
            targetGroup: "Pre bábätká a deti od 3. mesiaca",
            contraindications: ["Ekzém v oblasti ucha", "Infekcia kože", "Alergia na kovy"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "nastrelovanie-nausnic-dospeli",
            name: "Nastreľovanie náušníc – dospelí",
            description: "Presné a estetické prepichnutie ušných lalokov.",
            duration: "15min",
            price: "od 45 €",
            benefits: ["Presné prepichnutie", "Široký výber náušníc", "Profesionálny prístup"],
            targetGroup: "Pre dospelých",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "peelingy",
        name: "Peelingy a resurfacing",
        description: "Odborná exfoliácia, biostimulácia a omladenie pokožky pomocou klinicky overených kyselín.",
        services: [
          {
            id: "basic-peeling",
            name: "Basic chemický peeling",
            description: "Jemná exfoliácia pre rozjasnenie, zjednotenie a vyhladenie pleti.",
            duration: "1h",
            price: "35 €",
            benefits: ["Rozjasnenie", "Zjednotenie tónu", "Zjemnenie textúry"],
            targetGroup: "Pre všetky typy pleti, aj začiatočníkov",
            contraindications: ["Aktívne zápalové akné", "Kožné infekcie", "Citlivá podráždená koža"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "gold-peeling",
            name: "Gold – chemický peeling + invazívna mezoterapia",
            description: "Luxusná obnova pleti s hĺbkovou hydratáciou a anti-aging efektom.",
            duration: "1h 30min",
            price: "individuálna",
            benefits: ["Intenzívne omladenie", "Hĺbková hydratácia", "Stimulácia kolagénu"],
            targetGroup: "Pre osoby vyžadujúce komplexné omladenie",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "platinum-peeling",
            name: "Platinum – chemický peeling + invazívna + neinvazívna mezoterapia",
            description: "Prémiové komplexné omladenie a intenzívna regenerácia pokožky.",
            duration: "1h 50min",
            price: "individuálna",
            benefits: ["Pôsobí na všetky vrstvy kože", "Redukcia vrások", "Stimulácia kolagénu"],
            targetGroup: "Pre osoby hľadajúce maximum anti-aging efektu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "prx-t33",
            name: "PRX-T33 – biorevitalizačný peeling",
            description: "Inovatívny peeling s okamžitým omladením a liftingom bez odlupovania.",
            duration: "45min",
            price: "80 €",
            benefits: ["Okamžitý lifting", "Bez odlupovania", "Stimulácia kolagénu"],
            targetGroup: "Pre osoby hľadajúce rýchle výsledky bez rekonvalescencie",
            contraindications: ["Aktívne akné a zápal", "Tmavý fototyp", "Čerstvé opálenie", "Tehotenstvo"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "infuzie",
        name: "Infúzny bar",
        description: "Komplexná intravenózna terapia pre zdravie, energiu a regeneráciu organizmu s 100% biologickou dostupnosťou.",
        services: [
          {
            id: "liver-detox",
            name: "Liver Detox infúzia",
            description: "Podpora pečene, detoxikácia a zlepšenie metabolických procesov.",
            duration: "1h",
            price: "90 €",
            benefits: ["Stimulácia činnosti pečene", "Detoxikácia", "Zlepšenie metabolizmu"],
            targetGroup: "Pre osoby potrebujúce detoxikáciu organizmu",
            contraindications: ["Akútne infekcie s horúčkou", "Závažné ochorenia obličiek", "Alergia na zložky"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "b-komplex",
            name: "B-komplex infúzia",
            description: "Podpora nervového systému, energie a celkovej vitality.",
            duration: "1h",
            price: "50 €",
            benefits: ["Podpora nervov", "Energetický metabolizmus", "Regenerácia"],
            targetGroup: "Pre osoby s únavou a stresom",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "vitamin-recharge",
            name: "Vitamin Recharge infúzia",
            description: "Okamžitá energizácia, podpora imunity a zdravý vzhľad pokožky, vlasov a nechtov.",
            duration: "1h",
            price: "individuálna",
            benefits: ["Okamžitá energia", "Podpora imunity", "Zdravý vzhľad"],
            targetGroup: "Pre osoby s únavou a deficitom vitamínov",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "glukoza",
            name: "Glukóza infúzia",
            description: "Rýchla energia, podpora rastu vlasov a nechtov.",
            duration: "1h",
            price: "30 €",
            benefits: ["Rýchla energia", "Podpora vlasov a nechtov", "Zlepšenie metabolizmu"],
            targetGroup: "Pre osoby s únavou a vyčerpaním",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "glutathione",
            name: "Glutathione infúzia",
            description: "Silná antioxidantová a detoxikačná kúra pre regeneráciu buniek.",
            duration: "1h",
            price: "85 €",
            benefits: ["Antioxidačná ochrana", "Detoxikácia pečene", "Spomalenie starnutia"],
            targetGroup: "Pre osoby hľadajúce anti-aging efekt",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "immune-booster",
            name: "Immune Booster infúzia",
            description: "Komplexná podpora imunity, energie a obranyschopnosti organizmu.",
            duration: "1h",
            price: "70 €",
            benefits: ["Stimulácia bielych krviniek", "Energetický metabolizmus", "Detoxikácia"],
            targetGroup: "Pre osoby s oslabenou imunitou",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "vitamin-c",
            name: "Vitamín C infúzia",
            description: "Podpora imunity, kolagénu a vitality organizmu.",
            duration: "1h",
            price: "55 €",
            benefits: ["Posilnenie imunity", "Antioxidant", "Stimulácia kolagénu"],
            targetGroup: "Pre všetkých hľadajúcich podporu imunity",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "hangover",
            name: "Hangover infúzia",
            description: "Rýchla regenerácia po nadmernej konzumácii alkoholu.",
            duration: "1h",
            price: "70 €",
            benefits: ["Detoxikácia", "Hydratácia", "Zmiernenie symptómov"],
            targetGroup: "Pre osoby po konzumácii alkoholu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "magnezium-booster",
            name: "Magnézium Booster infúzia",
            description: "Rýchle doplnenie horčíka pre nervy, svaly a proti stresu.",
            duration: "1h",
            price: "45 €",
            benefits: ["Regulácia svalov", "Zníženie stresu", "Pomoc pri migrénach"],
            targetGroup: "Pre osoby so stresom a svalovými kŕčmi",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "post-workout",
            name: "Post-Workout Recovery infúzia",
            description: "Rýchla regenerácia po fyzickej záťaži a prevencia svalovej únavy.",
            duration: "1h",
            price: "40 €",
            benefits: ["Podpora energie", "Uvoľnenie svalov", "Rýchla regenerácia"],
            targetGroup: "Pre športovcov a aktívnych ľudí",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "onco-support",
            name: "Onco Support infúzia",
            description: "Špeciálna biostimulačná infúzia pre klientov počas a po onkologickej liečbe.",
            duration: "1h",
            price: "individuálna",
            benefits: ["Regenerácia organizmu", "Podpora imunity", "Zmiernenie únavy"],
            targetGroup: "Pre onkologických pacientov (vyžaduje dokumentáciu)",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "milgamma",
            name: "Milgamma N injekcia",
            description: "Regenerácia nervov, podpora nervového systému.",
            duration: "10min",
            price: "10 €",
            benefits: ["Regenerácia nervových vlákien", "Zníženie neuropatických bolestí"],
            targetGroup: "Pre osoby s neuropatickými ťažkosťami",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "novalgin",
            name: "Novalgin injekcia",
            description: "Rýchla úľava od bolesti a horúčky.",
            duration: "10min",
            price: "10 €",
            benefits: ["Potlačenie bolesti", "Zníženie horúčky"],
            targetGroup: "Pre osoby s akútnou bolesťou",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  },
  {
    id: "kozmetologia",
    name: "Kozmetológia",
    description: "Profesionálna kozmetická starostlivosť pre všetky typy pleti.",
    subcategories: [
      {
        id: "akne",
        name: "Aknózna a problematická pleť",
        description: "Cielená odborná starostlivosť pre pleť so sklonom k akné a nerovnostiam.",
        services: [
          {
            id: "diamantova-mikrodermbrazia",
            name: "Diamantová mikrodermabrázia",
            description: "Precízne hĺbkové čistenie a obnova povrchovej štruktúry pleti.",
            duration: "1h",
            price: "35 €",
            benefits: ["Odstránenie odumretých buniek", "Redukcia pórov", "Zlepšenie cirkulácie"],
            targetGroup: "Pre problematickú a aknóznu pleť",
            contraindications: ["Aktívne zápalové akné", "Rosacea", "Kožné infekcie"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "kozmeticke-osetrenie",
            name: "Kozmetické ošetrenie na mieru",
            description: "Individuálne zostavená terapia podľa aktuálnych potrieb vašej pleti.",
            duration: "1h",
            price: "od 40 €",
            benefits: ["Personalizovaný prístup", "Obnova kožnej bariéry", "Zjemnenie pórov"],
            targetGroup: "Pre všetky typy pleti",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "sonoforeza",
            name: "Sonoforéza",
            description: "Ultrazvuková aplikácia aktívnych látok do hlbších vrstiev pokožky.",
            duration: "10min",
            price: "7 €",
            benefits: ["Lepšie vstrebávanie sér", "Podpora hydratácie", "Zjednotenie textúry"],
            targetGroup: "Ako doplnok k iným ošetreniam",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "regeneracia-pleti",
        name: "Regenerácia a obnova pleti",
        description: "Pokročilé regeneračné ošetrenia pre všetky typy pleti.",
        services: [
          {
            id: "dermapen",
            name: "DERMAPEN – Mikroihličková mezoterapia",
            description: "Intenzívna stimulácia kolagénu, omladenie a obnova štruktúry pleti.",
            duration: "1h",
            price: "50 €",
            benefits: ["Redukcia jaziev", "Zmenšenie pórov", "Vyhladenie vrások", "Spevnenie pleti"],
            targetGroup: "Pre osoby hľadajúce výrazné zlepšenie kvality pleti",
            contraindications: ["Aktívne akné", "Tehotenstvo", "Používanie retinoidov", "Herpes"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "hydrarepair",
            name: "HydraRepair – Hĺbková hydratácia",
            description: "Intenzívna hydratácia, obnova kožnej bariéry a okamžitý návrat pružnosti.",
            duration: "1h",
            price: "52 €",
            benefits: ["Hĺbková hydratácia", "Zjemnenie vrások", "Obnova bariéry"],
            targetGroup: "Pre dehydratovanú a unavenú pleť",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "exocell",
            name: "ExoCell Renewal – bunková obnova s exozómami",
            description: "Prémiové regeneračné ošetrenie aktivujúce prirodzené opravné procesy pleti.",
            duration: "1h 15min",
            price: "79 €",
            benefits: ["Bunková obnova", "Zlepšenie elasticity", "Omladenie pleti"],
            targetGroup: "Pre osoby hľadajúce intenzívnu anti-aging starostlivosť",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "kolagenova-terapia",
            name: "Kolagénová terapia – Elastic Boost",
            description: "Cielené spevnenie, lifting a obnova pružnosti pleti.",
            duration: "1h",
            price: "individuálna",
            benefits: ["Spevnenie", "Lifting", "Obnova pružnosti"],
            targetGroup: "Pre osoby 30+ so stratou elasticity",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "mihalnice",
        name: "Mihalnice",
        description: "Profesionálne predlžovanie a úprava mihalníc.",
        services: [
          {
            id: "mihalnice-1d",
            name: "1D – Klasické mihalnice",
            description: "Prirodzený a elegantný efekt – jedna umelá riasa na každú prirodzenú.",
            duration: "2h",
            price: "45 €",
            benefits: ["Prirodzený efekt", "Elegantný vzhľad"],
            targetGroup: "Pre milovníčky prirodzeného vzhľadu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "mihalnice-2d",
            name: "2D – Jemný objem",
            description: "Dve ultraľahké riasy na jednu prirodzenú pre jemne zvýraznený pohľad.",
            duration: "2h",
            price: "50 €",
            benefits: ["Jemný objem", "Zvýraznený pohľad"],
            targetGroup: "Pre jemne zvýraznený pohľad",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "mihalnice-3d",
            name: "3D – Stredný objem",
            description: "Tri ľahučké riasy na jeden korienok pre hustejší objem.",
            duration: "2h",
            price: "55 €",
            benefits: ["Hustejší objem", "Prirodzený vzhľad"],
            targetGroup: "Pre stredný objem mihalníc",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "mihalnice-4d-6d",
            name: "4D–6D – Objemové mihalnice",
            description: "Výrazný, plný a dramatický objem pre intenzívny glamour efekt.",
            duration: "2h",
            price: "60 €",
            benefits: ["Dramatický objem", "Glamour efekt"],
            targetGroup: "Pre milovníčky výrazného vzhľadu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "doplnanie-mihalnic",
            name: "Dopĺňanie mihalníc",
            description: "Profesionálne doplnenie pre udržanie krásneho efektu.",
            duration: "1h",
            price: "od 30 €",
            benefits: ["Udržanie vzhľadu", "Pravidelná starostlivosť"],
            targetGroup: "Pre klientky s predĺženými mihalnicami",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "farbenie-mihalnic",
            name: "Farbenie mihalníc",
            description: "Profesionálne farbenie pre výrazné, tmavé riasy.",
            duration: "30min",
            price: "individuálna",
            benefits: ["Zvýraznenie rias", "Bez potreby špirály"],
            targetGroup: "Pre svetlé alebo nevýrazné mihalnice",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "obocie",
        name: "Obočie",
        description: "Moderné techniky modelácie a zahusťovania obočia.",
        services: [
          {
            id: "hairbrow",
            name: "HairBrow – zahusťovanie živými vlasmi",
            description: "Najprirodzenejšie dočasné zahustenie obočia bez farbenia kože.",
            duration: "1h",
            price: "od 40 €",
            benefits: ["Prirodzený vzhľad", "Bez bolestivosti", "Bez rekonvalescencie"],
            targetGroup: "Pre osoby s riedkym obočím",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "laminacia-obocia",
            name: "Laminácia obočia",
            description: "Dlhodobá fixácia, optické zahustenie a výživa chĺpkov.",
            duration: "1h",
            price: "30 €",
            benefits: ["Vyhladenie chĺpkov", "Optické zahustenie", "Výdrž 6-8 týždňov"],
            targetGroup: "Pre osoby s neposlušným obočím",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "uprava-farbenie-obocia",
            name: "Úprava a farbenie obočia",
            description: "Profesionálne tónovanie a tvarovanie obočia.",
            duration: "30min",
            price: "10 €",
            benefits: ["Presné tvarovanie", "Regenerácia chĺpkov"],
            targetGroup: "Pre pravidelnú údržbu obočia",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "masaze-tvare",
        name: "Masáže tváre",
        description: "Relaxačné a regeneračné masáže tváre a dekoltu.",
        services: [
          {
            id: "masaz-tvare-basic",
            name: "Masáž tváre a dekoltu Basic",
            description: "Komplexná relaxačná masáž pre obnovu pružnosti a rozjasnenie pokožky.",
            duration: "30min",
            price: "27 €",
            benefits: ["Stimulácia prekrvenia", "Uvoľnenie napätia", "Hydratácia"],
            targetGroup: "Pre relaxáciu a regeneráciu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "masaz-tvare-gold",
            name: "Masáž tváre a dekoltu Gold",
            description: "Luxusná regeneračná masáž s peelingom a výživnými maskami.",
            duration: "1h",
            price: "30 €",
            benefits: ["Stimulácia kolagénu", "Zlepšenie pevnosti pleti", "Mladistvý vzhľad"],
            targetGroup: "Pre luxusnú regeneráciu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "parafinove-zabaly",
        name: "Parafínové zábaly",
        description: "Teplo, výživa a hlboká regenerácia pre pokožku rúk, chodidiel aj tváre.",
        services: [
          {
            id: "parafinovy-balik",
            name: "Balík: Ruky + chodidlá s parafínom",
            description: "Komplexné prehriatie, zjemnenie a regenerácia dlaní aj chodidiel.",
            duration: "40min",
            price: "24 €",
            benefits: ["Zmäkčenie pokožky", "Podpora cirkulácie", "Relaxácia"],
            targetGroup: "Pre namáhané končatiny a suchú pokožku",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "parafinova-maska-tvar",
            name: "Parafínová maska na tvár – Teplý lifting",
            description: "Hĺbková hydratácia a jemný liftingový efekt.",
            duration: "30min",
            price: "18 €",
            benefits: ["Hydratácia", "Lifting", "Regenerácia"],
            targetGroup: "Ako doplnok ku kozmetickému ošetreniu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "parafinovy-zabal-chodidla",
            name: "Parafínový zábal na chodidlá",
            description: "Regenerácia, zmäkčenie pokožky a úľava pre namáhané chodidlá.",
            duration: "25min",
            price: "15 €",
            benefits: ["Uvoľnenie napätia", "Zjemnenie pokožky", "Hydratácia"],
            targetGroup: "Pre suché chodidlá",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "parafinovy-zabal-ruky",
            name: "Parafínový zábal na ruky",
            description: "Výživa, hydratácia a okamžité zjemnenie pokožky rúk.",
            duration: "20min",
            price: "12 €",
            benefits: ["Dlhodobá hydratácia", "Zjemnenie pokožky"],
            targetGroup: "Pre suché a namáhané ruky",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  },
  {
    id: "laserove-odstranenie",
    name: "Medicínske laserové odstránenie chĺpkov",
    description: "Najmodernejší vysokoúčinný diodový laser ELISION PRO pre trvalé odstránenie chĺpkov.",
    subcategories: [
      {
        id: "laser-tvar",
        name: "Tvár",
        description: "Laserová epilácia oblastí tváre. Opakovanie 5-6x v intervale 30 dní.",
        services: [
          { id: "laser-hornapera", name: "Horná pera", duration: "15min", price: "29 €", benefits: ["Trvalá redukcia chĺpkov", "Takmer bezbolestné"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-brada", name: "Brada", duration: "30min", price: "20 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-bokombrady", name: "Bokombrady", duration: "30min", price: "20 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-lica", name: "Líca", duration: "30min", price: "20 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-krk", name: "Krk", duration: "30min", price: "30 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-cela-tvar", name: "Celá tvár", duration: "1h", price: "79 €", benefits: ["Kompletné ošetrenie tváre"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk", isPopular: true }
        ]
      },
      {
        id: "laser-nohy",
        name: "Nohy",
        description: "Laserová epilácia nôh. Opakovanie 5-6x v intervale 60-90 dní.",
        services: [
          { id: "laser-cele-nohy", name: "Celé nohy", duration: "1h", price: "179 €", benefits: ["Kompletné ošetrenie nôh"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk", isPopular: true },
          { id: "laser-predkolenie", name: "Predkolenie", duration: "40min", price: "129 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-stehna", name: "Stehná", duration: "30min", price: "100 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-narty", name: "Nárty", duration: "10min", price: "10 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" }
        ]
      },
      {
        id: "laser-telo",
        name: "Telo",
        description: "Laserová epilácia oblastí tela. Opakovanie 5-6x v intervale 45-60 dní.",
        services: [
          { id: "laser-podpazusie", name: "Podpazušie", duration: "15min", price: "49 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk", isPopular: true },
          { id: "laser-bikiny", name: "Bikiny", duration: "30min", price: "69 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-bikiny-intime", name: "Bikiny + intime", duration: "40min", price: "88 €", benefits: ["Kompletné ošetrenie"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-full-intim", name: "Full intim", duration: "45min", price: "60 €", benefits: ["Kompletné ošetrenie"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-cele-brucho", name: "Celé brucho", duration: "30min", price: "70 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-cely-chrbat", name: "Celý chrbát", duration: "1h", price: "175 €", benefits: ["Kompletné ošetrenie"], targetGroup: "Pre mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-hrud", name: "Hruď", duration: "30min", price: "100 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-cele-ruky", name: "Celé ruky", duration: "30min", price: "89 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" }
        ]
      }
    ]
  },
  {
    id: "permanentny-makeup",
    name: "Permanentný make-up",
    description: "Precízna mikropigmentácia pre dlhodobú krásu a symetriu.",
    subcategories: [
      {
        id: "pmu-sluzby",
        name: "PMU služby",
        description: "Profesionálna mikropigmentácia obočia, pier, očných liniek a tieňov.",
        services: [
          { id: "pmu-obocia", name: "PMU Obočia s 2× korekciou v cene", duration: "2h", price: "220 €", benefits: ["Prirodzené zvýraznenie", "Korekcia asymetrie", "Dlhodobý efekt"], targetGroup: "Pre osoby s riedkym obočím", contraindications: ["Aktívny zápal", "Krvné ochorenia", "Tehotenstvo"], bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk", isPopular: true },
          { id: "pmu-pier", name: "PMU pier s 2× korekciou v cene", duration: "2h", price: "od 270 €", benefits: ["Zvýraznenie kontúr", "Oživenie farby", "Dlhodobý efekt"], targetGroup: "Pre osoby s nevýraznými perami", contraindications: ["Aktívny herpes", "Krvné ochorenia"], bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk", isPopular: true },
          { id: "pmu-pier-viac-farieb", name: "PMU pier – viac farieb", duration: "1h 30min", price: "330 €", benefits: ["Ombré efekt", "Viac farieb"], targetGroup: "Pre osoby hľadajúce výraznejší efekt", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "pmu-ocnych-liniek", name: "PMU očných liniek s 2× korekciou v cene", duration: "1h 30min", price: "170 €", benefits: ["Zvýraznenie očí", "Dlhodobý efekt"], targetGroup: "Pre osoby s nevýraznými očami", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "pmu-ocnych-tienov", name: "PMU Očných tieňov s 2× korekciou v cene", duration: "2h", price: "220 €", benefits: ["Efekt tieňov", "Zvýraznenie očí"], targetGroup: "Pre osoby hľadajúce dramatický efekt", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "pmu-korekcia", name: "PMU korekcia", duration: "1h", price: "od 30 €", benefits: ["Obnova farby", "Úprava tvaru"], targetGroup: "Pre klientov s existujúcim PMU", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "pmu-refresh", name: "PMU refresh", duration: "1h 30min", price: "od 110 €", benefits: ["Obnovenie farby", "Predĺženie životnosti"], targetGroup: "Pre klientov s vyblednutým PMU", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "tetovanie-vlasov", name: "Tetovanie vlasov – Hair Tattoo", duration: "1h 30min", price: "od 280 €", benefits: ["Efekt hustejšieho porastu", "Prirodzené tieňovanie"], targetGroup: "Pre osoby s redším vlasmi", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" }
        ]
      }
    ]
  },
  {
    id: "wellness",
    name: "Wellness & SPA",
    description: "Relaxačné rituály a starostlivosť o telo a dušu.",
    subcategories: [
      {
        id: "head-spa",
        name: "Head Spa",
        description: "Luxusný rituál starostlivosti o vlasovú pokožku a relaxáciu mysle.",
        services: [
          {
            id: "head-spa-ritual",
            name: "Head Spa rituál",
            description: "Hĺbkový wellness zážitok pre pokožku hlavy s masážou a aromaterapiou.",
            duration: "1h",
            price: "individuálna",
            benefits: ["Hlboká relaxácia", "Zlepšenie kvality vlasov", "Stimulácia rastu vlasov"],
            targetGroup: "Pre všetkých hľadajúcich relaxáciu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          }
        ]
      },
      {
        id: "pedikura",
        name: "Pedikúra",
        description: "Profesionálna starostlivosť o chodidlá.",
        services: [
          {
            id: "pedikura-klasicka",
            name: "Klasická pedikúra",
            description: "Základná starostlivosť o chodidlá a nechty.",
            duration: "45min",
            price: "individuálna",
            benefits: ["Úprava nechtov", "Odstránenie ztvrdnutej kože", "Hydratácia"],
            targetGroup: "Pre pravidelnú starostlivosť o nohy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  }
];
