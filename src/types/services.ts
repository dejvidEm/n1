export interface Service {
  id: string;
  name: string;
  description?: string;
  duration?: string;
  price: string;
  benefits: string[];
  targetGroup: string;
  contraindications?: string[];
  bookioUrl: string;
  isPopular?: boolean;
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
