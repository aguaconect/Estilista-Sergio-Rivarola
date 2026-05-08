import { useState } from "react";

function Turnos() {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("Corte");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [turno, setTurno] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setTurno({ nombre, servicio, fecha, hora });
  }

  return (
    <div>
      <h2>Solicitar turno</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label><br />
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label>Servicio</label><br />
          <select
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          >
            <option>Corte</option>
            <option>Color</option>
            <option>Peinado</option>
          </select>
        </div>

        <div>
          <label>Fecha</label><br />
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div>
          <label>Hora</label><br />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>

        <button type="submit">Solicitar turno</button>
      </form>

      {turno && (
        <div>
          <h3>Resumen del turno</h3>
          <p>Nombre: {turno.nombre}</p>
          <p>Servicio: {turno.servicio}</p>
          <p>Fecha: {turno.fecha}</p>
          <p>Hora: {turno.hora}</p>
        </div>
      )}
    </div>
  );
}

export default Turnos;