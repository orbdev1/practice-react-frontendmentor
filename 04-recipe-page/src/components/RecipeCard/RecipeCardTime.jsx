import styles from "./RecipeCardTime.module.css";

export default function RecipeCardTime({ time }) {
  let total = time.preparation + time.cooking;

  return (
    <section className={styles["recipe-card__time"]}>
      <h2>Prepartion time</h2>
      <ul>
        <li>
          <strong>Total</strong>: Approximately {total} minutes
        </li>
        <li>
          <strong>Preparation</strong>: {time.preparation} minutes
        </li>
        <li>
          <strong>Cooking</strong>: {time.cooking} minutes
        </li>
      </ul>
    </section>
  );
}
