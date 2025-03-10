import SectionTools from "./components/SectionTools";

function App() {
  const tools = [
    {
      title: "Team Builder",
      description:
        "Scans our talent network to create the optimal team for your project",
      image: "icon-team-builder.svg",
    },
    {
      title: "Supervisor",
      description: "Monitors activity to identify project roadblocks",
      image: "icon-supervisor.svg",
    },
    {
      title: "Calculator",
      description:
        "Uses data from past projects to provide better delivery estimates",
      image: "icon-calculator.svg",
    },
    {
      title: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
      image: "icon-karma.svg",
    },
  ];

  return (
    <div className="h-screen">
      <SectionTools tools={tools} />
    </div>
  );
}

export default App;
