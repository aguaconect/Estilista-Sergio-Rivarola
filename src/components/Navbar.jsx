import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    setUser(null);
    navigate("/login");
  }

  return (
    <nav>
      <div>
        <strong>Estilista Sergio Rivarola</strong>
      </div>

      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/turnos">Turnos</Link></li>

        {!user && (
          <li><Link to="/login">Ingresar</Link></li>
        )}

        {user && (
          <>
            {user.role === "admin" && (
              <li>
                <Link to="/admin">Panel Admin</Link>
              </li>
            )}

            <li>
              {user.role === "admin" ? "Admin" : "Cliente"}: {user.email}
            </li>
            <li>
              <button onClick={handleLogout}>Salir</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;