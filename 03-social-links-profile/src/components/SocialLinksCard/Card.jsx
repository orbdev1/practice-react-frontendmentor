import Button from "../Button/Button";
import styles from "./Card.module.css";

export default function Card({ people }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={people.image} alt="" />
      </div>
      <div className={styles.informationContainer}>
        <h2>{people.name}</h2>
        <span>{people.location}</span>
        <p>{people.message}</p>
      </div>
      <div className={styles.socialLinksContainer}>
        {people.social.map((social, i) => (
          <Button key={i} text={social.name} url={social.url} />
        ))}
      </div>
    </div>
  );
}
