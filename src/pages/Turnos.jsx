import { useState, useContext } from "react";
import { TurnosContext } from "../context/TurnosContext";

function Turnos() {
  const { agregarTurno, turnos } = useContext(TurnosContext);

  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("Corte");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    agregarTurno({
      id: Date.now(),
      nombre,
      servicio,
      fecha,
      hora,
      estado: "pendiente",
    });

    setEnviado(true);

    // limpiar formulario
    setNombre("");
    setServicio("Corte");
    setFecha("");
    setHora("");
  }

  return (
    <div>
      <h2>Solicitar turno</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />

        <select
          value={servicio}
          onChange={e => setServicio(e.target.value)}
        >
          <option>Corte</option>
          <option>Color</option>
          <option>Peinado</option>
        </select>

        <input
          type="date"
          value={fecha}
          onChange={e => setFecha(e.target.value)}
        />

        <input
          type="time"
          value={hora}
          onChange={e => setHora(e.target.value)}
        />

        <button type="submit">Solicitar turno</button>
      </form>

      {enviado && (
        <p>✅ Turno enviado correctamente. Nos comunicaremos a la brevedad.</p>
      )}

      <h3>Mis turnos</h3>

      {turnos.length === 0 && <p>No tenés turnos registrados</p>}

      {turnos.map(turno => (
        <div key={turno.id}>
          <p><strong>Servicio:</strong> {turno.servicio}</p>
          <p><strong>Fecha:</strong> {turno.fecha}</p>
          <p><strong>Hora:</strong> {turno.hora}</p>
          <p>
            <strong>Estado:</strong>{" "}
            {turno.estado === "pendiente" && "⏳ Pendiente"}
            {turno.estado === "aprobado" && "✅ Aprobado"}
            {turno.estado === "rechazado" && "❌ Rechazado"}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Turnos;