import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Users, AlertTriangle, Check } from "lucide-react";

import { fetchServiceDetail, type ServiceDetailData } from "@/services/servicesApi";

const ServiceDetail = () => {
  const { categoryId, serviceId } = useParams<{ categoryId: string; serviceId: string }>(); // slugs
  const [service, setService] = useState<ServiceDetailData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categoryId || !serviceId) return;

    let cancelled = false;
    setLoading(true);

    fetchServiceDetail(categoryId, serviceId)
      .then((data) => {
        if (!cancelled) setService(data);
      })
      .catch((err) => console.error("Failed to load service detail:", err))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [categoryId, serviceId]);

  if (loading) {
    return (
      <Layout>
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-6 text-center">Načítavam…</div>
        </section>
      </Layout>
    );
  }

  if (!service) {
    return (
      <Layout>
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-display font-medium mb-6">Služba nenájdená</h1>
            <Link to="/sluzby" className="text-accent hover:text-accent/80">
              ← Späť na služby
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary/50">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 justify-center">
            <Link to="/sluzby" className="hover:text-accent transition-colors">Služby</Link>
            <span>/</span>
            <Link to={`/sluzby/${service.categorySlug}`} className="hover:text-accent transition-colors">
              {service.categoryName}
            </Link>
            {service.subcategoryName && (
              <>
                <span>/</span>
                <span>{service.subcategoryName}</span>
              </>
            )}
          </nav>

          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent"></div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium uppercase tracking-wide">
                {service.title}
              </h1>
              <div className="w-12 h-px bg-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Infolinka */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">Infolinka & Objednávky</p>
          <a href="tel:+421918862508" className="text-2xl md:text-3xl font-display tracking-wider hover:text-accent transition-colors">
            0918 862 508
          </a>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-2xl font-display font-medium uppercase tracking-wide text-accent mb-6">
                {service.title}
              </h2>
              {service.description && (
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {service.description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button variant="outline" className="uppercase tracking-wider" asChild>
                <Link to={`/sluzby/${service.categorySlug}`}>Späť na kategóriu</Link>
              </Button>

              {service.bookioUrl && (
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-wider" asChild>
                  <a href={service.bookioUrl} target="_blank" rel="noopener noreferrer">Online Rezervácia</a>
                </Button>
              )}
            </div>

            <div className="space-y-12">
              {service.fullDescription && (
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-lg font-display font-medium uppercase tracking-wide mb-4">Bližšie informácie</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.fullDescription}</p>
                </div>
              )}

              {service.benefits?.length ? (
                <div>
                  <h3 className="text-lg font-display font-medium uppercase tracking-wide mb-6">Výhody ošetrenia</h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {service.procedure && (
                <div>
                  <h3 className="text-lg font-display font-medium uppercase tracking-wide mb-4">Priebeh ošetrenia</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.procedure}</p>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-6">
                {service.duration && (
                  <div className="p-6 bg-secondary/30 text-center">
                    <Clock className="h-6 w-6 text-accent mx-auto mb-3" />
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Trvanie</p>
                    <p className="font-display font-medium">{service.duration}</p>
                  </div>
                )}
                {service.targetGroup && (
                  <div className="p-6 bg-secondary/30 text-center">
                    <Users className="h-6 w-6 text-accent mx-auto mb-3" />
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Pre koho</p>
                    <p className="font-display font-medium">{service.targetGroup}</p>
                  </div>
                )}
                {service.price && (
                  <div className="p-6 bg-secondary/30 text-center">
                    <Phone className="h-6 w-6 text-accent mx-auto mb-3" />
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Cena</p>
                    <p className="font-display font-medium text-accent">{service.price}</p>
                  </div>
                )}
              </div>

              {service.contraindications?.length ? (
                <div className="p-6 border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    <h3 className="text-lg font-display font-medium uppercase tracking-wide">Kontraindikácie</h3>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {service.contraindications.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {service.preparation && (
                <div>
                  <h3 className="text-lg font-display font-medium uppercase tracking-wide mb-4">Príprava pred ošetrením</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.preparation}</p>
                </div>
              )}

              {service.aftercare && (
                <div>
                  <h3 className="text-lg font-display font-medium uppercase tracking-wide mb-4">Starostlivosť po ošetrení</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.aftercare}</p>
                </div>
              )}

              {service.faq?.length ? (
                <div>
                  <h3 className="text-lg font-display font-medium uppercase tracking-wide mb-6">Často kladené otázky</h3>
                  <div className="space-y-4">
                    {service.faq.map((item, index) => (
                      <div key={index} className="p-6 bg-secondary/20">
                        <h4 className="font-display font-medium mb-2">{item.question}</h4>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {service.bookioUrl && (
              <div className="mt-16 text-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-wider" asChild>
                  <a href={service.bookioUrl} target="_blank" rel="noopener noreferrer">
                    Rezervovať termín
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

export default ServiceDetail;