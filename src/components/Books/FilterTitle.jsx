import PropTypes from "prop-types";

function FilterTitle({ handleInputFilterTitle }) {
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
          onInput={handleInputFilterTitle}
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
    </form>
  );
}

FilterTitle.propTypes = {
  handleInputFilterTitle: PropTypes.func,
};

export default FilterTitle;
