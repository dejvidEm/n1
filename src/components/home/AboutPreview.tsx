import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

import aboutFallbackImage from "@/assets/about-clinic-interior.jpg";
import { fetchAboutPage, type AboutPageData } from "@/content/aboutPage";
import { urlFor } from "@/lib/sanityImage";

export const AboutPreview = () => {
  const [data, setData] = useState<AboutPageData | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchAboutPage()
      .then((res) => {
        if (!cancelled) setData(res);
      })
      .catch((err) => console.error("Failed to load about preview:", err));

    return () => {
      cancelled = true;
    };
  }, []);

  const title = data?.philosophyTitle ?? "Krása s dušou.\nStarostlivosť srdcom.";
  const eyebrow = data?.heroEyebrow ?? "O nás";

  // vezmeme max 2 odseky z philosophyText
  const paragraphs = useMemo(() => {
    const list = (data?.philosophyText ?? []).filter(Boolean);
    if (list.length >= 2) return list.slice(0, 2);
    if (list.length === 1) return list;
    return [
      "V N1 Pro Aesthetic Clinic veríme, že skutočná krása vzniká tam, kde sa stretáva odborná medicínska starostlivosť s hlbokým porozumením človeku.",
      "Prepájame modernú estetickú medicínu, špičkové technológie a wellness rituály, ktoré obnovujú nielen vzhľad, ale aj rovnováhu tela a pokoj mysle.",
    ];
  }, [data]);

  const imageUrl = data?.philosophyImage
    ? urlFor(data.philosophyImage).width(1200).quality(80).url()
    : null;

  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative">
      {/* Top subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <AnimatedSection animation="fade-left" duration={800}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={imageUrl ?? aboutFallbackImage}
                  alt="Interiér"
                  className="w-full h-full object-cover"
                />
                {/* Decorative corner */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-accent/30"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-accent/30"></div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection animation="fade-right" duration={800} delay={200}>
              <div className="space-y-8">
                {/* Decorative element */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-accent/60"></div>
                  <div className="w-1.5 h-1.5 rotate-45 bg-accent/60"></div>
                </div>

                <p className="text-sm uppercase tracking-[0.4em] text-accent">
                  {eyebrow}
                </p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-[1.2]">
                  {title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h2>

                <div className="w-16 h-px bg-accent"></div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  {paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <Link
                  to="/o-nas"
                  className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-accent hover:text-accent/80 transition-colors group"
                >
                  Viac o nás
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
};