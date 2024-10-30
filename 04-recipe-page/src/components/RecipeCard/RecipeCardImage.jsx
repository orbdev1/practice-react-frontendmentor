import styles from "./RecipeCardImage.module.css";

export default function RecipeCardImage({ image, name }) {
  return (
    <figure className={styles.edit}>
      <img src={image} alt={"Image of " + name} />
    </figure>
  );
}
