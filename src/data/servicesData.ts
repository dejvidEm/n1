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
            id: "neauvia-hydro-deluxe",
            name: "Neauvia Hydro Deluxe – skinbooster s HA a kalciom",
            description: "Intenzívna hydratácia a spevnenie pokožky s vysoko kvalitnou HA a kalciom 25+.",
            duration: "1h",
            price: "190 €",
            benefits: ["Intenzívna hydratácia", "Spevnenie pokožky", "Zlepšenie hustoty a pružnosti"],
            targetGroup: "Pre osoby 25+ hľadajúce hĺbkovú hydratáciu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "pb-serum",
            name: "PB Sérum – enzýmová mezoterapia",
            description: "Bioaktívne enzýmy pre jazvy, strie, zápaly a lokálny tuk 18+.",
            duration: "40min",
            price: "120 €",
            benefits: ["Redukcia jaziev a strií", "Zlepšenie štruktúry pokožky", "Lokálna redukcia tuku"],
            targetGroup: "Pre osoby s jazvami, striami alebo lokálnym tukom",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "injekcna-enzymova",
            name: "Injekčná mezoterapia – enzýmová",
            description: "Modelácia kontúr, redukcia tuku a jaziev 18+. Využíva vysoko aktívne enzýmy neživočíšneho pôvodu.",
            duration: "1h",
            price: "individuálna",
            benefits: ["Redukcia dvojitej brady", "Lokálny tuk", "Vačky pod očami", "Jazvy"],
            targetGroup: "Pre osoby hľadajúce modeláciu kontúr",
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
            price: "90 €",
            benefits: ["Okamžitý lifting", "Bez odlupovania", "Stimulácia kolagénu"],
            targetGroup: "Pre osoby hľadajúce rýchle výsledky bez rekonvalescencie",
            contraindications: ["Aktívne akné a zápal", "Tmavý fototyp", "Čerstvé opálenie", "Tehotenstvo"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "povrchovy-antiaging-peeling",
            name: "Povrchový anti-aging peeling",
            description: "Jemné a šetrné ošetrenie na rozjasnenie, hydratáciu a prevenciu starnutia. Používajú sa nízke koncentrácie AHA kyselín (mandľová, mliečna, citrónová).",
            duration: "30min",
            price: "60 €",
            benefits: ["Rozjasnenie pleti", "Jemná exfoliácia", "Zlepšenie hydratácie", "Zjemnenie vrások"],
            targetGroup: "Pre začiatočníkov, citlivú pleť, prvé prejavy starnutia",
            contraindications: ["Aktívne zápalové akné", "Ekzém alebo rosacea v akútnom štádiu", "Otvorené rany", "Alergia na AHA kyseliny"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "tca-peeling",
            name: "TCA peeling – hĺbková regenerácia",
            description: "Intenzívne omladenie pre pleť so známkami poškodenia, jazvami a pigmentáciami. Využíva kyselinu trichlóroctovú vo vyššej koncentrácii.",
            duration: "40min",
            price: "80 €",
            benefits: ["Hĺbková regenerácia", "Redukcia jaziev po akné", "Zlepšenie hyperpigmentácií", "Vyhladenie textúry"],
            targetGroup: "Pre pleť potrebujúcu hĺbkovú obnovu, fotoaging, jazvy",
            contraindications: ["Aktívne akné a zápal", "Tmavý fototyp", "Čerstvé opálenie", "Kožné infekcie", "Tehotenstvo", "Poruchy hojenia"],
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
            price: "30 €",
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
          },
          {
            id: "guajacuran",
            name: "Guajacuran infúzia",
            description: "Uvoľnenie svalového napätia, stresu a psychická relaxácia.",
            duration: "1h",
            price: "30 €",
            benefits: ["Uvoľnenie svalov", "Zmiernenie úzkosti", "Psychická relaxácia"],
            targetGroup: "Pre osoby s nespavosťou, stresom a migrénami",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "magnezium",
            name: "Magnézium infúzia",
            description: "Podpora nervového systému, zníženie stresu a svalových kŕčov.",
            duration: "1h",
            price: "30 €",
            benefits: ["Uvoľnenie svalov", "Zmiernenie bolestí hlavy", "Zníženie nervového podráždenia"],
            targetGroup: "Pre osoby s migrénami, kŕčmi a únavou",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "degan",
            name: "Degan injekcia",
            description: "Úľava pri nevoľnosti, zvracaní a tráviacich ťažkostiach.",
            duration: "10min",
            price: "10 €",
            benefits: ["Tlmenie nevoľnosti", "Podpora motility žalúdka", "Úľava od plnosti"],
            targetGroup: "Pre osoby s gastrointestinálnymi ťažkosťami",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "uric-acid-balance",
            name: "Uric Acid Balance infúzia",
            description: "Podpora pri zvýšenej hladine kyseliny močovej, bolestiach kĺbov a zápaloch. Podporuje obličky pri vylučovaní kyseliny močovej.",
            duration: "1h",
            price: "85 €",
            benefits: ["Podpora obličiek", "Zníženie zápalov", "Úľava od bolestí kĺbov", "Detoxikácia"],
            targetGroup: "Pre osoby s dnou a zvýšenou kyselinou močovou",
            contraindications: ["Akútne infekcie s vysokou horúčkou", "Závažné ochorenia obličiek"],
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
            price: "54 €",
            benefits: ["Spevnenie", "Lifting", "Obnova pružnosti"],
            targetGroup: "Pre osoby 30+ so stratou elasticity",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "biorepeel",
            name: "BioRePeelCl3 – biologický revitalizačný peeling",
            description: "Komplexná regenerácia bez lúpania, vhodná aj pre citlivú a aknóznu pleť. Inovatívny dvojfázový biostimulačný TCA peeling.",
            duration: "40min",
            price: "90 €",
            benefits: ["Zlepšenie textúry pokožky", "Redukcia akné", "Rozjasnenie pleti", "Stimulácia bunkovej obnovy"],
            targetGroup: "Pre všetky typy pleti vrátane citlivej a aknóznej",
            contraindications: ["Aktívny herpes", "Otvorené rany", "Zápalové ložiská"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "lux-skin-ritual",
            name: "Lux Skin Ritual – kompletná výživná kúra",
            description: "Komplexná regeneračná starostlivosť pre všetky typy pleti. Luxusné ošetrenie kombinujúce enzymatický peeling, sérum, masáž a výživnú masku.",
            duration: "1h 30min",
            price: "65 €",
            benefits: ["Hĺbková regenerácia", "Rozžiarenie pleti", "Výživa", "Relaxácia"],
            targetGroup: "Pre unavenú, dehydratovanú a mdlú pleť",
            contraindications: ["Akútne kožné ochorenia", "Aktívny herpes", "Čerstvé spálenie od slnka"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "neinvazivna-mezoterapia",
            name: "Neinvazívna mezoterapia",
            description: "Revitalizácia, hydratácia a spevnenie bez ihiel pomocou elektroporácie alebo ultrazvuku.",
            duration: "1h",
            price: "25 €",
            benefits: ["Hlboký prienik sér", "Hydratácia", "Zjemnenie jaziev a strií", "Vhodné aj na vlasovú pokožku"],
            targetGroup: "Pre klientov preferujúcich maximálnu šetrnosť",
            contraindications: ["Kardiostimulátor", "Kovové implantáty", "Epilepsia", "Tehotenstvo"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "pdt-terapia",
            name: "PDT terapia svetlom",
            description: "Regenerácia kože pomocou terapeutického LED svetla. Červené svetlo urýchľuje hojenie, modré eliminuje baktérie, zelené zjednocuje tón.",
            duration: "30min",
            price: "15 €",
            benefits: ["Zníženie zápalu", "Upokojenie pokožky", "Eliminácia baktérií", "Podpora tvorby kolagénu"],
            targetGroup: "Pre akné, citlivú pleť, rozšírené póry",
            contraindications: ["Fotosenzitivita", "Lieky spôsobujúce citlivosť na svetlo", "Epilepsia"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "radiofrekvencia",
            name: "Rádiofrekvencia / Tripolárna rádiofrekvencia",
            description: "Neinvazívny lifting a spevnenie kože cez tepelnú remodeláciu. Okamžité stiahnutie kolagénových vlákien s dlhodobým efektom.",
            duration: "1h",
            price: "35 €",
            benefits: ["Okamžité vypnutie pleti", "Stimulácia kolagénu", "Redukcia vrások", "Spevnenie kontúr"],
            targetGroup: "Pre ochabnutú pleť, vrásky, stratu elasticity",
            contraindications: ["Tehotenstvo", "Kovové implantáty", "Kardiostimulátor", "Akútna rosacea"],
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
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
          },
          {
            id: "lash-lift",
            name: "Lash Lift",
            description: "Prirodzené nadvihnutie a tvarovanie vlastných mihalníc bez predlžovania.",
            duration: "1h",
            price: "35 €",
            benefits: ["Prirodzený vzhľad", "Opticky dlhšie riasy", "Výdrž 6-8 týždňov"],
            targetGroup: "Pre milovníčky prirodzeného vzhľadu",
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
        id: "makeup",
        name: "Make-up",
        description: "Profesionálne líčenie pre každý typ udalosti – od prirodzeného denného vzhľadu až po luxusný svadobný glam.",
        services: [
          {
            id: "makeup-denny",
            name: "Denný make-up – Natural Beauty",
            description: "Jemné denné líčenie pre prirodzený vzhľad.",
            duration: "30min",
            price: "22 €",
            benefits: ["Prirodzený vzhľad", "Dlhá výdrž", "Profesionálna kozmetika"],
            targetGroup: "Pre každodenné nosenie",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "makeup-fotenie",
            name: "Líčenie pre fotenie – Photo Ready",
            description: "Make-up s vysokou krycou schopnosťou a fotostabilitou.",
            duration: "1h",
            price: "35 €",
            benefits: ["Fotostabilita", "Vysoká krycia schopnosť", "Profesionálny výsledok"],
            targetGroup: "Pre fotenie a špeciálne príležitosti",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "makeup-skusobny-svadobny",
            name: "Skúšobný svadobný make-up",
            description: "Skúšobné líčenie pre nevesty na overenie finálneho vzhľadu.",
            duration: "1h",
            price: "30 €",
            benefits: ["Overenie vzhľadu", "Konzultácia", "Prispôsobenie štýlu"],
            targetGroup: "Pre nevesty pred svadbou",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "makeup-svadobny",
            name: "Svadobný make-up – Bridal Glow",
            description: "Exkluzívny svadobný styling s dlhou výdržou.",
            duration: "1h 15min",
            price: "45 €",
            benefits: ["Luxusný vzhľad", "Dlhá výdrž", "Odolnosť voči teplu a vlhkosti"],
            targetGroup: "Pre nevesty",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "makeup-vecerny",
            name: "Večerný / príležitostný make-up – Glam Look",
            description: "Večerný glam make-up pre špeciálne príležitosti.",
            duration: "1h",
            price: "30 €",
            benefits: ["Dramatický efekt", "Dlhá výdrž", "Profesionálny výsledok"],
            targetGroup: "Pre večerné udalosti a oslavy",
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
            name: "Masáž tváre a dekoltu",
            description: "Komplexná relaxačná masáž pre obnovu pružnosti a rozjasnenie pokožky.",
            duration: "45min",
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
          { id: "laser-cela-tvar", name: "Celá tvár", duration: "1h", price: "79 €", benefits: ["Kompletné ošetrenie tváre"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk", isPopular: true },
          { id: "laser-obocie", name: "Obočie", duration: "15min", price: "10 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-sija", name: "Šija", duration: "30min", price: "20 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" }
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
          { id: "laser-intim-oblast", name: "Intímna oblasť", duration: "30min", price: "50 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-cele-brucho", name: "Celé brucho", duration: "30min", price: "70 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-pupok", name: "Pupok", duration: "10min", price: "20 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-cely-chrbat", name: "Celý chrbát", duration: "1h", price: "175 €", benefits: ["Kompletné ošetrenie"], targetGroup: "Pre mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-hrud", name: "Hruď", duration: "30min", price: "100 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-okolie-bradaviek", name: "Okolie bradaviek", duration: "15min", price: "20 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-ramena", name: "Ramená", duration: "30min", price: "60 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-cele-ruky", name: "Celé ruky", duration: "30min", price: "89 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-ruky-predlaktie", name: "Ruky – predlaktie", duration: "30min", price: "50 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-hanky", name: "Hánky", duration: "10min", price: "10 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-zadok", name: "Zadok – sedacia časť", duration: "30min", price: "100 €", benefits: ["Trvalá redukcia chĺpkov"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" }
        ]
      },
      {
        id: "laser-kombinovane-balicky",
        name: "Kombinované balíčky – zľava 20%",
        description: "Výhodné kombinované balíčky viacerých zón so zľavou 20% z bežnej ceny.",
        services: [
          { id: "laser-balicek-bikiny-podpazusie", name: "Bikiny + podpazušie", description: "Kombinovaný balíček dvoch najpopulárnejších zón.", duration: "45min", price: "94 € (pôvodne 118 €)", benefits: ["20% zľava", "Trvalá redukcia chĺpkov", "Dve zóny v jednom"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk", isPopular: true },
          { id: "laser-balicek-nohy-bikiny", name: "Celé nohy + bikiny", description: "Kompletné ošetrenie nôh s bikínovou líniou.", duration: "1h 30min", price: "198 € (pôvodne 248 €)", benefits: ["20% zľava", "Kompletné ošetrenie", "Výhodná kombinácia"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-balicek-nohy-bikiny-podpazusie", name: "Celé nohy + bikiny + podpazušie", description: "Najpopulárnejší kompletný balíček pre ženy.", duration: "1h 45min", price: "238 € (pôvodne 297 €)", benefits: ["20% zľava", "Kompletná starostlivosť", "Najvýhodnejšia kombinácia"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk", isPopular: true },
          { id: "laser-balicek-tvar-sija", name: "Celá tvár + šija", description: "Kompletné ošetrenie tváre vrátane šije.", duration: "1h 30min", price: "79 € (pôvodne 99 €)", benefits: ["20% zľava", "Kompletné ošetrenie tváre", "Dlhodobý efekt"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-balicek-hrud-chrbat", name: "Hruď + celý chrbát", description: "Kompletné ošetrenie hornej časti tela pre mužov.", duration: "1h 30min", price: "220 € (pôvodne 275 €)", benefits: ["20% zľava", "Kompletné ošetrenie", "Výhodná kombinácia"], targetGroup: "Pre mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-balicek-bikiny-intim-podpazusie", name: "Bikiny + full intim + podpazušie", description: "Kompletný intímny balíček s podpazuším.", duration: "1h", price: "142 € (pôvodne 178 €)", benefits: ["20% zľava", "Kompletné ošetrenie", "Tri zóny"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "laser-balicek-ruky-podpazusie", name: "Celé ruky + podpazušie", description: "Kompletné ošetrenie rúk vrátane podpazušia.", duration: "45min", price: "110 € (pôvodne 138 €)", benefits: ["20% zľava", "Kompletné ošetrenie rúk", "Výhodná kombinácia"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" }
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
    id: "telove-osetrenia",
    name: "Telové ošetrenia",
    description: "Modelácia postavy, spevnenie pokožky a redukcia celulitídy pomocou prírodných a moderných techník.",
    subcategories: [
      {
        id: "maderoterapia-body",
        name: "Maderoterapia tela",
        description: "Prirodzené formovanie postavy a stimulácia lymfy pomocou drevených nástrojov.",
        services: [
          {
            id: "maderoterapia-nohy",
            name: "Maderoterapia nôh",
            description: "Intenzívna lymfodrenáž a redukcia celulitídy na nohách.",
            duration: "45min",
            price: "35 €",
            benefits: ["Redukcia celulitídy", "Zlepšenie cirkulácie", "Spevnenie pokožky"],
            targetGroup: "Pre osoby s celulitídou a opuchmi",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "maderoterapia-brucho",
            name: "Maderoterapia brucha",
            description: "Modelácia pása a redukcia tukových vankúšikov.",
            duration: "30min",
            price: "30 €",
            benefits: ["Formovanie pása", "Detoxikácia", "Spevnenie"],
            targetGroup: "Pre osoby hľadajúce modeláciu postavy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "maderoterapia-zadok",
            name: "Maderoterapia zadku",
            description: "Lifting a spevnenie zadku pomocou drevených nástrojov.",
            duration: "30min",
            price: "30 €",
            benefits: ["Lifting efekt", "Spevnenie", "Zlepšenie textúry kože"],
            targetGroup: "Pre osoby hľadajúce spevnenie zadku",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "maderoterapia-cele-telo",
            name: "Maderoterapia celého tela",
            description: "Komplexné ošetrenie celého tela pre maximálne výsledky.",
            duration: "1h 30min",
            price: "75 €",
            benefits: ["Celková detoxikácia", "Modelácia postavy", "Redukcia celulitídy"],
            targetGroup: "Pre komplexnú starostlivosť o postavu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "brazilska-maderoterapia",
            name: "Brazílska maderoterapia – formovanie postavy",
            description: "Intenzívna technika zameraná na viditeľnú modeláciu postavy. Kombinuje hlboké drevené valčeky a tvarovacie nástroje pre rozrušenie tukových usadenín.",
            duration: "1h",
            price: "50 €",
            benefits: ["Viditeľná modelácia", "Rozrušenie tukových usadenín", "Aktivácia lymfy", "Spevnenie pokožky"],
            targetGroup: "Pre celulitídu, ochabnutú kožu, formovanie brucha, bokov, zadku a stehien",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "maderoterapia-basic",
            name: "Maderoterapia Basic",
            description: "Komplexná detoxikačná terapia pre aktiváciu lymfatického systému, redukciu celulitídy a celkovú relaxáciu.",
            duration: "1h",
            price: "30 €",
            benefits: ["Aktivácia lymfy", "Odstraňovanie toxínov", "Zlepšenie prekrvenia", "Pocit ľahkých nôh"],
            targetGroup: "Pre detoxikáciu a relaxáciu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "maderoterapia-fit",
            name: "Maderoterapia Fit",
            description: "Moderné spojenie drevenej masáže a aktívneho cvičenia. Striedajú sa masážne techniky so svalovou stimuláciou.",
            duration: "1h",
            price: "30 €",
            benefits: ["Formovanie postavy", "Spaľovanie tukov", "Efekt proti celulitíde", "Svalová stimulácia"],
            targetGroup: "Pre aktívne formovanie postavy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "maderoterapia-gold",
            name: "Maderoterapia Gold – tvár, dekolt, dolné končatiny",
            description: "Luxusná kombinácia jemných drevených nástrojov pre tvár a intenzívnej telesnej maderoterapie.",
            duration: "1h 30min",
            price: "50 €",
            benefits: ["Redukcia opuchov tváre", "Zjemnenie vrások", "Podpora mikrocirkulácie", "Detoxikácia tela"],
            targetGroup: "Pre komplexnú starostlivosť o tvár a telo",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "maderoterapia-platinum",
            name: "Maderoterapia Platinum – tvár, dekolt, celé telo",
            description: "Komplexná celotelová terapia pre maximálnu regeneráciu. Spája estetické účinky na tvár (lifting, rozjasnenie) a hlboké formovanie celého tela.",
            duration: "2h",
            price: "80 €",
            benefits: ["Lifting tváre", "Rozjasnenie", "Anti-aging", "Hlboké formovanie tela"],
            targetGroup: "Pre maximálnu regeneráciu a formovanie",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "depilacia-cukor",
        name: "Depilácia cukrovou pastou",
        description: "Šetrná, prírodná a vysoko účinná metóda odstránenia chĺpkov pre hladkú a zdravú pokožku.",
        services: [
          { id: "cukor-bikiny-brazilian", name: "Bikiny hlboké (Brazilian)", duration: "35min", price: "22 €", benefits: ["Prírodná metóda", "Bez zarastania"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-bikiny-klasicke", name: "Bikiny klasické", duration: "30min", price: "15 €", benefits: ["Šetrné odstránenie"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-hollywood", name: "Intímna oblasť komplet (Hollywood)", duration: "50min", price: "28 €", benefits: ["Kompletné ošetrenie"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk", isPopular: true },
          { id: "cukor-nohy-cele", name: "Nohy celé", duration: "45min", price: "26 €", benefits: ["Dlhotrvajúci efekt"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-nohy-kolena", name: "Nohy po kolená", duration: "30min", price: "18 €", benefits: ["Hladká pokožka"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-stehna", name: "Stehná", duration: "30min", price: "16 €", benefits: ["Jemný peeling efekt"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-podpazusie", name: "Podpazušie", duration: "15min", price: "10 €", benefits: ["Rýchle ošetrenie"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-ruky-cele", name: "Ruky celé", duration: "30min", price: "18 €", benefits: ["Hladké ruky"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-ruky-lakte", name: "Ruky po lakte", duration: "20min", price: "12 €", benefits: ["Šetrná depilácia"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-chrbat", name: "Chrbát", duration: "40min", price: "25 €", benefits: ["Hladká pokožka"], targetGroup: "Pre mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-brucho", name: "Brucho celé", duration: "20min", price: "12 €", benefits: ["Šetrné odstránenie"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-pas-bruska", name: "Pás bruška", duration: "10min", price: "6 €", benefits: ["Rýchle ošetrenie"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-zadok", name: "Zadok", duration: "20min", price: "10 €", benefits: ["Hladká pokožka"], targetGroup: "Pre ženy aj mužov", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-horna-pera", name: "Horná pera", duration: "10min", price: "5 €", benefits: ["Rýchle ošetrenie"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-brada", name: "Brada", duration: "10min", price: "6 €", benefits: ["Presné odstránenie"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "cukor-tvar", name: "Lícne partie / celá tvár", duration: "15min", price: "10 €", benefits: ["Jemná pokožka"], targetGroup: "Pre ženy", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" }
        ]
      }
    ]
  },
  {
    id: "vlasy",
    name: "Vlasová starostlivosť",
    description: "Trichológia, Head Spa a mezoterapia vlasovej pokožky pre zdravé a silné vlasy.",
    subcategories: [
      {
        id: "head-spa",
        name: "Head Spa",
        description: "Luxusný rituál starostlivosti o vlasovú pokožku a relaxáciu mysle.",
        services: [
          {
            id: "head-spa-basic",
            name: "Head Spa Basic",
            description: "Relaxačná masáž pokožky hlavy s aromaterapiou.",
            duration: "30min",
            price: "25 €",
            benefits: ["Relaxácia", "Zlepšenie cirkulácie", "Uvoľnenie napätia"],
            targetGroup: "Pre všetkých hľadajúcich relaxáciu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "head-spa-premium",
            name: "Head Spa Premium",
            description: "Hĺbkový wellness zážitok pre pokožku hlavy s masážou, peelingom a výživnou maskou.",
            duration: "1h",
            price: "45 €",
            benefits: ["Hlboká relaxácia", "Zlepšenie kvality vlasov", "Stimulácia rastu vlasov"],
            targetGroup: "Pre komplexnú starostlivosť o vlasy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          }
        ]
      },
      {
        id: "vlasova-terapia",
        name: "Vlasová terapia",
        description: "Profesionálna starostlivosť pri vypadávaní vlasov a problémoch s vlasovou pokožkou.",
        services: [
          {
            id: "mezoterapia-vlasy",
            name: "Mezoterapia vlasovej pokožky",
            description: "Stimulácia rastu vlasov pomocou mikroinjekcií vitamínov a rastových faktorov.",
            duration: "1h",
            price: "85 €",
            benefits: ["Aktivácia vlasových folikulov", "Posilnenie korienkov", "Podpora rastu"],
            targetGroup: "Pre osoby s vypadávaním vlasov",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "exozomy-vlasy",
            name: "Exozómy pre vlasy",
            description: "Najmodernejšia regenerácia vlasových folikulov pomocou exozómov.",
            duration: "1h",
            price: "od 200 €",
            benefits: ["Bunková regenerácia", "Zastavenie vypadávania", "Podpora hustoty vlasov"],
            targetGroup: "Pre osoby s pokročilým vypadávaním vlasov",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  },
  {
    id: "pedikura",
    name: "Pedikúra",
    description: "Profesionálna starostlivosť o zdravé a krásne chodidlá.",
    subcategories: [
      {
        id: "pedikura-sluzby",
        name: "Pedikúra",
        description: "Komplexná odborná starostlivosť o chodidlá pre zdravie a krásu nôh.",
        services: [
          {
            id: "mokra-pedikura",
            name: "Mokrá pedikúra",
            description: "Komplexná pedikúra s kúpeľom, odstránením zrohovatenej kože, úpravou nechtov a hydratačnou masážou.",
            duration: "1h",
            price: "od 22 €",
            benefits: ["Odstránenie zrohovatenej kože", "Úprava nechtov", "Hydratácia"],
            targetGroup: "Pre pravidelnú starostlivosť o nohy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          },
          {
            id: "mokra-pedikura-lak",
            name: "Mokrá pedikúra s lakovaním",
            description: "Kompletné ošetrenie chodidiel doplnené o lakovanie podľa výberu.",
            duration: "1h 15min",
            price: "25 €",
            benefits: ["Komplexné ošetrenie", "Estetický vzhľad"],
            targetGroup: "Pre dokonale upravené nohy",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "wellness-pedikura",
            name: "Wellness pedikúra",
            description: "Luxusná procedúra spojená s peelingom, parafínovým zábalom, masážou a lakovaním.",
            duration: "2h",
            price: "32 €",
            benefits: ["Luxusný zážitok", "Hlboká regenerácia", "Uvoľnenie"],
            targetGroup: "Pre dokonale jemné a oddýchnuté chodidlá",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          { id: "pedikura-masaz", name: "Masáž chodidiel – relaxačná", duration: "15min", price: "8 €", benefits: ["Uvoľnenie napätia", "Zlepšenie cirkulácie"], targetGroup: "Ako doplnok k pedikúre", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "pedikura-parafin", name: "Parafínový zábal chodidiel", duration: "30min", price: "7 €", benefits: ["Hlboká hydratácia", "Regenerácia"], targetGroup: "Pre suché chodidlá", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "pedikura-peeling", name: "Peeling chodidiel", duration: "30min", price: "5 €", benefits: ["Zjemnenie pokožky", "Revitalizácia"], targetGroup: "Pre zhrubnutú pokožku", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "pedikura-kurie-oko", name: "Odstránenie kurieho oka / otlaku", duration: "15min", price: "5 €", benefits: ["Úľava od bolesti", "Profesionálne ošetrenie"], targetGroup: "Pre bolestivé ložiská", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "pedikura-zarasteny-necht", name: "Ošetrenie zarasteného nechtu", duration: "20min", price: "7 €", benefits: ["Uvoľnenie", "Prevencia zápalu"], targetGroup: "Pri zarastených nechtoch", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "pedikura-mykoza", name: "Ošetrenie mykózy nechtu", duration: "15min", price: "4 €", benefits: ["Dezinfekcia", "Liečba"], targetGroup: "Pri plesňových infekciách", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "pedikura-lakovanie", name: "Lakovanie nechtov – klasický lak", duration: "10min", price: "5 €", benefits: ["Estetický vzhľad"], targetGroup: "Pre upravené nechty", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" },
          { id: "pedikura-strihanie", name: "Strihanie nechtov (bez pedikúry)", duration: "10min", price: "6 €", benefits: ["Rýchla úprava"], targetGroup: "Pre pravidelnú údržbu", bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" }
        ]
      }
    ]
  },
  {
    id: "wellness",
    name: "Wellness procedúry",
    description: "Relaxačné rituály a procedúry pre telo aj dušu.",
    subcategories: [
      {
        id: "maderoterapia-tvar",
        name: "Maderoterapia tváre",
        description: "Neinvazívne spevnenie a detoxikácia tváre pomocou drevených nástrojov.",
        services: [
          {
            id: "maderoterapia-face-basic",
            name: "Maderoterapia face Basic",
            description: "Neinvazívne spevnenie, detoxikácia a omladenie tváre pomocou drevených nástrojov.",
            duration: "25min",
            price: "20 €",
            benefits: ["Stimulácia lymfy", "Spevnenie kontúr", "Relaxácia"],
            targetGroup: "Pre osveženie a spevnenie tváre",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "maderoterapia-face-gold",
            name: "Maderoterapia face Gold",
            description: "Luxusná detoxikačná masáž s peelingom a výživnou starostlivosťou.",
            duration: "1h",
            price: "30 €",
            benefits: ["Zjemnenie vrások", "Spevnenie pokožky", "Luxusný zážitok"],
            targetGroup: "Pre hĺbkovú revitalizáciu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk",
            isPopular: true
          }
        ]
      },
      {
        id: "masaze",
        name: "Masáže",
        description: "Relaxačné a regeneračné masáže pre telo a tvár.",
        services: [
          {
            id: "masaz-tvare-klasicka",
            name: "Klasická masáž tváre",
            description: "Jemná stimulácia pre sviežu, uvoľnenú a žiarivú pleť.",
            duration: "30min",
            price: "17 €",
            benefits: ["Zlepšenie prekrvenia", "Uvoľnenie napätia", "Rozjasnenie pleti"],
            targetGroup: "Pre relaxáciu a regeneráciu",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "masaz-ruk",
            name: "Masáž rúk",
            description: "Uvoľnenie, prekrvenie a regenerácia namáhaných rúk.",
            duration: "20min",
            price: "15 €",
            benefits: ["Uvoľnenie svalov", "Zlepšenie cirkulácie"],
            targetGroup: "Pre namáhané ruky",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  },
  {
    id: "kurzy",
    name: "Kurzy s medzinárodným certifikátom",
    description: "Profesionálne vzdelávanie v oblasti estetiky a kozmetiky s medzinárodne uznávanými certifikátmi.",
    subcategories: [
      {
        id: "kurzy-pmu",
        name: "Kurzy permanentného make-upu",
        description: "Komplexné vzdelávanie v technikách mikropigmentácie.",
        services: [
          {
            id: "kurz-pmu-zakladny",
            name: "Základný kurz PMU",
            description: "Úvodný kurz permanentného make-upu pre začiatočníkov.",
            duration: "individuálne",
            price: "individuálna",
            benefits: ["Medzinárodný certifikát", "Praktické skúsenosti", "Materiály v cene"],
            targetGroup: "Pre záujemcov o kariéru v PMU",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          },
          {
            id: "kurz-pmu-pokrocily",
            name: "Pokročilý kurz PMU",
            description: "Nadstavbový kurz pre skúsených technikov PMU.",
            duration: "individuálne",
            price: "individuálna",
            benefits: ["Pokročilé techniky", "Individuálny prístup", "Certifikát"],
            targetGroup: "Pre skúsených technikov PMU",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      },
      {
        id: "kurzy-kozmetika",
        name: "Kurzy kozmetiky",
        description: "Profesionálne kozmetické vzdelávanie.",
        services: [
          {
            id: "kurz-mihalnice",
            name: "Kurz predlžovania mihalníc",
            description: "Komplexný kurz techník predlžovania mihalníc.",
            duration: "individuálne",
            price: "individuálna",
            benefits: ["Praktický tréning", "Certifikát", "Štartovacie materiály"],
            targetGroup: "Pre záujemcov o lash styling",
            bookioUrl: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk"
          }
        ]
      }
    ]
  }
];
