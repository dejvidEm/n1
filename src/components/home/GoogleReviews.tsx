import { useEffect, useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * GoogleReviews Component
 * 
 * Displays Google reviews in a beautiful slider/carousel layout.
 * 
 * Usage options:
 * 1. Via environment variables (recommended):
 *    - Set VITE_GOOGLE_PLACE_ID and VITE_GOOGLE_API_KEY in .env file
 *    - Component will automatically fetch reviews from Google Places API
 * 
 * 2. Via props:
 *    - Pass placeId and apiKey as props
 * 
 * 3. Manual reviews:
 *    - Pass reviews array directly as prop for hardcoded reviews
 *    - Example:
 *      <GoogleReviews reviews={[
 *        {
 *          author_name: "John Doe",
 *          rating: 5,
 *          text: "Great service!",
 *          relative_time_description: "2 weeks ago",
 *          time: Date.now()
 *        }
 *      ]} />
 * 
 * Note: Google Places API requires CORS proxy or backend endpoint for production.
 * For production, consider fetching reviews from your backend.
 */

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GoogleReviewsProps {
  placeId?: string;
  apiKey?: string;
  reviews?: GoogleReview[]; // For manual/hardcoded reviews
}

export const GoogleReviews = ({ 
  placeId: propPlaceId, 
  apiKey: propApiKey, 
  reviews: manualReviews 
}: GoogleReviewsProps) => {
  // Get from props or environment variables
  const placeId = propPlaceId || import.meta.env.VITE_GOOGLE_PLACE_ID;
  const apiKey = propApiKey || import.meta.env.VITE_GOOGLE_API_KEY;

  const [reviews, setReviews] = useState<GoogleReview[]>(manualReviews || []);
  const [loading, setLoading] = useState(!manualReviews);
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [totalReviews, setTotalReviews] = useState<number>(0);

  useEffect(() => {
    if (manualReviews && manualReviews.length > 0) {
      setReviews(manualReviews);
      setLoading(false);
      calculateStats(manualReviews);
      return;
    }

    // If placeId and apiKey are provided, fetch from Google Places API
    if (placeId && apiKey) {
      fetchGoogleReviews(placeId, apiKey);
    } else {
      // If no configuration, hide the component
      setLoading(false);
    }
  }, [placeId, apiKey, manualReviews]);

  const fetchGoogleReviews = async (placeId: string, apiKey: string) => {
    try {
      // Option 1: Use backend endpoint (recommended for production)
      // Uncomment this and create an endpoint at /api/google-reviews
      // const response = await fetch('/api/google-reviews');
      
      // Option 2: Direct API call (will fail due to CORS in production)
      // For development/testing only - use backend endpoint in production!
      const backendEndpoint = import.meta.env.VITE_GOOGLE_REVIEWS_API || '/api/google-reviews';
      
      // Try backend endpoint first, fallback to direct API call
      let response;
      try {
        response = await fetch(backendEndpoint);
        if (!response.ok) throw new Error('Backend endpoint failed');
      } catch (backendError) {
        // Fallback to direct API call (will only work with CORS proxy in dev)
        console.warn('Backend endpoint not available, trying direct API call (may fail due to CORS)');
        response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`
        );
      }
      
      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }

      const data = await response.json();
      
      if (data.result) {
        setReviews(data.result.reviews || []);
        setAverageRating(data.result.rating || null);
        setTotalReviews(data.result.user_ratings_total || 0);
      } else if (data.error_message) {
        console.error("Google Places API Error:", data.error_message);
        throw new Error(data.error_message);
      }
    } catch (error) {
      console.error("Error fetching Google reviews:", error);
      // Fallback to empty or default reviews
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (reviewsList: GoogleReview[]) => {
    if (reviewsList.length === 0) return;
    
    const avg = reviewsList.reduce((sum, review) => sum + review.rating, 0) / reviewsList.length;
    setAverageRating(avg);
    setTotalReviews(reviewsList.length);
  };

  // Display all reviews (or limit if needed)
  const displayedReviews = reviews;

  if (loading) {
    return (
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">Načítavam recenzie...</p>
          </div>
        </div>
      </section>
    );
  }

  // Hide component if no reviews and no configuration
  if (reviews.length === 0 && !placeId && !manualReviews) {
    return null;
  }

  // Show message if configured but no reviews loaded yet
  if (reviews.length === 0 && placeId && !loading) {
    return (
      <section className="py-24 md:py-32 bg-secondary/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">Recenzie sa momentálne načítavajú...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative">
      {/* Top subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection animation="fade-up" duration={800}>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-accent/60"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-accent/60"></div>
              </div>

              <p className="text-sm uppercase tracking-[0.4em] text-accent mb-4">
                Recenzie
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-6">
                Čo hovoria naši klienti
              </h2>

              {/* Average rating */}
              {averageRating && (
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < Math.round(averageRating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-display font-medium">
                    {averageRating.toFixed(1)}
                  </span>
                  {totalReviews > 0 && (
                    <span className="text-muted-foreground">
                      ({totalReviews} {totalReviews === 1 ? "recenzia" : totalReviews < 5 ? "recenzie" : "recenzií"})
                    </span>
                  )}
                </div>
              )}

              <div className="w-16 h-px bg-accent mx-auto"></div>
            </div>
          </AnimatedSection>

          {/* Reviews Slider */}
          <AnimatedSection animation="fade-up" duration={800} delay={200}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {displayedReviews.map((review, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="bg-background border border-border p-6 rounded-lg hover:shadow-lg transition-shadow h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        {review.profile_photo_url && (
                          <img
                            src={review.profile_photo_url}
                            alt={review.author_name}
                            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-medium text-lg text-foreground mb-1 truncate">
                            {review.author_name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {review.relative_time_description}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-muted-foreground leading-relaxed flex-1 mb-4">
                        {review.text}
                      </p>

                      {/* Google Link */}
                      {review.author_url && (
                        <a
                          href={review.author_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                        >
                          Zobraziť na Google
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-12" />
              <CarouselNext className="-right-4 md:-right-12" />
            </Carousel>
          </AnimatedSection>

          {/* View More Link */}
          {placeId && (
            <AnimatedSection animation="fade-up" duration={600} delay={700}>
              <div className="text-center mt-12">
                <a
                  href={`https://www.google.com/maps/place/?q=place_id:${placeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-accent hover:text-accent/80 transition-colors group"
                >
                  Zobraziť všetky recenzie na Google
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
};
