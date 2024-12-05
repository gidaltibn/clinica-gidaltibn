import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ServicosScreen from "../pages/servicos";
import Agendar from "../pages/agendar";
import Contato from "../pages/contato";

const Rotas = () => (
  // Altere "AppRoutes" para "Rotas"
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/servicos" element={<ServicosScreen />} />
    <Route path="/agendar" element={<Agendar />} />
    <Route path="/contato" element={<Contato />} />
  </Routes>
);

export default Rotas;
