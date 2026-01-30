import { sanity } from "@/lib/sanityClient";
import type { PortableTextBlock } from "@portabletext/types";

export type ServiceCategoryCard = {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  icon: string;
};

export async function fetchServiceCategories(): Promise<ServiceCategoryCard[]> {
  try {
    console.log("Fetching service categories from Sanity...");
    const result = await sanity.fetch(
      `*[_type == "serviceCategory" && isActive == true]
        | order(order asc, title asc) {
          _id,
          title,
          subtitle,
          "slug": slug.current,
          icon
        }`
    );
    console.log("Service categories fetched from Sanity:", result?.length || 0);
    return result || [];
  } catch (error) {
    console.error("Error fetching service categories from Sanity:", error);
    return [];
  }
}

export type ServiceListItem = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  duration?: string;
  targetGroup?: string;
  price?: string;
  isPopular?: boolean;
  bookioUrl?: string;
};

export type ServiceSubcategoryBlock = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  detailDescription?: PortableTextBlock[];
  image?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  features?: string[];
  tags?: string[];
  contraindications?: string[];
  services: ServiceListItem[];
};

export type ServiceCategoryPage = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  icon: string;
  hasSubcategories?: boolean;
  image?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  features?: string[];
  tags?: string[];
  subcategories: ServiceSubcategoryBlock[];
};

export async function fetchCategoryPage(categorySlug: string): Promise<ServiceCategoryPage | null> {
  try {
    const query = `*[_type == "serviceCategory" && slug.current == $categorySlug && isActive == true][0]{
      _id,
      title,
      "slug": slug.current,
      description,
      icon,
      hasSubcategories,
      image {
        asset,
        alt
      },
      features,
      tags,
      "subcategories": *[
        _type == "serviceSubcategory" &&
        isActive == true &&
        category._ref == ^._id
      ] | order(order asc, title asc) {
        _id,
        title,
        "slug": slug.current,
        description,
        detailDescription,
        image {
          asset,
          alt
        },
        features,
        tags,
        contraindications,
        "services": []
      }
    }`;
    
    console.log("Fetching category page for slug:", categorySlug);
    const result = await sanity.fetch(query, { categorySlug });
    console.log("Sanity query result:", result);
    
    return result;
  } catch (error) {
    console.error("Error fetching category page from Sanity:", error);
    return null;
  }
}

export type ServiceDetailData = {
  _id: string;
  title: string;
  slug: string;
  description?: string;

  fullDescription?: string;
  introDescription?: string;
  benefits?: string[];
  procedure?: string;

  duration?: string;
  targetGroup?: string;
  price?: string;

  contraindications?: string[];
  preparation?: string;
  aftercare?: string;
  faq?: { question?: string; answer?: string }[];

  bookioUrl?: string;

  categoryName: string;
  categorySlug: string;
  subcategoryName?: string;
};

export async function fetchServiceDetail(
  categorySlug: string,
  serviceSlug: string
): Promise<ServiceDetailData | null> {
  // Services have been removed from Sanity
  console.warn("Service detail fetch attempted but services are not available in Sanity");
  return null;
}