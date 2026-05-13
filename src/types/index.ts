export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  condition: string;
  quote: string;
  rating: number;
  avatar?: string;
  videoUrl?: string;
}

export interface Condition {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: number;
  coverImage: string;
  author: string;
}

export interface Treatment {
  id: string;
  title: string;
  description: string;
  duration: string;
  benefits: string[];
  image?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
  credentials: string[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}
