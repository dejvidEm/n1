import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import { fetchServiceCategories, type ServiceCategory } from "@/services/categoriesContent";
import { categoryIconMap, type CategoryIconKey } from "@/components/icons/categoryIconMap";

export const CategoriesSection = () => {
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchServiceCategories()
      .then((data) => {
        if (!cancelled) setCategories(data);
      })
      .catch((err) => console.error("Failed to load service categories:", err))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // fallback, keby niekto v Sanity vybral neexistujúcu ikonku
  const getIcon = (key: string) => {
    const Icon = categoryIconMap[key as CategoryIconKey];
    return Icon ?? categoryIconMap.cosmetology; // default fallback
  };

  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-border to-border/50" />

      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-accent/60" />
            <div className="w-8 h-px bg-accent/60" />
          </div>

          <p className="text-sm uppercase tracking-[0.4em] text-accent mb-4">Výber procedúr</p>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Naše služby</h2>
          <div className="w-20 h-px bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Komplexná starostlivosť o vašu krásu a well-being
          </p>
        </AnimatedSection>

        {/* Grid */}
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

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-px bg-accent group-hover:w-12 transition-all duration-300" />
                </Link>
              );
            })}
        </div>

        <AnimatedSection className="text-center mt-16" delay={400}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-border" />
            <div className="w-1.5 h-1.5 rotate-45 border border-accent/60" />
            <div className="w-8 h-px bg-border" />
          </div>

          <Link
            to="/sluzby"
            className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-accent hover:text-accent/80 transition-colors group"
          >
            Zobraziť všetky služby
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent via-border to-border/50" />
    </section>
  );
};