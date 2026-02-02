import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-new.png";

const navigation = [
  { name: "Domov", href: "/", external: false },
  { name: "O nás", href: "/o-nas", external: false },
  { name: "Služby", href: "/sluzby", external: false },
  { name: "Blog", href: "/blog", external: false },
  { name: "Rezervácia", href: "https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk", external: true },
  { name: "Kontakt", href: "/kontakt", external: false },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-1 px-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5">
              <img src={logo} alt="N1 Pro Aesthetic Clinic" className="h-28 w-auto" />
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Otvoriť menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium leading-6 text-foreground hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium leading-6 text-foreground hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" target="_blank" rel="noopener noreferrer">
                Rezervovať termín
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu - OUTSIDE header for proper z-index */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0" style={{ zIndex: 99999 }}>
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img src={logo} alt="N1 Pro Aesthetic Clinic" className="h-12 w-auto" />
              </Link>
              <button
                type="button"
                className="rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Zavrieť menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="px-6 py-6">
              <div className="space-y-4">
                {navigation.map((item) => (
                  item.external ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" target="_blank" rel="noopener noreferrer">
                    Rezervovať termín
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
