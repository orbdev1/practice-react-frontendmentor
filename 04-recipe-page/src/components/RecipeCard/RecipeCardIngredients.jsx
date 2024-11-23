import styles from "./RecipeCardIngredients.module.css";
import PropTypes from "prop-types";

export default function RecipeCardIngredients({ ingredients }) {
  return (
    <section className={styles["recipe-card__ingredients"]}>
      <h2 className={styles["recipe-card__ingredients-title"]}>Ingredients</h2>
      <ul className={styles["recipe-card__ingredients-list"]}>
        {ingredients.map((ingredient, index) => (
          <li key={index} className={styles["recipe-card__ingredients-item"]}>
            <span className={styles["recipe-card__ingredients-text"]}>
              {ingredient}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

RecipeCardIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
};
