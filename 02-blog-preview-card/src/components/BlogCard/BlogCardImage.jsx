import styles from "./BlogCardImage.module.css";

export default function BlogCardImage({ img }) {
  return (
    <div className={styles.imgContainer}>
      <img src={img} alt="Image of Blog" />
    </div>
  );
}
