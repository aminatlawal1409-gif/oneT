export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface Market {
  id: string;
  name: string;
  icon: string;
  description: string;
  assets: string[];
  color: string;
  change: string;
  positive: boolean;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface CoreValue {
  id: string;
  icon: string;
  title: string;
  description: string;
}
