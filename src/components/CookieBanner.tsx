import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-elegant">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-sm text-muted-foreground">
            <p>
              Táto stránka používa cookies pre zlepšenie používateľského zážitku. 
              Viac informácií nájdete v našej{" "}
              <Link to="/gdpr" className="text-accent hover:underline">
                politike ochrany osobných údajov
              </Link>.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={rejectCookies}
            >
              Odmietnuť
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Prijať
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
