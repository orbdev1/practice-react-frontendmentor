import styles from "./RecipeCardContainer.module.css";

export default function RecipeCardContainer({ children }) {
  return <article className={styles.recipeCardContainer}>{children}</article>;
}
