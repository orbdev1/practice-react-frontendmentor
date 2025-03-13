type User = {
  name: string;
  title: string;
  image: string;
  special: boolean;
};

type Testimonial = {
  user: User;
  testimony: string;
  description: string;
};

type TestimonialsGridProps = {
  testimonials: Testimonial[];
};

export default function TestimonialsGrid({
  testimonials,
}: TestimonialsGridProps) {
  return <div>Print</div>;
}
