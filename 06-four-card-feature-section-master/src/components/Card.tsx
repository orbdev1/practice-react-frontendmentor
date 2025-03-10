import { CardProps } from "./types";

export default function Card({ tool }: CardProps) {
  let color: string = "border-t-cyan";
  if (tool.title === "Team Builder") {
    color = "border-t-red";
  } else if (tool.title === "Karma") {
    color = "border-t-orange";
  } else if (tool.title === "Calculator") {
    color = "border-t-blue";
  }
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-2xl">
      <div className={`${color} border-t-4 w-full p-8`}>
        <h3 className="text-xl font-semibold">{tool.title}</h3>
        <p className="text-[13px]">{tool.description}</p>
        <img
          className="w-16 h-16 ml-auto mt-10 mb-2"
          src={tool.image}
          alt={`Icon of ${tool.title}`}
        />
      </div>
    </article>
  );
}
