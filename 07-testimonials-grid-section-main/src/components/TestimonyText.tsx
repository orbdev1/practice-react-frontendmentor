type Testimony = {
  testimony: string;
  description: string;
};

type TestimonyTextProps = {
  text: Testimony;
  quoteColor: string;
  descriptionColor: string;
};

export default function TestimonyText({
  text,
  quoteColor,
  descriptionColor,
}: TestimonyTextProps) {
  return (
    <div className="mt-3">
      <p className={`${quoteColor} font-semibold text-[20px] leading-[25px]`}>
        {text.testimony}
      </p>
      <p className={`${descriptionColor} mt-3 text-[13px] leading-[18px]`}>
        {text.description}
      </p>
    </div>
  );
}
