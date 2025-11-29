import { Layout } from "@/components/layout/Layout";

const GDPR = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-8">
            GDPR a ochrana osobných údajov
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              N1 Pro Aesthetic Clinic rešpektuje vaše súkromie a ochraňuje vaše osobné údaje 
              v súlade s nariadením GDPR (General Data Protection Regulation).
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              Aké údaje zhromažďujeme
            </h2>
            <p>
              Pri rezervácii termínu alebo kontaktovaní našej kliniky môžeme zhromažďovať:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Meno a priezvisko</li>
              <li>Emailovú adresu</li>
              <li>Telefónne číslo</li>
              <li>Ďalšie údaje potrebné pre poskytnutie našich služieb</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              Ako používame vaše údaje
            </h2>
            <p>
              Vaše osobné údaje používame výhradne na:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Potvrdenie a správu rezervácií</li>
              <li>Poskytovanie našich služieb</li>
              <li>Komunikáciu s vami ohľadom vašich požiadaviek</li>
              <li>Zlepšovanie našich služieb</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              Vaše práva
            </h2>
            <p>
              Máte právo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Na prístup k vašim osobným údajom</li>
              <li>Na opravu nesprávnych údajov</li>
              <li>Na vymazanie vašich údajov</li>
              <li>Na obmedzenie spracovania</li>
              <li>Na prenositeľnosť údajov</li>
              <li>Namietať proti spracovaniu</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mt-8 mb-4">
              Kontakt
            </h2>
            <p>
              Pre otázky týkajúce sa ochrany vašich osobných údajov nás kontaktujte na:
            </p>
            <p>
              Email: <a href="mailto:info@n1pro.sk" className="text-accent hover:underline">info@n1pro.sk</a><br />
              Telefón: <a href="tel:+421000000000" className="text-accent hover:underline">+421 000 000 000</a>
            </p>

            <p className="text-sm italic mt-8">
              Posledná aktualizácia: {new Date().toLocaleDateString('sk-SK')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GDPR;
