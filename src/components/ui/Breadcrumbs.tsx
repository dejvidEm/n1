import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const routeNames: Record<string, string> = {
  "": "N1 Pro Aesthetic",
  "o-nas": "O nás",
  "sluzby": "Služby",
  "cennik": "Cenník",
  "rezervacia": "Rezervácia",
  "kontakt": "Kontakt",
  "blog": "Blog",
  "gdpr": "GDPR",
  "podmienky": "Podmienky"
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  if (pathSegments.length === 0) return null;

  return (
    <nav className="bg-secondary/50 border-b border-border/50">
      <div className="container mx-auto px-6 py-3">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-accent transition-colors uppercase tracking-[0.15em] text-xs"
            >
              N1 Pro Aesthetic
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;
            const name = routeNames[segment] || segment;

            return (
              <li key={path} className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
                {isLast ? (
                  <span className="text-accent uppercase tracking-[0.15em] text-xs">
                    {name}
                  </span>
                ) : (
                  <Link 
                    to={path} 
                    className="text-muted-foreground hover:text-accent transition-colors uppercase tracking-[0.15em] text-xs"
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
