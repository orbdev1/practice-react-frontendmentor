import PropTypes from "prop-types";
import styles from "./RecipeCardImage.module.css";

export default function RecipeCardImage({ image, name }) {
  return (
    <figure className={styles["recipe-card__image"]}>
      <img
        src={image}
        alt={"Image of " + name}
        className={styles["recipe-card__image-img"]}
      />
    </figure>
  );
}

RecipeCardImage.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
