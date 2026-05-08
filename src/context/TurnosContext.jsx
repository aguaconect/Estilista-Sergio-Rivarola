import { createContext, useState, useEffect } from "react";

export const TurnosContext = createContext();

export function TurnosProvider({ children }) {
  const [turnos, setTurnos] = useState(() => {
    const guardados = localStorage.getItem("turnos");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem("turnos", JSON.stringify(turnos));
  }, [turnos]);

  function agregarTurno(turno) {
    setTurnos(prev => [...prev, turno]);
  }

  function actualizarEstado(id, nuevoEstado) {
    setTurnos(prev =>
      prev.map(turno =>
        turno.id === id
          ? { ...turno, estado: nuevoEstado }
          : turno
      )
    );
  }

  function eliminarTurno(id) {
    setTurnos(prev =>
        prev.filter(turno => turno.id !== id)
    );
  }

  return (
    <TurnosContext.Provider
      value={{ turnos, agregarTurno, actualizarEstado, eliminarTurno }}
    >
      {children}
    </TurnosContext.Provider>
  );
}