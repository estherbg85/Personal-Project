import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import { useFetch } from "./lib/hooks";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";

function App() {
  const [bookOne, setBookOne] = useState("");
  const [authorOne, setAuthorOne] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { books } = useFetch();

  const handleInputFilterTitle = (ev) => {
    //Filtrar por titulo
    ev.preventDefault();
    filteredBookAuthor(ev.target.value.toLowerCase(), authorOne);
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
                books={books}
                handleInputFilterTitle={handleInputFilterTitle}
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
