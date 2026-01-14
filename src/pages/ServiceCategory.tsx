import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ArrowRight, ChevronDown, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

import { fetchCategoryPage, type ServiceCategoryPage } from "@/services/servicesApi";
import { categoryIconMap, type CategoryIconKey } from "@/components/icons/categoryIconMap";

const ServiceCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>(); // categoryId = slug
  const [category, setCategory] = useState<ServiceCategoryPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);

  useEffect(() => {
    if (!categoryId) return;

    let cancelled = false;
    setLoading(true);

    fetchCategoryPage(categoryId)
      .then((data) => {
        if (cancelled) return;

        setCategory(data);
        setExpandedSubcategory(data?.subcategories?.[0]?._id ?? null);
      })
      .catch((err) => console.error("Failed to load category page:", err))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [categoryId]);

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
  const hasServices = category.subcategories.some((s) => s.services.length > 0);

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

      {/* Services Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {hasServices ? (
              category.subcategories.map((subcategory) => (
                <div key={subcategory._id} className="mb-8" id={subcategory.slug}>
                  <button
                    onClick={() =>
                      setExpandedSubcategory(expandedSubcategory === subcategory._id ? null : subcategory._id)
                    }
                    className="w-full flex items-center justify-between p-6 bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="text-left">
                      <h3 className="text-xl font-display font-medium">{subcategory.title}</h3>
                      {subcategory.description && (
                        <p className="text-sm text-muted-foreground mt-1">{subcategory.description}</p>
                      )}
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-accent transition-transform",
                        expandedSubcategory === subcategory._id && "rotate-180"
                      )}
                    />
                  </button>

                  {expandedSubcategory === subcategory._id && (
                    <div className="border border-t-0 border-border">
                      {subcategory.services.length > 0 ? (
                        subcategory.services.map((service, index) => (
                          <Link
                            key={service._id}
                            to={`/sluzby/${category.slug}/${service.slug}`}
                            className={cn(
                              "block p-6 hover:bg-secondary/20 transition-colors",
                              index !== subcategory.services.length - 1 && "border-b border-border"
                            )}
                          >
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="text-lg font-display font-medium">{service.title}</h4>
                                  {service.isPopular && (
                                    <Badge className="bg-accent text-accent-foreground text-xs">Populárne</Badge>
                                  )}
                                </div>

                                {service.description && (
                                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                                )}

                                <div className="flex flex-wrap gap-4 text-sm">
                                  {service.duration && (
                                    <span className="flex items-center gap-1 text-muted-foreground">
                                      <Clock className="h-4 w-4" />
                                      {service.duration}
                                    </span>
                                  )}
                                  {service.targetGroup && (
                                    <span className="flex items-center gap-1 text-muted-foreground">
                                      <Users className="h-4 w-4" />
                                      {service.targetGroup}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-4 lg:flex-col lg:items-end">
                                {service.price && (
                                  <span className="text-lg font-display font-medium text-accent">{service.price}</span>
                                )}
                                <span className="text-sm text-accent flex items-center gap-1">
                                  Viac info <ArrowRight className="h-3 w-3" />
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <div className="p-8 text-center text-muted-foreground">Služby budú čoskoro pridané</div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-6 text-accent/50">
                  <Icon className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-display font-medium mb-4">Služby budú čoskoro pridané</h3>
                <p className="text-muted-foreground mb-8">Pripravujeme pre vás ponuku služieb v tejto kategórii.</p>
                <Button asChild variant="outline">
                  <a href="https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" target="_blank" rel="noopener noreferrer">
                    Kontaktujte nás pre viac informácií
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

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