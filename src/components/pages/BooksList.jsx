import PropTypes from "prop-types";

function BooksList(books) {
  return (
    <ul className="book_list">
      {books.map((book) => (
        <li key={book.id} className="book_item">
          <img className="book_image" src={book.image_url} alt={book.name} />
          <h2 className="book_title">{book.name}</h2>
          <p className="book_age">
            {book.ageRange.min} - {book.ageRange.max} años
          </p>
        </li>
      ))}
    </ul>
  );
}

BooksList.propTypes = {
  books: PropTypes.array,
};

export default BooksList;
