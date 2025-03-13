type Testimony = {
  testimony: string;
  description: string;
};

type TestimonyTextProps = {
  testimony: Testimony;
};

export default function TestimonyText({ testimony }: TestimonyTextProps) {
  return <div>TestimonyText</div>;
}
