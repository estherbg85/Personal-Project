import PropTypes from "prop-types";

function BooksItem({ book }) {
  return (
    <>
      <img className="book_image" src={book.image_url} alt={book.name} />
      <h2 className="book_title">{book.name}</h2>
      <p className="book_age">
        {book.ageRange.min} - {book.ageRange.max} años
      </p>
    </>
  );
}

BooksItem.propTypes = {
  book: PropTypes.object,
};
export default BooksItem;
