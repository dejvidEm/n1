import { sanity } from "@/lib/sanityClient";

export type NewsSaleItem = {
  _id: string;
  title: string;
  type: "new" | "sale";
  icon: string;
  description?: string;
  link?: string;
};

export async function fetchNewsSaleItems(): Promise<NewsSaleItem[]> {
  try {
    console.log("Fetching news/sale items from Sanity...");
    const result = await sanity.fetch(
      `*[_type == "newsSale" && isActive == true]
        | order(order asc, title asc) {
          _id,
          title,
          type,
          icon,
          description,
          link
        }`
    );
    console.log("News/sale items fetched from Sanity:", result?.length || 0);
    return result || [];
  } catch (error) {
    console.error("Error fetching news/sale items from Sanity:", error);
    return [];
  }
}

