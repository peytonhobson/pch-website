import { Post, Testimonial, Facility } from "@/api/types";

export interface GlobalState {
  posts: Post[];
  selectedCategory: string;
  selectedPostTitle: string;
  testimonials: Testimonial[];
  facilities: Facility[];
  selectedFacilityName: string;
}
