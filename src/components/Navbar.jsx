import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>

      <div className="logo">
        <span>🍎</span>
        <h2>Smart Carbo</h2>
      </div>

      <ul>

        <li>
          <Link to="/">Início</Link>
        </li>

        <li>
          <Link to="/sobre">Projeto</Link>
        </li>

        <li>
          <Link to="/funcionalidades">Funcionalidades</Link>
        </li>

        <li>
          <Link to="/tecnologias">Tecnologias</Link>
        </li>

        <li>
          <Link to="/integrantes">Equipe</Link>
        </li>

        <li>
          <Link to="/contato">Contato</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;