import React, { useState } from "react";
import "./login.css";
import BarraSuperior from "../../components/barraSuperior";
import Rodape from "../../components/rodape";
import colors from "../../assets/colors";
import CampoTexto from "../../components/campoTexto";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Obter os dados do localStorage
    const agendamentosStorage =
      JSON.parse(localStorage.getItem("agendamentos")) || {};

    // Transformar o e-mail em maiúsculas para comparação
    const emailUpperCase = email.toUpperCase();

    // Verificar se há agendamentos associados ao email informado
    if (agendamentosStorage[emailUpperCase]) {
      // Navegar para a tela de agendamentos passando os dados como estado
      navigate("/agendamentos", {
        state: { agendamentos: agendamentosStorage[emailUpperCase] },
      });
    } else {
      alert("Não há agendamentos associados a este email.");
    }
  };

  return (
    <div className="container" style={{ background: colors.background }}>
      <BarraSuperior />
      <main className="main-content">
        <div className="login-container">
          <div className="imagem-agendar-container" />
          <div className="campos-agendar-container">
            <CampoTexto
              label="Nome"
              value={nome}
              setValor={setNome}
              placeholder={"Seu nome"}
            />
            <CampoTexto
              label="Email"
              value={email}
              setValor={setEmail}
              placeholder={"Seu e-mail"}
            />
            <button className="botao-agendar" onClick={handleLogin}>
              Entrar
            </button>
            <button
              className="botao-visualiza-agendamentos"
              onClick={() => {
                window.location.href = "/agendar";
              }}
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
}

export default LoginScreen;
