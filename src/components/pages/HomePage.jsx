import PropTypes from "prop-types";
import Header from "../layout/Header";
import Form from "./Form";
import BooksList from "./BooksList";
import NewBooks from "./NewBooks";
import Footer from "../layout/Footer";
import FilterTitle from "../books/FilterTitle";

function HomePage({
  books,
  handleInputFilterTitle,
  handleFilterAutor,
  handleClickClear,
  bookOne,
  autorOne,
}) {
  return (
    <div>
      <Header />
      <FilterTitle
        handleInputFilterTitle={handleInputFilterTitle}
        handleFilterAutor={handleFilterAutor}
        handleClickClear={handleClickClear}
        bookOne={bookOne}
        autorOne={autorOne}
      ></FilterTitle>
      <Form></Form>
      <NewBooks></NewBooks>
      <BooksList books={books} />
      <Footer></Footer>
    </div>
  );
}

HomePage.propTypes = {
  books: PropTypes.array,
  handleInputFilterTitle: PropTypes.func,
  handleFilterAutor: PropTypes.func,
  handleClickClear: PropTypes.func,
  bookOne: PropTypes.string,
  autorOne: PropTypes.string,
};
export default HomePage;
