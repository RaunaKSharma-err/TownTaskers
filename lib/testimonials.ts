export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  service: string;
  rating: number;
  text: string;
  isPlaceholder: boolean;
}

export const testimonials: Testimonial[] = [];
