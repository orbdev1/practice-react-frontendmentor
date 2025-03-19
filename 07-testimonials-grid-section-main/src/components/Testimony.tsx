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

type PosGrid = {
  [key: number]: {
    position: string;
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

const pos: PosGrid = {
  1: {
    position: "sm:row-span-2 lg:col-span-2 lg:row-span-1",
  },
  2: {
    position: "sm: lg:col-span-1 lg:row-span-1",
  },
  3: {
    position: "sm: lg:row-start-2 lg:col-start-1",
  },
  4: {
    position: "sm:col-span-2 lg:col-span-2 lg:row-span-1",
  },
  5: {
    position:
      "sm:col-span-2 lg:col-start-4 lg:row-start-1 lg:col-span-1 lg:row-span-2",
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

  const { position } = pos[testimony.id];

  return (
    <article
      className={`${background} ${position} p-[36px] py-7 rounded-lg shadow-[30px_50px_60px_rgba(0,0,0,0.20)] lg:p-[32px] relative`}
    >
      {testimony.user.special && (
        <img
          className="absolute hidden sm:block z-0 top-0 right-15 w-auto h-26"
          src="/bg-pattern-quotation.svg"
        />
      )}
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
