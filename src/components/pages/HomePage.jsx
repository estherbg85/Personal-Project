import Header from "../layout/Header";
import BooksList from "./BooksList";
import NewBooks from "./NewBooks";

function HomePage({ books }) {
  return (
    <div>
      <Header />
      <section>
        <h2 className="form">¿Buscas un libro en concreto?</h2>
        <form className="form">
          <div>
            <label className="form_filter" htmlFor="name">
              Titulo
            </label>
            <input
              className="form_title"
              autoComplete="off"
              type="search"
              name="title"
            />
            <label className="form_filter" htmlFor="autor">
              Autor
            </label>
            <select
              className="form_autor"
              id="autorFilter"
              placeholder="Autor"
            ></select>
          </div>
        </form>
        <p>
          Si no lo encuentras, ponte en contacto conmigo y lo solucionaremos
        </p>
        <button className="btnContact">Contacto</button>
      </section>
      <NewBooks></NewBooks>
      <BooksList books={books} />
    </div>
  );
}

export default HomePage;
