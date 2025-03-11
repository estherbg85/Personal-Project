import { useState, useEffect } from "react";
import booksData from "../data/books.json";

function useFetch() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);
}

export { useFetch };
