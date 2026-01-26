import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { fetchNewsSaleItems, type NewsSaleItem } from "@/services/newsSaleApi";
import { categoryIconMap, type CategoryIconKey } from "@/components/icons/categoryIconMap";

export const NewsSaleSection = () => {
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });
  const [items, setItems] = useState<NewsSaleItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchNewsSaleItems()
      .then((data) => {
        if (!cancelled) {
          console.log("NewsSaleSection - Items received:", data);
          setItems(data);
        }
      })
      .catch((err) => console.error("Failed to load news/sale items:", err))
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

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center py-10">
            <p className="text-muted-foreground">Načítavam novinky a akcie…</p>
          </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    console.log("NewsSaleSection - No items to display");
    return null;
  }

  console.log("NewsSaleSection - Rendering", items.length, "items");

  return (
    <section className="py-16 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Novinky & Akcie</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Najnovšie ponuky</h2>
            <div className="w-16 h-px bg-accent mx-auto"></div>
          </div>

          <div className="flex justify-center">
            <div 
              ref={gridRef} 
              className={`grid max-w-5xl ${
                items.length === 1 
                  ? "grid-cols-1" 
                  : items.length === 2 
                  ? "grid-cols-2" 
                  : "grid-cols-2 md:grid-cols-4"
              }`}
            >
            {items.map((item, index) => {
              const Icon = getIcon(item.icon);
              const badgeText = item.type === "new" ? "Novinka" : "Akcia";
              const badgeVariant = item.type === "new" ? "default" : "destructive";
              const linkTo = item.link || "#";
              const isExternalLink = item.link?.startsWith("http");
              const isInternalLink = item.link && !isExternalLink;

              const content = (
                <>
                  <div className="absolute top-4 right-4">
                    <Badge variant={badgeVariant} className="text-xs">
                      {badgeText}
                    </Badge>
                  </div>

                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-full h-full" />
                  </div>

                  <h3 className="text-sm md:text-base font-display font-medium tracking-wide uppercase mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  )}

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-px bg-accent group-hover:w-12 transition-all duration-300"></div>
                </>
              );

              const getBorderClasses = () => {
                if (items.length === 1) {
                  return "border border-border/50";
                }
                if (items.length === 2) {
                  return "border-b border-r border-border/50 last:border-r-0";
                }
                return "border-b border-r border-border/50 last:border-r-0 [&:nth-child(4n)]:border-r-0 [&:nth-child(n+5)]:md:border-b-0 [&:nth-child(n+7)]:border-b-0";
              };

              const className = `group relative p-8 md:p-10 text-center ${getBorderClasses()} hover:bg-secondary/30 transition-all duration-500 ${
                item.link ? "cursor-pointer" : ""
              }`;
              const style = {
                opacity: gridVisible ? 1 : 1,
                transform: gridVisible ? "translateY(0)" : "translateY(0)",
                transition: `all 0.5s ease-out ${index * 75}ms`,
              };

              if (isExternalLink) {
                return (
                  <a
                    key={item._id}
                    href={linkTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    style={style}
                  >
                    {content}
                  </a>
                );
              }

              if (isInternalLink) {
                return (
                  <Link
                    key={item._id}
                    to={linkTo}
                    className={className}
                    style={style}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={item._id}
                  className={className}
                  style={style}
                >
                  {content}
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

