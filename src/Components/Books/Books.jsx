import { books } from "../../Constants/mockData";
import BookCard from "../Book/BookCard";
function Books() {
  return (
    <>
      {books.map((item) => {
        return <BookCard key={item.id} item={item} />;
      })}
    </>
  );
}

export default Books;
