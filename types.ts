import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface NavLink {
  label: string;
  path: string;
}