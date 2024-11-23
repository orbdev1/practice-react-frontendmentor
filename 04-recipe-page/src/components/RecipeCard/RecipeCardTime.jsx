import styles from "./RecipeCardTime.module.css";
import PropTypes from "prop-types";

export default function RecipeCardTime({ time }) {
  let total = time.preparation + time.cooking;

  return (
    <section className={styles["recipe-card__time"]}>
      <h2 className={styles["recipe-card__time-title"]}>Prepartion time</h2>
      <ul className={styles["recipe-card__time-list"]}>
        <li className={styles["recipe-card__time-item"]}>
          <span className={styles["recipe-card__time-text"]}>
            <strong className={styles["recipe-card__time-label"]}>Total</strong>
            : Approximately {total} minutes
          </span>
        </li>
        <li className={styles["recipe-card__time-item"]}>
          <span className={styles["recipe-card__time-text"]}>
            <strong className={styles["recipe-card__time-label"]}>
              Preparation
            </strong>
            : {time.preparation} minutes
          </span>
        </li>
        <li className={styles["recipe-card__time-item"]}>
          <span className={styles["recipe-card__time-text"]}>
            <strong className={styles["recipe-card__time-label"]}>
              Cooking
            </strong>
            : {time.cooking} minutes
          </span>
        </li>
      </ul>
    </section>
  );
}

RecipeCardTime.propTypes = {
  time: PropTypes.shape({
    preparation: PropTypes.number,
    cooking: PropTypes.number,
  }),
};
