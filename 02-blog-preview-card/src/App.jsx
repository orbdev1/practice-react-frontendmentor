import "./App.css";
import Card from "./components/BlogCard";
import ImageCourse from "./assets/illustration-article.svg";
import ImageAvatar from "./assets/image-avatar.webp";

const data = {
  image: ImageCourse,
  nameCourse: "HTML & CSS foundations",
  description:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
  date: "2023-12-22",
  category: "Learning",
  autor: { avatar: ImageAvatar, name: "Greg Hooper" },
};

function App() {
  return (
    <>
      <Card.Container>
        <Card.Image img={data.image} />
        <Card.Text data={data} />
        <Card.Autor autor={data.autor} />
      </Card.Container>
    </>
  );
}

export default App;
