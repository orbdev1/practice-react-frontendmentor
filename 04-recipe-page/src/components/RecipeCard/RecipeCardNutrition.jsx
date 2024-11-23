import styles from "./RecipeCardNutrition.module.css";
import PropTypes from "prop-types";

function capitalLetter(string) {
  const firstLetter = string.charAt(0);
  const upperCase = firstLetter.toUpperCase();
  const completeString = string.slice(1);

  return upperCase + completeString;
}

export default function RecipeCardNutrition({ nutrition }) {
  return (
    <section className={styles["recipe-card__nutrition"]}>
      <h2 className={styles["recipe-card__nutrition-title"]}>Nutrition</h2>
      <span className={styles["recipe-card__nutrition-description"]}>
        The table below shows nutritional values per serving without the
        additional fillings.
      </span>
      <table className={styles["recipe-card__nutrition-table"]}>
        <tbody>
          {Object.entries(nutrition).map(([key, value]) => (
            <tr key={key} className={styles["recipe-card__nutrition-table-tr"]}>
              <td
                className={`${styles["recipe-card__nutrition-table-td"]} ${styles["recipe-card__nutrition-table-td--smaller"]}`}
              >
                {capitalLetter(key)}
              </td>
              <td
                className={`${styles["recipe-card__nutrition-table-td"]} ${styles["recipe-card__nutrition-table-td--bolder"]}`}
              >
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

RecipeCardNutrition.propTypes = {
  nutrition: PropTypes.objectOf(PropTypes.string),
};
