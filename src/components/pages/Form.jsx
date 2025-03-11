import { Link } from "react-router-dom";

function Form() {
  return (
    <>
      <p>Si no lo encuentras, ponte en contacto conmigo y lo solucionaremos</p>
      <Link to="/Contact">
        <button className="btnContact">Contacto</button>
      </Link>
    </>
  );
}

export default Form;
