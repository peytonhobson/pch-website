export interface Post {
  id: number;
  mainImage: string;
  title: string;
  author: string;
  description: string;
  date: string;
  body: string;
  categories: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

export interface Facility {
  id: number;
  name: string;
  summary: string;
  description: string;
  images: string[];
  location: string;
}

export interface Resource {
  id: number;
  text: string;
  link: string;
}
