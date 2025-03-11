import PropTypes from "prop-types";

function FilterAutor({ autors = [], onChange, autorOne }) {
  return (
    <select
      className="form_input"
      id="autorFilter"
      onChange={onChange}
      value={autorOne}
    >
      <option value="">Autores</option>
      {autors.length > 0
        ? autors.map((autor) => (
            <option key={autor} value={autor}>
              {autor}
            </option>
          ))
        : null}
    </select>
  );
}

FilterAutor.propTypes = {
  autors: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  autorOne: PropTypes.string,
};
export default FilterAutor;
