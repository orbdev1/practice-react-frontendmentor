import "./App.css";
import Card from "./components/SocialLinksCard/Card";
import profileImage from "./assets/avatar-jessica.jpeg";

function App() {
  const people = {
    name: "Jessica Randall",
    location: "London, United Kingdom",
    message: '"Front-end developer and avid reader."',
    image: profileImage,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/orbdev1",
      },
      {
        name: "Frontend Mentor",
        url: "https://www.frontendmentor.io/profile/orbdev1",
      },
    ],
  };

  return <Card people={people} />;
}

export default App;