import styles from "./BlogCardContainer.module.css";

export default function BlogCardContainer({ children }) {
  return <div className={styles.blogContainer}>{children}</div>;
}
