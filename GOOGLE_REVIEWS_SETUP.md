# Google Reviews Setup Guide

## Metóda 1: Použitie Environment Variables (Odporúčané s backend endpointom)

### Krok 1: Získanie Google Place ID

1. Prejdite na [Google Maps](https://www.google.com/maps)
2. Vyhľadajte vašu firmu/podnikanie
3. Kliknite na vašu firmu
4. V URL nájdete `place_id` alebo použite [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
5. Skopírujte Place ID (napr. `ChIJN1t_tDeuEmsRUsoyG83frY4`)

### Krok 2: Získanie Google API Key

1. Prejdite na [Google Cloud Console](https://console.cloud.google.com/)
2. Vytvorte nový projekt alebo vyberte existujúci
3. Povoľte **Places API**:
   - Prejdite na "APIs & Services" > "Library"
   - Vyhľadajte "Places API"
   - Kliknite "Enable"
4. Vytvorte API kľúč:
   - Prejdite na "APIs & Services" > "Credentials"
   - Kliknite "Create Credentials" > "API Key"
   - Skopírujte API kľúč
5. **Dôležité**: Obmedzte API kľúč:
   - Kliknite na vytvorený API kľúč
   - V "API restrictions" vyberte "Restrict key"
   - Vyberte len "Places API"
   - V "Application restrictions" nastavte podľa potreby (napr. HTTP referrers pre web)

### Krok 3: Nastavenie Environment Variables

Vytvorte súbor `.env` v root adresári projektu:

```env
VITE_GOOGLE_PLACE_ID=your_place_id_here
VITE_GOOGLE_API_KEY=your_api_key_here
```

**⚠️ Dôležité**: API kľúč bude viditeľný v klientskom kóde. Pre produkciu použite backend endpoint!

### Krok 4: Backend Endpoint (Odporúčané pre produkciu)

Google Places API má CORS obmedzenia, takže priamy fetch z prehliadača nebude fungovať. Potrebujete backend endpoint.

#### Príklad Node.js/Express endpoint:

```javascript
// server.js alebo api/reviews.js
const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/api/google-reviews', async (req, res) => {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_API_KEY;
  
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`
    );
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});
```

#### Potom upravte komponentu:

```typescript
const fetchGoogleReviews = async (placeId: string, apiKey: string) => {
  try {
    // Použite váš backend endpoint namiesto priameho API volania
    const response = await fetch('/api/google-reviews');
    
    const data = await response.json();
    
    if (data.result) {
      setReviews(data.result.reviews || []);
      setAverageRating(data.result.rating || null);
      setTotalReviews(data.result.user_ratings_total || 0);
    }
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
  } finally {
    setLoading(false);
  }
};
```

## Metóda 2: Použitie Google Reviews Widget (Jednoduchšie, ale menej flexibilné)

Google poskytuje oficiálny widget, ktorý môžete vložiť:

1. Prejdite na [Google Business Profile](https://business.google.com/)
2. Vyberte vašu firmu
3. Prejdite na "Reviews"
4. Kliknite na "Get more reviews"
5. Skopírujte embed kód

Potom môžete vytvoriť jednoduchý wrapper komponent:

```tsx
export const GoogleReviewsWidget = () => {
  useEffect(() => {
    // Načítajte Google Reviews widget script
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="g-reviews" 
         data-place-id="YOUR_PLACE_ID"
         data-view-mode="list">
    </div>
  );
};
```

## Metóda 3: Použitie Third-Party Service

Existujú služby ako:
- [ReviewsOnMyWebsite](https://reviewsonmywebsite.com/)
- [EmbedSocial](https://embedsocial.com/)
- [Elfsight Google Reviews](https://elfsight.com/google-reviews-widget/)

Tieto služby spravia všetko za vás, ale väčšinou sú platené.

## Testovanie

Po nastavení môžete testovať:

1. Spustite aplikáciu: `npm run dev`
2. Skontrolujte konzolu prehlíadača pre chyby
3. Ak vidíte CORS chybu, musíte použiť backend endpoint

## Bezpečnostné poznámky

- **Nikdy** nezverejňujte API kľúč v git repozitári
- Pridajte `.env` do `.gitignore`
- Pre produkciu vždy použite backend endpoint
- Obmedzte API kľúč na konkrétne API a domény

## Riešenie problémov

### CORS Error
- Použite backend endpoint namiesto priameho API volania

### "This API project is not authorized to use this API"
- Skontrolujte, či máte povolenú Places API v Google Cloud Console

### "REQUEST_DENIED"
- Skontrolujte, či je API kľúč správny
- Skontrolujte, či máte povolenú Places API
- Skontrolujte obmedzenia API kľúča

### Žiadne recenzie sa nezobrazujú
- Skontrolujte, či má vaša firma skutočné Google recenzie
- Skontrolujte Place ID v Google Maps
