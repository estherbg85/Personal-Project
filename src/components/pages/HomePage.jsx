import PropTypes from "prop-types";
import Form from "./Form";
import BooksList from "./BooksList";
import NewBooks from "./NewBooks";
import FilterTitle from "../books/FilterTitle";

function HomePage({
  books,
  handleInputFilterTitle,
  handleInputFilterAutor,
  handleClickClear,
  bookOne,
  autorOne,
  uniqueAutors,
}) {
  return (
    <div>
      <FilterTitle
        handleInputFilterTitle={handleInputFilterTitle}
        handleFilterAutor={handleInputFilterAutor}
        handleClickClear={handleClickClear}
        bookOne={bookOne}
        autorOne={autorOne}
        uniqueAutors={uniqueAutors}
      />
      <Form />
      <NewBooks />
      <BooksList books={books} />
    </div>
  );
}

HomePage.propTypes = {
  books: PropTypes.array.isRequired,
  handleInputFilterTitle: PropTypes.func.isRequired, // Asegúrate de que esta función es requerida
  handleInputFilterAutor: PropTypes.func, // Si es necesaria, asegúrate de que es requerida
  handleClickClear: PropTypes.func.isRequired,
  bookOne: PropTypes.string.isRequired,
  autorOne: PropTypes.string.isRequired,
  uniqueAutors: PropTypes.arrayOf(PropTypes.string),
};

export default HomePage;
