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

type Testimony = {
  testimonials: Testimonial;
};

export default function Testimony({ testimony }: Testimony) {
  return <div>Testimony</div>;
}
