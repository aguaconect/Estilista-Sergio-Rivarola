import { useContext } from "react";
import { TurnosContext } from "../context/TurnosContext";

function Admin() {
  const { turnos, actualizarEstado } = useContext(TurnosContext);

  return (
    <div>
      <h2>Panel de administración</h2>

      {turnos.length === 0 && (
        <p>No hay turnos registrados</p>
      )}

      {turnos.map(turno => (
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
            </>
          )}

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Admin;