import { Post, Testimonial } from "@/api/types";

export interface GlobalState {
  posts: Post[];
  selectedCategory: string;
  selectedJobPostTitle: string;
  testimonials: Testimonial[];
}
