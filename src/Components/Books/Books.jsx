import { useState } from "react";

import { books } from "../../Constants/mockData";
import BookCard from "../Book/BookCard";
function Books() {
  const [liked, setLiked] = useState([]);
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
      {books.map((item) => {
        return (
          <BookCard
            key={item.id}
            item={item}
            handleLikedList={handleLikedList}
          />
        );
      })}
      <div>{!!liked.length && <div>ss</div>}</div>
    </>
  );
}

export default Books;
