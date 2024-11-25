import PropTypes from "prop-types";
import styles from "./RecipeCardWrapperText.module.css";

export default function RecipeCardWrapperText({ children }) {
  return <div className={styles["recipe-card__wrapper"]}>{children}</div>;
}

RecipeCardWrapperText.propTypes = {
  children: PropTypes.node.isRequired,
};
