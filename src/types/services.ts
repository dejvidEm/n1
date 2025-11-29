export interface Service {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  targetGroup: string;
  contraindications?: string[];
  priceText?: string;
  bookioUrl: string;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  services: Service[];
}
