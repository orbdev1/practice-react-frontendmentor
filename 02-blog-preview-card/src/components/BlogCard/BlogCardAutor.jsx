import styles from "./BlogCardAutor.module.css";

export default function BlogCardAutor({ autor }) {
  return (
    <div className={styles.autorContainer}>
      <img src={autor.avatar} alt={"Image of " + autor.name} />
      <span>{autor.name}</span>
    </div>
  );
}
