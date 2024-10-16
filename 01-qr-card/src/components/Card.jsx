import styles from "./Card.module.css";
import qrImage from "../assets/image-qr-code.png";

export function Card() {
  return (
    <div className={styles.contarinerWrapper}>
      <div className={styles.imgCardContainer}>
        <img src={qrImage} alt="QR Code" />
      </div>
      <div className={styles.textCardContainer}>
        <div className={styles.textTitle}>
          <h2>Improve your front-end skills by building projects</h2>
        </div>
        <div className={styles.textDescription}>
          <span>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </span>
        </div>
      </div>
    </div>
  );
}
