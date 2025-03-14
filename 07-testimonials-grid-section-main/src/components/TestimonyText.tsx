type Testimony = {
  testimony: string;
  description: string;
};

type TestimonyTextProps = {
  text: Testimony;
};

export default function TestimonyText({ text }: TestimonyTextProps) {
  return (
    <div>
      <p>{text.testimony}</p>
      <p>{text.description}</p>
    </div>
  );
}
