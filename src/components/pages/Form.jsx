import { Link } from "react-router-dom";

function Form() {
  return (
    <form className="form">
      <h2 className="form_search">¿Buscas un libro en concreto?</h2>
      <div className="form_display">
        <label className="form_filter" htmlFor="name">
          Titulo
        </label>
        <input
          className="form_input"
          autoComplete="off"
          type="search"
          name="title"
        />
        <label className="form_filter" htmlFor="autor">
          Autor
        </label>
        <select
          className="form_input"
          id="autorFilter"
          placeholder="Autor"
        ></select>
      </div>

      <p>Si no lo encuentras, ponte en contacto conmigo y lo solucionaremos</p>
      <Link to="/Contact">
        <button className="btnContact">Contacto</button>
      </Link>
    </form>
  );
}

export default Form;
