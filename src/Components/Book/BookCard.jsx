import styles from "./BookCard.module.css";
import { books } from "../../Constants/mockData";
import heartWhite from "../../assets/icons/heart-white.png";
function Book() {
  return (
    <>
      <div>
        {books.map((item) => {
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
                <img src={heartWhite}></img>
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </>
  );
}

export default Book;
