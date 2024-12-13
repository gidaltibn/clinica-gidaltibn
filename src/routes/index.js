import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ServicosScreen from "../pages/servicos";
import Agendar from "../pages/agendar";
import Contato from "../pages/contato";
import LoginScreen from "../pages/login";
import AgendamentosScreen from "../pages/agendamentos";

const Rotas = () => (
  // Altere "AppRoutes" para "Rotas"
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/servicos" element={<ServicosScreen />} />
    <Route path="/agendar" element={<Agendar />} />
    <Route path="/contato" element={<Contato />} />
    <Route path="/login" element={<LoginScreen />} />
    <Route path="/agendamentos" element={<AgendamentosScreen />} />
  </Routes>
);

export default Rotas;
