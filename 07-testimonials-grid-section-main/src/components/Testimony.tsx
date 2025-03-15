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

const colorMap = {
  1: { background: "bg-red-500", text: "text-white" },
  2: { background: "bg-black", text: "text-white" },
  3: { background: "bg-blue-500", text: "text-yellow-200" },
  4: { background: "bg-green-500", text: "text-white" },
  5: { background: "bg-purple-500", text: "text-white" },
};

export default function Testimony({ testimony }: Testimony) {
  const { background, text } = colorMap[testimony.id] || {
    background: "bg-gray-500",
    text: "text-white",
  };

  return (
    <article className={`${background} p-8 rounded-lg`}>
      <UserCard user={testimony.user} text={text} />
      <TestimonyText text={testimony} />
    </article>
  );
}
