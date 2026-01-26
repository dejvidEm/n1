import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { NewsSaleSection } from "@/components/NewsSaleSection";

import { fetchServiceCategories, type ServiceCategoryCard } from "@/services/servicesApi";
import { categoryIconMap, type CategoryIconKey } from "@/components/icons/categoryIconMap";

const Services = () => {
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  const [categories, setCategories] = useState<ServiceCategoryCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchServiceCategories()
      .then((data) => {
        if (!cancelled) {
          console.log("Services page - Sanity data received:", data);
          
          // Use Sanity data if available, otherwise use hardcoded fallback
          if (data && data.length > 0) {
            console.log("Using Sanity categories:", data.length);
            setCategories(data);
          } else {
            console.log("No Sanity data, using hardcoded fallback");
            // Hardcoded fallback
            const hardcodedCategories: ServiceCategoryCard[] = [
              {
                _id: "hardcoded-cat-1",
                title: "Estetická medicína",
                subtitle: "Anti-aging",
                slug: "esteticka-medicina",
                icon: "aestheticMedicine",
              },
              {
                _id: "hardcoded-cat-2",
                title: "Kozmetológia",
                subtitle: "Péče o pleť",
                slug: "kozmetologia",
                icon: "cosmetology",
              },
              {
                _id: "hardcoded-cat-3",
                title: "Laserové ošetrenia",
                subtitle: "Moderné technológie",
                slug: "laserove-osetrenia",
                icon: "laser",
              },
              {
                _id: "hardcoded-cat-4",
                title: "Permanentný make-up",
                subtitle: "Trvalé líčenie",
                slug: "permanentny-makeup",
                icon: "permanentMakeup",
              },
              {
                _id: "hardcoded-cat-5",
                title: "Telesné ošetrenia",
                subtitle: "Wellness & relax",
                slug: "telesne-osetrenia",
                icon: "bodyTreatment",
              },
              {
                _id: "hardcoded-cat-6",
                title: "Starostlivosť o vlasy",
                subtitle: "Profesionálna péče",
                slug: "starostlivost-o-vlasy",
                icon: "hairCare",
              },
              {
                _id: "hardcoded-cat-7",
                title: "Pedicúra",
                subtitle: "Péče o nohy",
                slug: "pedicura",
                icon: "pedicure",
              },
              {
                _id: "hardcoded-cat-8",
                title: "Wellness",
                subtitle: "Relax & regenerácia",
                slug: "wellness",
                icon: "wellness",
              },
            ];
            setCategories(hardcodedCategories);
          }
        }
      })
      .catch((err) => console.error("Failed to load categories:", err))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const getIcon = (key: string) => {
    const Icon = categoryIconMap[key as CategoryIconKey];
    return Icon ?? categoryIconMap.cosmetology;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent/60"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-accent/60"></div>
              <div className="w-8 h-px bg-accent/60"></div>
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Výber procedúr</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">Naše služby</h1>
            <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Komplexná starostlivosť o vašu krásu a well-being s najmodernejšími technológiami
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
            {loading && (
              <div className="col-span-2 md:col-span-4 text-center text-muted-foreground py-10">
                Načítavam služby…
              </div>
            )}

            {!loading &&
              categories.map((category, index) => {
                const Icon = getIcon(category.icon);
                return (
                  <Link
                    key={category._id}
                    to={`/sluzby/${category.slug}`}
                    className="group relative p-8 md:p-10 text-center border-b border-r border-border/50 last:border-r-0 [&:nth-child(4n)]:border-r-0 [&:nth-child(n+5)]:md:border-b-0 [&:nth-child(n+7)]:border-b-0 hover:bg-secondary/20 transition-all duration-500"
                    style={{
                      opacity: gridVisible ? 1 : 0,
                      transform: gridVisible ? "translateY(0)" : "translateY(20px)",
                      transition: `all 0.5s ease-out ${index * 75}ms`,
                    }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-full h-full" />
                    </div>

                    <h3 className="text-sm md:text-base font-display font-medium tracking-wide uppercase mb-2 group-hover:text-accent transition-colors">
                      {category.title}
                    </h3>

                    {category.subtitle && (
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {category.subtitle}
                      </p>
                    )}

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-px bg-accent group-hover:w-12 transition-all duration-300"></div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* News & Sale Section */}
      <NewsSaleSection />

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

export default Services;