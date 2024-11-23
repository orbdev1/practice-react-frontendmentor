import styles from "./RecipeCardInstructions.module.css";
import PropTypes from "prop-types";

export default function RecipeCardInstructions({ instructions }) {
  instructions.sort((a, b) => a.step - b.step);

  return (
    <section className={styles["recipe-card__instructions"]}>
      <h2 className={styles["recipe-card__instructions-title"]}>
        Instructions
      </h2>
      <ol className={styles["recipe-card__instructions-list"]}>
        {instructions.map(({ step, title, description }) => (
          <li key={step} className={styles["recipe-card__instructions-item"]}>
            <span className={styles["recipe-card__instructions-text"]}>
              <strong className={styles["recipe-card__instructions-strong"]}>
                {title}
              </strong>
              : {description}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

RecipeCardInstructions.propTypes = {
  instructions: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
