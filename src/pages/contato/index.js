import React from "react";
import BarraSuperior from "../../components/barraSuperior";
import Rodape from "../../components/rodape";
import CampoTexto from "../../components/campoTexto";
import CampoTelefone from "../../components/campoTelefone";
import CampoTextoMultilinhas from "../../components/campoTextoMultilinhas";
import colors from "../../assets/colors";
import "./contato.css";

const ContatoScreen = () => {
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [assunto, setAssunto] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  return (
    <div className="container" style={{ background: colors.background }}>
      <BarraSuperior />
      <main className="main-content">
        <div className="contato-container">
          {/* Parte Verde */}
          <div
            className="info-contato-container1"
            style={{ background: colors.backgroundButton }}
          >
            <h2 style={{ marginBottom: 0 }}>Entre em Contato Conosco</h2>
            <p style={{ marginTop: 0 }}>E nós retornaremos para você.</p>
            <p style={{ marginBottom: 0 }}>
              📍 Av. Getúlio Vargas, 5000, São Luís, Maranhão
            </p>

            <p style={{ marginBottom: 0 }}>📧 contato@clinicagidaltibn.com</p>

            <p style={{ marginBottom: 0 }}>📞 +55 98 9 8877 6655</p>
          </div>

          {/* Parte Branca */}
          <div className="info-contato-container2">
            <div className="campos-nomes-telefone">
              <CampoTexto
                label="Nome"
                value={nome}
                setValor={setNome}
                placeholder={"Seu nome"}
              />
              <CampoTelefone
                label="Telefone"
                value={telefone}
                setValor={setTelefone}
                placeholder={"Seu telefone"}
              />
            </div>
            <CampoTexto
              label="Email"
              value={email}
              setValor={setEmail}
              placeholder={"Seu e-mail"}
            />
            <CampoTexto
              label="Assunto"
              value={assunto}
              setValor={setAssunto}
              placeholder={"Assunto"}
            />
            <CampoTextoMultilinhas
              label="Mensagem"
              value={mensagem}
              setValor={setMensagem}
              placeholder={"Mensagem"}
            />
            <button
              className="botao-visualiza-agendamentos"
              onClick={() => {
                window.location.href = "/agendar";
              }}
            >
              Submeter
            </button>
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
};

export default ContatoScreen;
