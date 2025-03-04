import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { useState, useEffect } from "react";
import booksData from "../data/books.json";
import AboutMe from "./pages/AboutMe";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/HomePage" element={<HomePage books={books} />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
