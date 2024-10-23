import styles from "./Button.module.css";

export default function Button({ text, url }) {
  return (
    <a
      className={styles.link}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
