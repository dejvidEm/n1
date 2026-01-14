import { sanity } from "@/lib/sanityClient";

export type ServiceCategoryCard = {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  icon: string;
};

export async function fetchServiceCategories(): Promise<ServiceCategoryCard[]> {
  return sanity.fetch(
    `*[_type == "serviceCategory" && isActive == true]
      | order(order asc, title asc) {
        _id,
        title,
        subtitle,
        "slug": slug.current,
        icon
      }`
  );
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
  services: ServiceListItem[];
};

export type ServiceCategoryPage = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  icon: string;
  subcategories: ServiceSubcategoryBlock[];
};

export async function fetchCategoryPage(categorySlug: string): Promise<ServiceCategoryPage | null> {
  return sanity.fetch(
    `*[_type == "serviceCategory" && slug.current == $categorySlug && isActive == true][0]{
      _id,
      title,
      "slug": slug.current,
      description,
      icon,
      "subcategories": *[
        _type == "serviceSubcategory" &&
        isActive == true &&
        category._ref == ^._id
      ] | order(order asc, title asc) {
        _id,
        title,
        "slug": slug.current,
        description,
        "services": *[
          _type == "service" &&
          isActive == true &&
          category._ref == ^.^._id &&
          subcategory._ref == ^._id
        ] | order(order asc, title asc) {
          _id,
          title,
          "slug": slug.current,
          description,
          duration,
          targetGroup,
          price,
          isPopular,
          bookioUrl
        }
      }
    }`,
    { categorySlug }
  );
}

export type ServiceDetailData = {
  _id: string;
  title: string;
  slug: string;
  description?: string;

  fullDescription?: string;
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
  const res: ServiceDetailData | null = await sanity.fetch(
    `*[_type == "service" && slug.current == $serviceSlug && isActive == true][0]{
      _id,
      title,
      "slug": slug.current,
      description,

      fullDescription,
      benefits,
      procedure,

      duration,
      targetGroup,
      price,

      contraindications,
      preparation,
      aftercare,
      faq,

      bookioUrl,

      "categoryName": category->title,
      "categorySlug": category->slug.current,
      "subcategoryName": subcategory->title
    }`,
    { categorySlug, serviceSlug }
  );

  // Guard: aby service sedela do category z URL
  if (!res) return null;
  if (res.categorySlug !== categorySlug) return null;

  return res;
}