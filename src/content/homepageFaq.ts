import { sanity } from "@/lib/sanityClient";

export type HomepageFaqItem = {
  question: string;
  answer: string;
};

export type HomepageFaqData = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: HomepageFaqItem[];
  ctaText?: string;
  ctaPhone?: string;
};

export async function fetchHomepageFaq(): Promise<HomepageFaqData | null> {
  return sanity.fetch(
    `*[_type == "homepageFaq" && isActive == true][0]{
      eyebrow,
      title,
      subtitle,
      items[]{question, answer},
      ctaText,
      ctaPhone
    }`
  );
}