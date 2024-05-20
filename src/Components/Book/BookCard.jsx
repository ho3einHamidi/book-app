import styles from "./BookCard.module.css";
import whiteheart from "../../assets/icons/heart-white.png";
import redHeart from "../../assets/icons/heart-red.png";
import { useState } from "react";
function BookCard({ item, handleLikedList }) {
  const { image, title, author, language, pages } = item;
  const [color, setColor] = useState(false);
  const addToFavorite = () => {
    handleLikedList(item, color);
    setColor(!color);
  };
  return (
    <div className={styles["book-card"]}>
      <div className={styles["right-side"]}>
        <div className={styles.img}>
          <img src={image} />
        </div>
        <div className={styles.container}>
          <div className={styles.title}>
            <h3>{title}</h3>
            <h4>{author}</h4>
          </div>
          <div className={styles.details}>
            <p>{language}</p>
            <p>{pages} Pages</p>
          </div>
        </div>
      </div>
      <div className={styles.heart}>
        <img onClick={addToFavorite} src={!color ? whiteheart : redHeart}></img>
      </div>
    </div>
  );
}

export default BookCard;
