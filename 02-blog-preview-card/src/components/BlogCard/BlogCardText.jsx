import styles from "./BlogCardText.module.css";

export default function BlogCardText({ data }) {
  const fechaFormateada = new Date(data.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className={styles.textContainer}>
      <span className={styles.textCategory}>{data.category}</span>
      <span className={styles.textDate}>{"Published " + fechaFormateada}</span>
      <h2 className={styles.textNameCourse}>{data.nameCourse}</h2>
      <p className={styles.textDescriptionCourse}>{data.description}</p>
    </div>
  );
}
