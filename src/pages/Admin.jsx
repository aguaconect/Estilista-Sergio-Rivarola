import { useContext, useState } from "react";
import { TurnosContext } from "../context/TurnosContext";

function Admin() {
  const { turnos, actualizarEstado, eliminarTurno } = useContext(TurnosContext);
  const [filtro, setFiltro] = useState("todos");
  const turnosFiltrados =
    filtro === "todos"
        ? turnos
        : turnos.filter(turno => turno.estado === filtro);

  return (
    <div>
      <h2>Panel de administración</h2>

      <div>
        <button onClick={() => setFiltro("todos")}>Todos</button>
        <button onClick={() => setFiltro("pendiente")}>Pendientes</button>
        <button onClick={() => setFiltro("aprobado")}>Aprobados</button>
        <button onClick={() => setFiltro("rechazado")}>Rechazados</button>
      </div>

      {turnos.length === 0 && (
        <p>No hay turnos registrados</p>
      )}

      {turnosFiltrados.map(turno => (
        <div key={turno.id}>
          <p><strong>Nombre:</strong> {turno.nombre}</p>
          <p><strong>Servicio:</strong> {turno.servicio}</p>
          <p><strong>Fecha:</strong> {turno.fecha}</p>
          <p><strong>Hora:</strong> {turno.hora}</p>
          <p>
            <strong>Estado:</strong>{" "}
            {turno.estado}
          </p>

          {turno.estado === "pendiente" && (
            <>
              <button
                onClick={() =>
                  actualizarEstado(turno.id, "aprobado")
                }
              >
                Aprobar
              </button>

              <button
                onClick={() =>
                  actualizarEstado(turno.id, "rechazado")
                }
              >
                Rechazar
              </button>

              <button
                onClick={() => eliminarTurno(turno.id)}
              >
                🗑 Eliminar
              </button>
              
            </>
          )}

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Admin;