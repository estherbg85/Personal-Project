import PropTypes from "prop-types";

function FilterAutor({ uniqueAutors = [], handleFilterAutor, autorOne }) {
  const isValidAutor = uniqueAutors.includes(autorOne) ? autorOne : "";

  return (
    <select
      className="form_input"
      id="autorFilter"
      onChange={handleFilterAutor}
      value={isValidAutor}
    >
      <option value="">Autor</option>
      {uniqueAutors.length > 0 ? (
        uniqueAutors.map((autor) => (
          <option key={autor} value={autor}>
            {autor}
          </option>
        ))
      ) : (
        <option disabled>No hay autores disponibles</option>
      )}
    </select>
  );
}

FilterAutor.propTypes = {
  uniqueAutors: PropTypes.arrayOf(PropTypes.string),
  handleFilterAutor: PropTypes.func,
  autorOne: PropTypes.string,
};
export default FilterAutor;
