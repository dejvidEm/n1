export interface Service {
  id: string;
  name: string;
  description?: string;
  fullDescription?: string; // Detailed description for service detail page
  duration?: string;
  price: string;
  benefits: string[];
  targetGroup: string;
  contraindications?: string[];
  bookioUrl: string;
  isPopular?: boolean;
  // Extended fields for detail page
  procedure?: string; // How the procedure works
  results?: string; // Expected results
  preparation?: string; // How to prepare
  aftercare?: string; // Post-treatment care
  faq?: { question: string; answer: string }[]; // FAQ for this service
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  subcategories?: Subcategory[];
  services?: Service[];
}
