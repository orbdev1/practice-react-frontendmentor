import RecipeCard from "./components/RecipeCard";
import Image from "./assets/image-omelette.jpeg";
import "./globals.css";
import "./App.css";

const recipe = {
  name: "Simple Omelette Recipe",
  image: Image,
  description:
    "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
  time: {
    preparation: 5,
    cooking: 5,
  },
  ingredients: [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ],
  instructions: [
    {
      step: 1,
      title: "Beat the eggs",
      description:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      step: 2,
      title: "Heat the pan",
      description:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      step: 3,
      title: "Cook the omelette",
      description:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      step: 4,
      title: "Add fillings (optional)",
      description:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      step: 5,
      title: "Fold and serve",
      description:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      step: 6,
      title: "Enjoy",
      description: "Serve hot, with additional salt and pepper if needed.",
    },
  ],
  nutrition: {
    calories: "277kcal",
    carbs: "0g",
    protein: "20g",
    fat: "22g",
  },
};

function App() {
  return (
    <>
      <RecipeCard.Container>
        <RecipeCard.Image image={recipe.image} name={recipe.name} />
        <RecipeCard.Header
          name={recipe.name}
          description={recipe.description}
        />
        <RecipeCard.Time time={recipe.time} />

        <RecipeCard.Ingredients ingredients={recipe.ingredients} />
        <hr />
        <RecipeCard.Instructions instructions={recipe.instructions} />
        <hr />
        <RecipeCard.Nutrition nutrition={recipe.nutrition} />
      </RecipeCard.Container>
    </>
  );
}

export default App;
