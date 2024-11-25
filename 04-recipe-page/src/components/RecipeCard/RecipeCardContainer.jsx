import PropTypes from "prop-types";
import styles from "./RecipeCardContainer.module.css";

export default function RecipeCardContainer({ children }) {
  return <article className={styles.recipeCardContainer}>{children}</article>;
}

RecipeCardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
