import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Chyba",
        description: "Prosím vyplňte všetky povinné polia",
        variant: "destructive"
      });
      return;
    }

    // TODO: Implement actual form submission
    console.log("Form submitted:", formData);
    
    toast({
      title: "Správa odoslaná",
      description: "Ďakujeme za vašu správu. Čoskoro sa vám ozveme.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground">
              Sme tu pre vás. Neváhajte nás kontaktovať
            </p>
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
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Adresa</p>
                      <p className="text-muted-foreground">
                        Vaša ulica 123<br />
                        811 01 Bratislava<br />
                        Slovensko
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Telefón</p>
                      <a
                        href="tel:+421000000000"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +421 000 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a
                        href="mailto:info@n1pro.sk"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        info@n1pro.sk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-2">Otváracie hodiny</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Pondelok - Piatok: 9:00 - 18:00</p>
                        <p>Sobota: 9:00 - 14:00</p>
                        <p>Nedeľa: Zatvorené</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="font-medium mb-3">Sledujte nás</p>
                    <div className="flex gap-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        Instagram
                      </a>
                      <a
                        href="https://facebook.com"
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
                <CardDescription>
                  Máte otázku? Radi vám odpovieme
                </CardDescription>
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

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
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
                  {/* Google Maps placeholder - replace with actual embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.2460218814243!2d17.10730931571916!3d48.14816897922533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c894e6db2fdb5%3A0x400f7d1c696f640!2sBratislava%2C%20Slovakia!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa umiestnenia kliniky"
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
