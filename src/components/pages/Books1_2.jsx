import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Books1_2({ books }) {
  const [booksFilter, setBooksFilter] = useState([]);

  useEffect(() => {
    // Filtrar los libros cuando el componente se monta
    const booksAgeRange = books.filter(
      (book) => book.ageRange.min === 1 && book.ageRange.max === 2
    );
    setBooksFilter(booksAgeRange);
  }, [books]); // El array vacío asegura que solo se ejecute al montar el componente

  return (
    <div>
      <h1>Libros para 1_2 años</h1>
      <ul className="book">
        {booksFilter.length === 0 ? (
          <p>No hay libros disponibles para este rango de edad.</p>
        ) : (
          booksFilter.map((book) => (
            <li className="book_list" key={book.id}>
              <h2 className="book_title"> {book.name}</h2>
              <img
                className="book_image"
                src={book.image_url}
                alt={book.name}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

Books1_2.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Books1_2;
