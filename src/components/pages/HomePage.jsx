import PropTypes from "prop-types";
import Header from "../layout/Header";
import Form from "../pages/Form";
import BooksList from "./BooksList";
import NewBooks from "./NewBooks";
import Footer from "../layout/Footer";

function HomePage({ books }) {
  return (
    <div>
      <Header />
      <Form></Form>
      <NewBooks></NewBooks>
      <BooksList books={books} />
      <Footer></Footer>
    </div>
  );
}

HomePage.propTypes = {
  books: PropTypes.array,
};
export default HomePage;
