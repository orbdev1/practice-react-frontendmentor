import PropTypes from "prop-types";
import styles from "./RecipeCardHeader.module.css";

export default function RecipeCardHeader({ name, description }) {
  return (
    <header className={styles["recipe-card__header"]}>
      <h1 className={styles["recipe-card__header-title"]}>{name}</h1>
      <p className={styles["recipe-card__header-description"]}>{description}</p>
    </header>
  );
}

RecipeCardHeader.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
