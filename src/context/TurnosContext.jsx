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

  return (
    <TurnosContext.Provider value={{ turnos, agregarTurno }}>
      {children}
    </TurnosContext.Provider>
  );
}