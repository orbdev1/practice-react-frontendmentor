import Testimony from "./Testimony";

type User = {
  name: string;
  title: string;
  image: string;
  special: boolean;
};

type Testimonial = {
  id: number;
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
  return (
    <div className="grid grid-cols-1 mx-8 mt-20 gap-8">
      {testimonials.map((testimonial) => (
        <Testimony key={testimonial.id} testimony={testimonial} />
      ))}
    </div>
  );
}
