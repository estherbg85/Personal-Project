import PropTypes from "prop-types";
import BooksItem from "./BooksItem";

function BooksList({ books }) {
  const sortedBooks = [...books].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <ul className="book">
      {sortedBooks.map((book) => (
        <li key={book.id} className="book_list">
          <BooksItem book={book}></BooksItem>
        </li>
      ))}
    </ul>
  );
}

BooksList.propTypes = {
  books: PropTypes.array,
};

export default BooksList;
