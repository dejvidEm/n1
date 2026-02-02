import { sanity } from "../lib/sanityClient";

export type HomepageContent = {
  headline: string;
  subheadline?: string;
  phone?: string;
  heroImages?: Array<{
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  }>;
  heroAutoplayDelay?: number;
};

export async function fetchHomepageContent(): Promise<HomepageContent | null> {
  try {
    // First, let's check if we can connect and see what documents exist
    const allHomepages = await sanity.fetch(`*[_type == "homepage"]`);
    console.log("All homepage documents found:", allHomepages);
    
    // Query for published documents (not drafts)
    // Try both approaches: excluding drafts and using the published perspective
    const query = `*[_type == "homepage" && !(_id in path("drafts.**"))][0]{
      headline,
      subheadline,
      phone,
      heroImages[] {
        asset,
        alt
      },
      heroAutoplayDelay
    }`;
    
    console.log("Fetching homepage content with query:", query);
    const result = await sanity.fetch(query);
    console.log("Sanity fetch result:", result);
    
    // If no result, try without the draft filter (in case it's the only document)
    if (!result) {
      console.log("No published document found, trying without draft filter...");
      const fallbackQuery = `*[_type == "homepage"][0]{
        headline,
        subheadline,
        phone,
        heroImages[] {
          asset,
          alt
        },
        heroAutoplayDelay
      }`;
      const fallbackResult = await sanity.fetch(fallbackQuery);
      console.log("Fallback query result:", fallbackResult);
      
      if (fallbackResult) {
        return fallbackResult;
      }
    }
    
    if (!result) {
      console.warn("No homepage document found in Sanity. Make sure you have created and published a homepage document.");
      return null;
    }
    
    return result;
  } catch (error) {
    console.error("Error in fetchHomepageContent:", error);
    console.error("Error details:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    throw error;
  }
}