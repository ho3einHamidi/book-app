import styles from "./BookCard.module.css";
import whiteheart from "../../assets/icons/heart-white.png";
import redHeart from "../../assets/icons/heart-red.png";
import { useState } from "react";
function BookCard({ item }) {
  const [color, setColor] = useState(true);
  const changeIconColor = () => {
    setColor(!color);
  };
  return (
    <div key={item.id} className={styles["book-card"]}>
      <div className={styles["right-side"]}>
        <div className={styles.img}>
          <img src={item.image} />
        </div>
        <div className={styles.container}>
          <div className={styles.title}>
            <h3>{item.title}</h3>
            <h4>{item.author}</h4>
          </div>
          <div className={styles.details}>
            <p>{item.language}</p>
            <p>{item.pages} Pages</p>
          </div>
        </div>
      </div>
      <div className={styles.heart}>
        <img
          onClick={changeIconColor}
          src={color ? whiteheart : redHeart}
        ></img>
      </div>
    </div>
  );
}

export default BookCard;
