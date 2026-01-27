import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, Check, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { urlFor } from "@/lib/sanityImage";

import { fetchCategoryPage, type ServiceCategoryPage } from "@/services/servicesApi";
import { categoryIconMap, type CategoryIconKey } from "@/components/icons/categoryIconMap";

const ServiceCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>(); // categoryId = slug
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });
  const detailSectionRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<ServiceCategoryPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  // Hardcoded category data mapping with unique subcategories for each category
  const hardcodedCategories: Record<string, ServiceCategoryPage> = {
    "esteticka-medicina": {
      _id: "hardcoded-cat-1",
      title: "Estetická medicína",
      slug: "esteticka-medicina",
      description: "Moderné estetické procedúry pre omladenie a skrášlenie",
      icon: "aestheticMedicine",
      subcategories: [
        {
          _id: "aesthetic-1",
          title: "Injekčné výplne",
          slug: "injekcne-vyplne",
          description: "Dermálne výplne a anti-aging procedúry",
          services: [],
        },
        {
          _id: "aesthetic-2",
          title: "Biorevitalizácia",
          slug: "biorevitalizacia",
          description: "Omladenie pokožky kyselinou hyalurónovou",
          services: [],
        },
        {
          _id: "aesthetic-3",
          title: "Mezoterapia",
          slug: "mezoterapia",
          description: "Hĺbková výživa pokožky",
          services: [],
        },
        {
          _id: "aesthetic-4",
          title: "Botox ošetrenia",
          slug: "botox-osetrenia",
          description: "Redukcia vrások a mimických línií",
          services: [],
        },
        {
          _id: "aesthetic-5",
          title: "Anti-aging procedúry",
          slug: "anti-aging-procedury",
          description: "Komplexné omladzujúce ošetrenia",
          services: [],
        },
        {
          _id: "aesthetic-6",
          title: "Kyselina hyalurónová",
          slug: "kyselina-hyaluronova",
          description: "Výplne a omladenie pokožky",
          services: [],
        },
      ],
    },
    "kozmetologia": {
      _id: "hardcoded-cat-2",
      title: "Kozmetológia",
      slug: "kozmetologia",
      description: "Profesionálna starostlivosť o pokožku",
      icon: "cosmetology",
      subcategories: [
        {
          _id: "cosmetic-1",
          title: "Ošetrenie tváre",
          slug: "osetrenie-tvare",
          description: "Komplexná starostlivosť o pokožku tváre",
          services: [],
        },
        {
          _id: "cosmetic-2",
          title: "Ošetrenie akné",
          slug: "osetrenie-akne",
          description: "Profesionálne riešenie problémov s akné",
          services: [],
        },
        {
          _id: "cosmetic-3",
          title: "Čistenie pórov",
          slug: "cistenie-porov",
          description: "Hĺbkové čistenie a detoxikácia pokožky",
          services: [],
        },
        {
          _id: "cosmetic-4",
          title: "Hydratácia pokožky",
          slug: "hydratacia-pokožky",
          description: "Intenzívna výživa a hydratácia",
          services: [],
        },
        {
          _id: "cosmetic-5",
          title: "Bieliace ošetrenia",
          slug: "bieliace-osetrenia",
          description: "Odstránenie pigmentových škvŕn",
          services: [],
        },
        {
          _id: "cosmetic-6",
          title: "Ošetrenie očí",
          slug: "osetrenie-oci",
          description: "Špeciálna starostlivosť o okolí očí",
          services: [],
        },
      ],
    },
    "laserove-osetrenia": {
      _id: "hardcoded-cat-3",
      title: "Laserové ošetrenia",
      slug: "laserove-osetrenia",
      description: "Moderné laserové technológie",
      icon: "laser",
      subcategories: [
        {
          _id: "laser-1",
          title: "Laserové odstránenie chlpov",
          slug: "laserove-odstranenie-chlpov",
          description: "Trvalé odstránenie nechtovaných chlpov",
          services: [],
        },
        {
          _id: "laser-2",
          title: "Laserové ošetrenie pokožky",
          slug: "laserove-osetrenie-pokožky",
          description: "Moderné laserové technológie pre pokožku",
          services: [],
        },
        {
          _id: "laser-3",
          title: "Laserová redukcia vrások",
          slug: "laserova-redukcia-vrasok",
          description: "Omladenie pokožky laserom",
          services: [],
        },
        {
          _id: "laser-4",
          title: "Laserové odstránenie tetovania",
          slug: "laserove-odstranenie-tetovania",
          description: "Bezpečné odstránenie tetovania",
          services: [],
        },
        {
          _id: "laser-5",
          title: "Fotorejuvenácia",
          slug: "fotorejuvenacia",
          description: "Omladenie pomocou svetelnej energie",
          services: [],
        },
        {
          _id: "laser-6",
          title: "Laserové ošetrenie akné",
          slug: "laserove-osetrenie-akne",
          description: "Efektívne riešenie akné",
          services: [],
        },
      ],
    },
    "permanentny-makeup": {
      _id: "hardcoded-cat-4",
      title: "Permanentný make-up",
      slug: "permanentny-makeup",
      description: "Trvalé líčenie",
      icon: "permanentMakeup",
      subcategories: [
        {
          _id: "pmu-1",
          title: "Permanentné obočie",
          slug: "permanentne-obocie",
          description: "Trvalé líčenie obočia",
          services: [],
        },
        {
          _id: "pmu-2",
          title: "Permanentné pery",
          slug: "permanentne-pery",
          description: "Kontúrovanie a farbenie pery",
          services: [],
        },
        {
          _id: "pmu-3",
          title: "Permanentná linka očí",
          slug: "permanentna-linka-oci",
          description: "Trvalá linka na očiach",
          services: [],
        },
        {
          _id: "pmu-4",
          title: "Korekcia permanentného make-upu",
          slug: "korekcia-permanentneho-make-upu",
          description: "Oprava a korekcia existujúceho líčenia",
          services: [],
        },
        {
          _id: "pmu-5",
          title: "3D obočie",
          slug: "3d-obocie",
          description: "Trojrozmerný efekt obočia",
          services: [],
        },
      ],
    },
    "telesne-osetrenia": {
      _id: "hardcoded-cat-5",
      title: "Telesné ošetrenia",
      slug: "telesne-osetrenia",
      description: "Wellness & relax",
      icon: "bodyTreatment",
      subcategories: [
        {
          _id: "body-1",
          title: "Maderoterapia",
          slug: "maderoterapia",
          description: "Masážne techniky pre redukciu celulitídy",
          services: [],
        },
        {
          _id: "body-2",
          title: "Lymfodrenáž",
          slug: "lymfodrenaz",
          description: "Odvodnenie a detoxikácia organizmu",
          services: [],
        },
        {
          _id: "body-3",
          title: "Masáže tela",
          slug: "masaze-tela",
          description: "Relaxačné a liečebné masáže",
          services: [],
        },
        {
          _id: "body-4",
          title: "Ošetrenie celulitídy",
          slug: "osetrenie-celulitidy",
          description: "Komplexné riešenie celulitídy",
          services: [],
        },
        {
          _id: "body-5",
          title: "Zábaly tela",
          slug: "zabaly-tela",
          description: "Výživné a detoxikačné zábaly",
          services: [],
        },
        {
          _id: "body-6",
          title: "Peeling tela",
          slug: "peeling-tela",
          description: "Hĺbkové čistenie a omladenie pokožky",
          services: [],
        },
      ],
    },
    "starostlivost-o-vlasy": {
      _id: "hardcoded-cat-6",
      title: "Starostlivosť o vlasy",
      slug: "starostlivost-o-vlasy",
      description: "Profesionálna péče",
      icon: "hairCare",
      subcategories: [
        {
          _id: "hair-1",
          title: "Farbenie vlasov",
          slug: "farbenie-vlasov",
          description: "Profesionálne farbenie a melírovanie",
          services: [],
        },
        {
          _id: "hair-2",
          title: "Strihanie vlasov",
          slug: "strihanie-vlasov",
          description: "Moderné strihy a úprava",
          services: [],
        },
        {
          _id: "hair-3",
          title: "Ošetrenie vlasov",
          slug: "osetrenie-vlasov",
          description: "Výživa a regenerácia vlasov",
          services: [],
        },
        {
          _id: "hair-4",
          title: "Keratinové narovnanie",
          slug: "keratinove-narovnanie",
          description: "Narovnanie a vyhladenie vlasov",
          services: [],
        },
        {
          _id: "hair-5",
          title: "Laminovanie vlasov",
          slug: "laminovanie-vlasov",
          description: "Výživa a lesk vlasov",
          services: [],
        },
        {
          _id: "hair-6",
          title: "Účesy a styling",
          slug: "ucesy-a-styling",
          description: "Svadobné a spoločenské účesy",
          services: [],
        },
      ],
    },
    "pedicura": {
      _id: "hardcoded-cat-7",
      title: "Pedicúra",
      slug: "pedicura",
      description: "Péče o nohy",
      icon: "pedicure",
      subcategories: [
        {
          _id: "pedicure-1",
          title: "Klasická pedicúra",
          slug: "klasicka-pedicura",
          description: "Komplexná starostlivosť o nohy",
          services: [],
        },
        {
          _id: "pedicure-2",
          title: "Laková pedicúra",
          slug: "lakova-pedicura",
          description: "Pedicúra s lakovým náterom",
          services: [],
        },
        {
          _id: "pedicure-3",
          title: "Gelová pedicúra",
          slug: "gelova-pedicura",
          description: "Trvalý gelový náter na nohách",
          services: [],
        },
        {
          _id: "pedicure-4",
          title: "Lekárska pedicúra",
          slug: "lekarska-pedicura",
          description: "Špecializovaná starostlivosť o nohy",
          services: [],
        },
        {
          _id: "pedicure-5",
          title: "Parafínový zábal",
          slug: "parafinovy-zabal",
          description: "Výživa a hydratácia chodidiel",
          services: [],
        },
      ],
    },
    "wellness": {
      _id: "hardcoded-cat-8",
      title: "Wellness",
      slug: "wellness",
      description: "Relax & regenerácia",
      icon: "wellness",
      subcategories: [
        {
          _id: "wellness-1",
          title: "Relaxačné masáže",
          slug: "relaxacne-masaze",
          description: "Uvoľnenie a relaxácia",
          services: [],
        },
        {
          _id: "wellness-2",
          title: "Liečebné masáže",
          slug: "liecebne-masaze",
          description: "Terapeutické masážne techniky",
          services: [],
        },
        {
          _id: "wellness-3",
          title: "Aromaterapia",
          slug: "aromaterapia",
          description: "Liečba pomocou esenciálnych olejov",
          services: [],
        },
        {
          _id: "wellness-4",
          title: "Sauna a parná kúpeľňa",
          slug: "sauna-a-parna-kupelna",
          description: "Detoxikácia a relaxácia",
          services: [],
        },
        {
          _id: "wellness-5",
          title: "Wellness balíčky",
          slug: "wellness-balicky",
          description: "Komplexné wellness programy",
          services: [],
        },
        {
          _id: "wellness-6",
          title: "Meditácia a jóga",
          slug: "meditacia-a-joga",
          description: "Duchovná a telesná regenerácia",
          services: [],
        },
      ],
    },
  };

  useEffect(() => {
    if (!categoryId) return;
    let cancelled = false;
    setLoading(true);

    fetchCategoryPage(categoryId)
      .then((data) => {
        if (cancelled) return;

        console.log("Sanity data received:", data);
        
        // Only use hardcoded data if Sanity returns null/undefined
        if (data) {
          console.log("Using Sanity data");
          setCategory(data);
        } else {
          console.log("No Sanity data, using hardcoded fallback");
          const categoryData = hardcodedCategories[categoryId];
          setCategory(categoryData);
        }
      })
      .catch((err) => {
        console.error("Failed to load category page:", err);
        // On error, try to use hardcoded data
        const hardcodedData = hardcodedCategories[categoryId];
        if (!cancelled && hardcodedData) {
          console.log("Error occurred, using hardcoded fallback");
          setCategory(hardcodedData);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [categoryId]);

  // Scroll to detail section when subcategory is selected
  useEffect(() => {
    if (selectedSubcategory && detailSectionRef.current) {
      setTimeout(() => {
        detailSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [selectedSubcategory]);

  if (loading) {
    return (
      <Layout>
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-6 text-center">Načítavam…</div>
        </section>
      </Layout>
    );
  }

  if (!category) {
    return (
      <Layout>
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-display font-medium mb-6">Kategória nenájdená</h1>
            <Link to="/sluzby" className="text-accent hover:text-accent/80">
              ← Späť na služby
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const Icon = categoryIconMap[(category.icon as CategoryIconKey)] ?? categoryIconMap.cosmetology;
  const getIcon = (key: string) => {
    const Icon = categoryIconMap[key as CategoryIconKey];
    return Icon ?? categoryIconMap.cosmetology;
  };

  // Get selected subcategory details
  const selectedSubcategoryData = selectedSubcategory
    ? category.subcategories.find((s) => s._id === selectedSubcategory)
    : null;

  // Get image URL from Sanity or use placeholder
  const getImageUrl = (image: any) => {
    if (image?.asset) {
      return urlFor(image).width(800).height(800).quality(80).url();
    }
    return "/placeholder.svg";
  };

  // Default features and tags if not in Sanity
  const defaultFeatures = [
    "Profesionálna starostlivosť",
    "Individuálny prístup",
    "Moderné technológie",
    "Viditeľné výsledky",
  ];
  const defaultTags = ["Profesionálne", "Kvalita", "Starostlivosť"];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              to="/sluzby"
              className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Späť na služby
            </Link>

            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-accent">
              <Icon className="w-full h-full" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">{category.title}</h1>
            <div className="w-16 h-px bg-accent mx-auto mb-6"></div>

            {category.description && <p className="text-lg text-muted-foreground leading-relaxed">{category.description}</p>}
          </div>
        </div>
      </section>

      {/* Category Content - Show subcategories grid OR category detail based on hasSubcategories */}
      {category.hasSubcategories === false ? (
        /* Category Detail View (no subcategories) */
        <section ref={detailSectionRef} className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Content: Image left, Info right */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image on left */}
                <div className="order-2 md:order-1">
                  <div className="aspect-square bg-secondary/30 rounded-lg overflow-hidden">
                    <img
                      src={getImageUrl(category.image)}
                      alt={category.image?.alt || category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info on right */}
                <div className="order-1 md:order-2 space-y-6">
                  {/* Features with check marks */}
                  {(category.features && category.features.length > 0) || defaultFeatures.length > 0 ? (
                    <div>
                      <h3 className="text-xl font-display font-medium mb-4 uppercase tracking-wide">
                        Výhody ošetrenia
                      </h3>
                      <ul className="space-y-3">
                        {(category.features && category.features.length > 0
                          ? category.features
                          : defaultFeatures
                        ).map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {/* Tags/Badges */}
                  {(category.tags && category.tags.length > 0) || defaultTags.length > 0 ? (
                    <div>
                      <h3 className="text-xl font-display font-medium mb-4 uppercase tracking-wide">
                        Kategórie
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {(category.tags && category.tags.length > 0
                          ? category.tags
                          : defaultTags
                        ).map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-sm px-3 py-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Subcategories Grid (has subcategories) */
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-6">
            {category.subcategories.length === 0 ? (
              <div className="max-w-2xl mx-auto text-center py-12">
                <p className="text-muted-foreground">V tejto kategórii momentálne nie sú žiadne podkategórie.</p>
              </div>
            ) : (
              <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
                {loading && (
                  <div className="col-span-2 md:col-span-4 text-center text-muted-foreground py-10">
                    Načítavam služby…
                  </div>
                )}

                {!loading &&
                  category.subcategories.map((subcategory, index) => {
                    // Use parent category icon for subcategories
                    const SubcategoryIcon = getIcon(category.icon);
                    const isSelected = selectedSubcategory === subcategory._id;

                    const gridItemContent = (
                      <>
                        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                          <SubcategoryIcon className="w-full h-full" />
                        </div>

                        <h3 className="text-black font-display text-sm md:text-base font-medium tracking-wide uppercase mb-2 group-hover:text-accent transition-colors">
                          {subcategory.title}
                        </h3>

                        {subcategory.description && (
                          <p className="text-xs uppercase tracking-[0.2em] text-black line-clamp-2">
                            {subcategory.description}
                          </p>
                        )}

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-px bg-accent group-hover:w-12 transition-all duration-300"></div>
                      </>
                    );

                    return (
                      <button
                        key={subcategory._id}
                        onClick={() => setSelectedSubcategory(isSelected ? null : subcategory._id)}
                        className={`group relative p-8 md:p-10 text-center border-b border-r border-border/50 last:border-r-0 [&:nth-child(4n)]:border-r-0 [&:nth-child(n+5)]:md:border-b-0 [&:nth-child(n+7)]:border-b-0 hover:bg-secondary/20 transition-all duration-500 ${
                          isSelected ? "bg-secondary/30" : ""
                        }`}
                        style={{
                          opacity: gridVisible ? 1 : 1,
                          transform: gridVisible ? "translateY(0)" : "translateY(20px)",
                          transition: `all 0.5s ease-out ${index * 75}ms`,
                        }}
                      >
                        {gridItemContent}
                      </button>
                    );
                  })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Selected Subcategory Detail */}
      {selectedSubcategoryData && (
        <section ref={detailSectionRef} className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-4">
                  {selectedSubcategoryData.title}
                </h2>
                {selectedSubcategoryData.description && (
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {selectedSubcategoryData.description}
                  </p>
                )}
              </div>

              {/* Content: Image left, Info right */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image on left */}
                <div className="order-2 md:order-1">
                  <div className="aspect-square bg-secondary/30 rounded-lg overflow-hidden">
                    <img
                      src={getImageUrl(selectedSubcategoryData.image)}
                      alt={selectedSubcategoryData.image?.alt || selectedSubcategoryData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info on right */}
                <div className="order-1 md:order-2 space-y-6">
                  {/* Detail Description */}
                  {selectedSubcategoryData.detailDescription && (
                    <div>
                      <h3 className="text-xl font-display font-medium mb-4 uppercase tracking-wide">
                        Popis
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedSubcategoryData.detailDescription}
                      </p>
                    </div>
                  )}

                  {/* Features with check marks */}
                  {(selectedSubcategoryData.features && selectedSubcategoryData.features.length > 0) || defaultFeatures.length > 0 ? (
                    <div>
                      <h3 className="text-xl font-display font-medium mb-4 uppercase tracking-wide">
                        Výhody ošetrenia
                      </h3>
                      <ul className="space-y-3">
                        {(selectedSubcategoryData.features && selectedSubcategoryData.features.length > 0
                          ? selectedSubcategoryData.features
                          : defaultFeatures
                        ).map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {/* Contraindications */}
                  {selectedSubcategoryData.contraindications && selectedSubcategoryData.contraindications.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        <h3 className="text-xl font-display font-medium uppercase tracking-wide">
                          Kontraindikácie
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {selectedSubcategoryData.contraindications.map((contraindication, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-amber-500 mt-0.5 flex-shrink-0">•</span>
                            <span className="text-muted-foreground">{contraindication}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags/Badges */}
                  {(selectedSubcategoryData.tags && selectedSubcategoryData.tags.length > 0) || defaultTags.length > 0 ? (
                    <div>
                      <h3 className="text-xl font-display font-medium mb-4 uppercase tracking-wide">
                        Kategórie
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {(selectedSubcategoryData.tags && selectedSubcategoryData.tags.length > 0
                          ? selectedSubcategoryData.tags
                          : defaultTags
                        ).map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-sm px-3 py-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {/* Services count or additional info */}
                  {selectedSubcategoryData.services.length > 0 && (
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        Dostupné služby: {selectedSubcategoryData.services.length}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Infolinka</p>
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-6">Máte otázky? Kontaktujte nás</h2>
          <a href="tel:+421918862508" className="text-xl font-display text-accent hover:text-accent/80 transition-colors">
            0918 862 508
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceCategory;
