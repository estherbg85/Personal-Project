import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetch } from "./lib/hooks";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import Books0_1 from "./pages/Books0_1";
import Books1_2 from "./pages/Books1_2";
import Books2_3 from "./pages/Books2_3";

function App() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [bookOne, setBookOne] = useState("");
  const [autorOne, setAutorOne] = useState("");
  const { books, uniqueAutors } = useFetch();

  useEffect(() => {
    console.log("Autores únicos:", uniqueAutors);
  }, [uniqueAutors]);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleInputFilterTitle = (ev) => {
    ev.preventDefault();
    filterBookAutor(ev.target.value, autorOne);
  };

  const handleInputFilterAutor = (ev) => {
    const selectedAutor = ev.target.value;
    console.log("Autor seleccionado:", selectedAutor);
    setAutorOne(selectedAutor);
    filterBookAutor(bookOne, selectedAutor);
  };
  function filterBookAutor(book, autor) {
    setBookOne(book);
    setAutorOne(autor);

    // Verificar si books tiene datos antes de filtrar
    if (!books || books.length === 0) {
      setFilteredBooks([]);
      return;
    }

    console.log(books);
    const filtered = books.filter((b) => {
      const bookTitle = b.name ? b.name.toLowerCase().trim() : "";
      const bookAutor = b.autor ? b.autor.toLowerCase().trim() : "";
      const searchBook = book.toLowerCase().trim();
      const searchAutor = autor.toLowerCase().trim();

      return (
        (searchBook === "" || bookTitle.includes(searchBook)) &&
        (searchAutor === "" || bookAutor.includes(searchAutor))
      );
    });

    setFilteredBooks(filtered);
  }
  /*const { value } = ev.target;
    setBookOne(value); // Actualiza el estado del título ingresado

    // Si el valor del título no está vacío, filtra los libros por el título
    if (value) {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      // Si el campo de título está vacío, muestra todos los libros
      setFilteredBooks(books);
    }
  };

  const handleInputFilterAuthor = (ev) => {
    const { value } = ev.target;
    setAutorOne(value); // Actualiza el estado del autor ingresado

    // Filtra por autor si se ingresa un valor
    const filtered = books.filter((book) =>
      book.autor.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBooks(filtered);
  };*/

  const handleClickClear = (ev) => {
    //Limpiar campos al hacer click en borrar
    ev.preventDefault();
    setBookOne(""); // Limpiar el filtro de titulo
    setAutorOne(""); // Limpiar el filtro de autor
    setFilteredBooks(books); //Volver a mostrar todo el listado de cuentos
  };

  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/HomePage"
            element={
              <Layout>
                <HomePage
                  books={filteredBooks}
                  handleInputFilterTitle={handleInputFilterTitle}
                  handleFilterAutor={handleInputFilterAutor}
                  handleClickClear={handleClickClear}
                  bookOne={bookOne}
                  autorOne={autorOne}
                  uniqueAutors={uniqueAutors}
                />
              </Layout>
            }
          />
          <Route
            path="/AboutMe"
            element={
              <Layout>
                <AboutMe />
              </Layout>
            }
          />
          <Route
            path="/Contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/Books0_1"
            element={
              <Layout>
                <Books0_1 books={books} />
              </Layout>
            }
          />
          <Route
            path="/Books1_2"
            element={
              <Layout>
                <Books1_2 books={books} />
              </Layout>
            }
          />{" "}
          <Route
            path="/Books2_3"
            element={
              <Layout>
                <Books2_3 books={books} />
              </Layout>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
