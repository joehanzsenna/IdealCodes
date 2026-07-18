export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  liveUrl?: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
  color: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  naira: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}
