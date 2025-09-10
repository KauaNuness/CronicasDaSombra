import { Link } from "react-router-dom";

export default function BarraNavegacao() {
  return (
    <nav style={{ padding: "1rem", background: "#111", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 1rem", textDecoration: "none", color: "#fff" }}>Início</Link>
      <Link to="/personagens" style={{ margin: "0 1rem", textDecoration: "none", color: "#fff" }}>Personagens</Link>
      <Link to="/historia" style={{ margin: "0 1rem", textDecoration: "none", color: "#fff" }}>História</Link>
      <Link to="/sobre" style={{ margin: "0 1rem", textDecoration: "none", color: "#fff" }}>Sobre</Link>
    </nav>
  );
}
