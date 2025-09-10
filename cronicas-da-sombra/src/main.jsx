import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Inicio from "./pages/Inicio";
import Personagens from "./pages/Personagens";
import Historia from "./pages/Historia";
import Sobre from "./pages/Sobre";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="personagens" element={<Personagens />} />
          <Route path="historia" element={<Historia />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
