import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Funcionalidades from "./pages/Funcionalidades";
import Tecnologias from "./pages/Tecnologias";
import Integrantes from "./pages/Integrantes";
import Contato from "./pages/Contato";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;