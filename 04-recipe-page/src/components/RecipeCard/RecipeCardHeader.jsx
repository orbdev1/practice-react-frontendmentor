import styles from "./RecipeCardHeader.module.css";
import PropTypes from "prop-types";

export default function RecipeCardHeader({ name, description }) {
  return (
    <header className={styles["recipe-card__header"]}>
      <h1>{name}</h1>
      <p>{description}</p>
    </header>
  );
}

RecipeCardHeader.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
