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
  return sanity.fetch(
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
}