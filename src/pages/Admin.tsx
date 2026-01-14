import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Lock, Settings, FileText, Layers } from "lucide-react";

const Admin = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple demo login - replace with actual authentication
    if (loginData.email === "admin@n1pro.sk" && loginData.password === "admin") {
      setIsLoggedIn(true);
      toast({
        title: "Úspešne prihlásený",
        description: "Vitajte v admin paneli",
      });
    } else {
      toast({
        title: "Chyba pri prihlásení",
        description: "Nesprávne prihlasovacie údaje",
        variant: "destructive",
      });
    }
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <section className="py-20 min-h-[70vh] flex items-center justify-center">
          <div className="container mx-auto px-6">
            <Card className="max-w-md mx-auto">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Lock className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl font-display">Admin Panel</CardTitle>
                <CardDescription>
                  Prihláste sa pre prístup k správe obsahu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Heslo</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Prihlásiť sa
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Demo: admin@n1pro.sk / admin
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-semibold mb-2">Admin Panel</h1>
            <p className="text-muted-foreground">Správa obsahu webstránky</p>
          </div>

          <Tabs defaultValue="services" className="space-y-6">
            <TabsList className="bg-secondary">
              <TabsTrigger value="services" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                <Layers className="h-4 w-4 mr-2" />
                Služby
              </TabsTrigger>
              <TabsTrigger value="blog" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                <FileText className="h-4 w-4 mr-2" />
                Blog
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                <Settings className="h-4 w-4 mr-2" />
                Nastavenia
              </TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Správa služieb</CardTitle>
                  <CardDescription>
                    Pridávajte, upravujte a odstráňujte služby a kategórie
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      V plnej verzii tu budete môcť:
                    </p>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                      <li>Pridávať nové kategórie služieb</li>
                      <li>Upravovať existujúce služby</li>
                      <li>Nastaviť ceny a Bookio linky</li>
                      <li>Označiť populárne služby</li>
                      <li>Spravovať benefity a kontraindikácie</li>
                    </ul>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Pridať novú službu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blog" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Správa blogu</CardTitle>
                  <CardDescription>
                    Vytvárajte a upravujte blogové články
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="blog-title">Názov článku</Label>
                      <Input id="blog-title" placeholder="Zadajte názov článku" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="blog-excerpt">Perex</Label>
                      <Textarea id="blog-excerpt" placeholder="Krátky popis článku" rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="blog-content">Obsah</Label>
                      <Textarea id="blog-content" placeholder="Obsah článku" rows={10} />
                    </div>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Publikovať článok
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Všeobecné nastavenia</CardTitle>
                  <CardDescription>
                    Upravte základné texty a kontaktné informácie
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="slogan">Hlavný slogan</Label>
                      <Input
                        id="slogan"
                        defaultValue="Krása, ktorá sa dotýka duše"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefón</Label>
                      <Input id="phone" placeholder="0918 862 508" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="n1proaesthetic@gmail.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Adresa</Label>
                      <Textarea id="address" placeholder="Vaša ulica 123, Bratislava" rows={2} />
                    </div>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Uložiť zmeny
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
