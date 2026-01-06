import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="N1 Pro Aesthetic Clinic" className="h-16 w-auto" />
            <p className="text-sm text-muted-foreground">
              Estetická a wellness klinika
            </p>
            <p className="text-xs text-muted-foreground italic">
              Krása, ktorá sa dotýka duše
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">Navigácia</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-accent transition-colors">Domov</Link></li>
              <li><Link to="/o-nas" className="text-muted-foreground hover:text-accent transition-colors">O nás</Link></li>
              <li><Link to="/sluzby" className="text-muted-foreground hover:text-accent transition-colors">Služby</Link></li>
              <li><a href="https://services.bookio.com/n1-pro-aesthetic/widget?lang=sk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">Rezervácia</a></li>
              <li><Link to="/kontakt" className="text-muted-foreground hover:text-accent transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Hviezdoslavova 3096/3, 945 01 Komárno</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="tel:+421918500282" className="text-muted-foreground hover:text-accent transition-colors">
                  0918 500 282
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="mailto:info@n1pro.sk" className="text-muted-foreground hover:text-accent transition-colors">
                  info@n1pro.sk
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-medium mb-4">Sledujte nás</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <ul className="space-y-2 text-xs">
              <li><Link to="/gdpr" className="text-muted-foreground hover:text-accent transition-colors">GDPR a ochrana údajov</Link></li>
              <li><Link to="/podmienky" className="text-muted-foreground hover:text-accent transition-colors">Obchodné podmienky</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} N1 Pro Aesthetic Clinic. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
};
