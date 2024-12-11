import React, { useState } from "react";
import "./login.css";
import BarraSuperior from "../../components/barraSuperior";
import Rodape from "../../components/rodape";
import colors from "../../assets/colors";
import CampoTexto from "../../components/campoTexto";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
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
            <button className="botao-agendar">Entrar</button>
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
