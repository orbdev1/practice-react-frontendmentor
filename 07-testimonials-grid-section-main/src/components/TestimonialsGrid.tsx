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
    <div className="grid grid-cols-1 px-8 py-19 mx-auto  gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-[1180px]">
      {testimonials.map((testimonial) => (
        <Testimony key={testimonial.id} testimony={testimonial} />
      ))}
    </div>
  );
}
