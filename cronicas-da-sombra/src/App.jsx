import { Outlet } from "react-router-dom";
import BarraNavegacao from "./components/BarraNavegacao";

function App() {
  return (
    <>
      <BarraNavegacao />
      <Outlet />
    </>
  );
}

export default App;
