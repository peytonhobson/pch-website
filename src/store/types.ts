import { Post, Testimonial, Facility, Resource } from "@/api/types";

export interface GlobalState {
  posts: Post[];
  selectedCategory: string;
  selectedPostTitle: string;
  testimonials: Testimonial[];
  facilities: Facility[];
  selectedFacilityName: string;
  resources: Resource;
}
