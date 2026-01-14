import { sanity } from "@/lib/sanityClient";

export type SiteSettings = {
  phone?: string;
  email?: string;
  addressLines?: string[];
  openingHours?: string[];
  instagramUrl?: string;
  facebookUrl?: string;
  mapEmbedUrl?: string;
};

export async function fetchSiteSettings(): Promise<SiteSettings | null> {
  return sanity.fetch(
    `*[_type == "siteSettings"][0]{
      phone,
      email,
      addressLines,
      openingHours,
      instagramUrl,
      facebookUrl,
      mapEmbedUrl
    }`
  );
}