import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

import { fetchSiteSettings, type SiteSettings } from "@/content/siteSettings";

const Contact = () => {
  const { toast } = useToast();

  const [settings, setSettings] = useState<SiteSettings | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    let cancelled = false;

    fetchSiteSettings()
      .then((data) => {
        if (!cancelled) setSettings(data);
      })
      .catch((err) => console.error("Failed to load site settings:", err));

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Chyba",
        description: "Prosím vyplňte všetky povinné polia",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);

    toast({
      title: "Správa odoslaná",
      description: "Ďakujeme za vašu správu. Čoskoro sa vám ozveme.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  // Fallbacky (ak ešte nemáš vyplnené v Sanity)
  const addressLines =
    settings?.addressLines?.length
      ? settings.addressLines
      : ["Vaša ulica 123", "811 01 Bratislava", "Slovensko"];

  const openingHours =
    settings?.openingHours?.length
      ? settings.openingHours
      : ["Pondelok - Piatok: 9:00 - 18:00", "Sobota: 9:00 - 14:00", "Nedeľa: Zatvorené"];

  const phone = settings?.phone ?? "0918 862 508";
  const phoneHref = `tel:${phone.replace(/\s+/g, "")}`;

  const email = settings?.email ?? "n1proaesthetic@gmail.com";
  const emailHref = `mailto:${email}`;

  const instagramUrl = settings?.instagramUrl ?? "https://instagram.com";
  const facebookUrl = settings?.facebookUrl ?? "https://facebook.com";

  const mapEmbedUrl =
    settings?.mapEmbedUrl ??
    "https://www.google.com/maps?q=Hviezdoslavova+3096%2F3096,+Kom%C3%A1rno,+945+01+Kom%C3%A1rno&output=embed";

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">Kontakt</h1>
            <p className="text-xl text-muted-foreground">Sme tu pre vás. Neváhajte nás kontaktovať</p>
          </div>
        </div>
      </section>

      {/* Contact info & form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Kontaktné údaje</CardTitle>
                  <CardDescription>
                    Teší nás váš záujem. Kontaktujte nás niektorým z nasledujúcich spôsobov
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Adresa</p>
                      <p className="text-muted-foreground">
                        {addressLines.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Telefón</p>
                      <a href={phoneHref} className="text-muted-foreground hover:text-accent transition-colors">
                        {phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href={emailHref} className="text-muted-foreground hover:text-accent transition-colors">
                        {email}
                      </a>
                    </div>
                  </div>

                  {/* Opening hours */}
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-2">Otváracie hodiny</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        {openingHours.map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-medium mb-3">Sledujte nás</p>
                    <div className="flex gap-4">
                      <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        Instagram
                      </a>
                      <a
                        href={facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                        Facebook
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-2xl">Napíšte nám</CardTitle>
                <CardDescription>Máte otázku? Radi vám odpovieme</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Meno *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefón</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Správa *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Odoslať správu
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="mt-12 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa umiestnenia"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;