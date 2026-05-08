import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Turnos from "./pages/Turnos";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/turnos" element={<Turnos />} />
      </Routes>
    </div>
  );
}

export default App;