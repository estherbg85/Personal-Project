import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "./lib/hooks";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";

function App() {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [bookOne, setBookOne] = useState("");
  const [autorOne, setAutorOne] = useState("");
  const { books } = useFetch();

  const handleInputFilterTitle = (ev) => {
    const { value } = ev.target;
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
  };

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
              <HomePage
                books={filteredBooks.length !== 0 ? filteredBooks : books}
                handleInputFilterTitle={handleInputFilterTitle}
                handleInputFilterAuthor={handleInputFilterAuthor}
                handleClickClear={handleClickClear}
                bookOne={bookOne}
                authorOne={autorOne}
              />
            }
          />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
