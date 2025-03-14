import TestimonyText from "./TestimonyText";
import UserCard from "./UserCard";

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

type Testimony = {
  testimony: Testimonial;
};

export default function Testimony({ testimony }: Testimony) {
  return (
    <article className="bg-purple-500 p-8 rounded-lg">
      <UserCard user={testimony.user} />
      <TestimonyText text={testimony} />
    </article>
  );
}
