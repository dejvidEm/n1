import { sanity } from "@/lib/sanityClient";

export type AboutValue = {
  icon: "heart" | "shield" | "sparkles" | "users";
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  position?: string;
  specialization?: string;
  image?: any;
};

export type AboutPageData = {
  heroEyebrow?: string;
  heroTitle?: string;
  heroSubtitle?: string;

  philosophyEyebrow?: string;
  philosophyTitle?: string;
  philosophyQuote?: string;
  philosophyText?: string[];
  philosophyImage?: any;

  valuesEyebrow?: string;
  valuesTitle?: string;
  values?: AboutValue[];

  teamEyebrow?: string;
  teamTitle?: string;
  teamSubtitle?: string;
  teamMembers?: TeamMember[];

  certEyebrow?: string;
  certTitle?: string;
  certText?: string;
  certifications?: string[];

  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaText?: string;
  ctaBookioUrl?: string;
  ctaPhone?: string;
};

export async function fetchAboutPage(): Promise<AboutPageData | null> {
  return sanity.fetch(
    `*[_type == "aboutPage"][0]{
      heroEyebrow, heroTitle, heroSubtitle,
      philosophyEyebrow, philosophyTitle, philosophyQuote, philosophyText, philosophyImage,
      valuesEyebrow, valuesTitle, values,
      teamEyebrow, teamTitle, teamSubtitle, teamMembers,
      certEyebrow, certTitle, certText, certifications,
      ctaEyebrow, ctaTitle, ctaText, ctaBookioUrl, ctaPhone
    }`
  );
}