import { useState } from "react";

import { books as booksData } from "../../Constants/mockData";
import BookCard from "../Book/BookCard";
import SideCard from "../SideCard/SideCard";
import styles from "./Books.module.css";
import SearchBar from "../SearchBar/SearchBar";
function Books() {
  const [books, setBooks] = useState(booksData);
  const [liked, setLiked] = useState([]);
  const changeInputHandler = (value) => {
    if (value) {
      const newBooks = booksData.filter((book) =>
        book.title.toLowerCase().includes(value)
      );
      console.log(newBooks, "===============");
      setBooks(newBooks);
    } else {
      setBooks(booksData);
    }
  };

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  return (
    <>
      <SearchBar changeInputHandler={changeInputHandler} />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((item) => {
            return (
              <BookCard
                key={item.id}
                item={item}
                handleLikedList={handleLikedList}
              />
            );
          })}
        </div>
        <div className={styles.favorite}>
          {!!liked.length && (
            <div>
              <h4>Favorites</h4>
              {liked.map((book) => (
                <SideCard key={book.id} data={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Books;
