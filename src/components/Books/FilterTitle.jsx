import PropTypes from "prop-types";
import FilterAutor from "./FilterAutor";

function FilterTitle({
  handleInputFilterTitle,
  handleFilterAutor,
  handleClickClear,
  bookOne,
  autorOne,
  autors,
}) {

    const 
  return (
    <form className="form">
      <h2 className="form_search">¿Buscas un libro en concreto?</h2>
      <section className="form_display">
        <label className="form_filter" htmlFor="name">
          Titulo
        </label>
        <input
          className="form_input"
          autoComplete="off"
          type="search"
          name="title"
          onInput={handleInputFilterTitle}
          value={bookOne}
        />
        <label className="form_filter" htmlFor="autor">
          Autor
        </label>
        <FilterAutor
          autors={autors}
          onChange={handleFilterAutor}
          autorOne={autorOne}
        ></FilterAutor>
      </section>
      <button className="form_btn" onClick={handleClickClear}>
        Borrar
      </button>
    </form>
  );
}

FilterTitle.propTypes = {
  handleInputFilterTitle: PropTypes.func,
  handleFilterAutor: PropTypes.func,
  handleClickClear: PropTypes.func,
  bookOne: PropTypes.string,
  autorOne: PropTypes.string,
  autors: PropTypes.arrayOf(PropTypes.string),
};

export default FilterTitle;
