import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="header_title">EL Arcoiris de los Sueños</h1>
      <ul className="header_list">
        <Link className="header_pages" to="/HomePage">
          Inicio
        </Link>
        <Link className="header_pages" to="/AboutMe">
          Sobre mí
        </Link>
        <Link className="header_pages" to="/Books0_1">
          Cuentos 0-1
        </Link>
        <Link className="header_pages" to="/Books1_2">
          Cuentos 1-2
        </Link>
        <Link className="header_pages" to="/Books2_3">
          Cuentos 2-3
        </Link>
        <Link className="header_pages" to="/Contact">
          Contacto
        </Link>
        <Link className="header_pages" to="/Events">
          Eventos
        </Link>
      </ul>
    </header>
  );
}

export default Header;
