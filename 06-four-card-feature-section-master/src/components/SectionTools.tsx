import Card from "./Card";
import { ToolsProps } from "./types";

export default function SectionTools({ tools }: ToolsProps) {
  return (
    <section className="p-8 pt-14 font-poppins text-grey-500 mx10 flex flex-col items-center">
      <header className="p-1 text-center">
        <h1 className="text-2xl font-extralight sm:text-4xl">
          Reliable, efficient delivery
        </h1>
        <h2 className="text-[23.8px] font-semibold sm:text-4xl">
          Powered by Technology
        </h2>
        <p className="mt-3 leading-5 sm:max-w-lg">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>

      <div className="mt-14 grid sm:grid-cols-3 sm:grid-rows-4 gap-8 max-w-6xl">
        <div className="sm:row-span-2 sm:col-start-2">
          <Card tool={tools[0]} />
        </div>
        <div className="sm:row-span-2 sm:col-start-1">
          <Card tool={tools[1]} />
        </div>
        <div className="sm:row-span-2 sm:col-start-3">
          <Card tool={tools[2]} />
        </div>
        <div className="sm:row-span-2 sm:col-start-2">
          <Card tool={tools[3]} />
        </div>
      </div>
    </section>
  );
}
