import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <strong>Estilista Sergio Rivarola</strong>
      </div>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/galeria">Galería</Link>
        </li>
        <li>
          <Link to="/turnos">Turnos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;