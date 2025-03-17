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

type ColorMap = {
  [key: number]: {
    background: string;
    circleColor: string;
    principalColor: string;
    titleColor: string;
    descriptionColor: string;
  };
};

const colorMap: ColorMap = {
  1: {
    background: "bg-purple-500",
    circleColor: "border-purple-300",
    principalColor: "text-white",
    titleColor: "text-purple-300",
    descriptionColor: "text-purple-300",
  },
  2: {
    background: "bg-grey-500",
    circleColor: "border-white",
    principalColor: "text-white",
    titleColor: "text-grey-200",
    descriptionColor: "text-grey-200",
  },
  3: {
    background: "bg-white",
    principalColor: "text-grey-500",
    circleColor: "border-white",
    titleColor: "text-grey-400",
    descriptionColor: "text-grey-400",
  },
  4: {
    background: "bg-dark-blue",
    circleColor: "border-purple-300",
    principalColor: "text-grey-200",
    titleColor: "text-grey-100",
    descriptionColor: "text-grey-200",
  },
  5: {
    background: "bg-white",
    circleColor: "border-white",
    principalColor: "text-dark-blue",
    titleColor: "text-grey-200",
    descriptionColor: "text-grey-400",
  },
};

export default function Testimony({ testimony }: Testimony) {
  const {
    background,
    circleColor,
    principalColor,
    titleColor,
    descriptionColor,
  } = colorMap[testimony.id] || {
    background: "bg-gray-500",
    principalColor: "text-white",
    titleColor: "text-purple-300",
    descriptionColor: "text-white",
  };
  console.log(testimony);
  console.log(testimony.id);
  console.log(typeof testimony.id);

  return (
    <article className={`${background} p-[36px] py-7 rounded-lg shadow-xl`}>
      <UserCard
        user={testimony.user}
        borderColor={circleColor}
        nameColor={principalColor}
        titleColor={titleColor}
      />
      <TestimonyText
        text={testimony}
        quoteColor={principalColor}
        descriptionColor={descriptionColor}
      />
    </article>
  );
}
