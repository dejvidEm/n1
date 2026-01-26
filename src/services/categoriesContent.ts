import { sanity } from "@/lib/sanityClient";

export type ServiceCategory = {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  icon: string;
  order?: number;
};

export async function fetchServiceCategories(): Promise<ServiceCategory[]> {
  try {
    console.log("Fetching service categories from Sanity (homepage)...");
    const result = await sanity.fetch(
      `*[_type == "serviceCategory" && isActive == true]
        | order(order asc, title asc) {
          _id,
          title,
          subtitle,
          "slug": slug.current,
          icon,
          order
        }`
    );
    console.log("Service categories fetched from Sanity (homepage):", result?.length || 0);
    return result || [];
  } catch (error) {
    console.error("Error fetching service categories from Sanity (homepage):", error);
    return [];
  }
}