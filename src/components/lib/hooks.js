import { useState, useEffect } from "react";
import booksData from "../../data/books.json";

function useFetch() {
  const [books, setBooks] = useState([]);
  const [uniqueAutors, setUniqueAutors] = useState([]);

  useEffect(() => {
    setBooks(booksData);

    const bookAutors = [...new Set(booksData.map((book) => book.autor))];

    setUniqueAutors(bookAutors);
  }, []);

  return { books, uniqueAutors };
}

export { useFetch };
