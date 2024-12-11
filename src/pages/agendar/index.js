import React, { useState } from "react";
import "./agendar.css";
import BarraSuperior from "../../components/barraSuperior";
import Rodape from "../../components/rodape";
import colors from "../../assets/colors";
import CampoTexto from "../../components/campoTexto";
import CampoData from "../../components/campoData";
import CampoHorario from "../../components/campoHorario";

function Agendar() {
  const [nome, setNome] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAgendar = () => {
    setShowModal(true); // Exibir o modal ao clicar no botão
  };

  const closeModal = () => {
    setShowModal(false); // Fechar o modal
  };

  return (
    <div
      className="agendar-container"
      style={{ background: colors.background }}
    >
      <BarraSuperior />
      <main className="main-content">
        <section className="agendar-subcontainer">
          <div className="campos-container">
            <div className="texto-container">
              <h1>Agende sua</h1>
              <h1>consulta</h1>
              <h1>agora mesmo</h1>
            </div>
            <div className="container-agendar">
              <div className="container-intermediario">
                <div className="campos-agendar">
                  <CampoTexto
                    label="Nome"
                    value={nome}
                    setValor={setNome}
                    placeholder={"Nome"}
                  />
                  <CampoTexto
                    label="Especialidade"
                    value={especialidade}
                    setValor={setEspecialidade}
                    placeholder={"Especialidade"}
                  />
                </div>
                <div className="campos-agendar">
                  <CampoTexto
                    label="Email"
                    value={email}
                    setValor={setEmail}
                    placeholder={"Seu e-mail"}
                  />
                  <CampoData
                    label="Data"
                    value={data}
                    setValor={setData}
                    placeholder={"Data"}
                  />
                  <CampoHorario
                    label="Horário"
                    value={horario}
                    setValor={setHorario}
                    placeholder={"Horário"}
                  />
                </div>
              </div>
              <button className="botao-agendar" onClick={handleAgendar}>
                Solicitar Agendamento
              </button>
              <button
                className="botao-visualiza-agendamentos"
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Visualizar seus agendamentos
              </button>
            </div>
          </div>
        </section>
      </main>
      <Rodape />
      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png" // Ícone do check
                alt="Ícone de sucesso"
              />
              <h2>Solicitação feita com sucesso!</h2>
            </div>
            <div className="modal-body">
              <p>
                Sua solicitação foi enviada com sucesso, aguarde o contato de
                confirmação ou acompanhe a situação em "Visualizar seus
                agendamentos".
              </p>
            </div>
            <div className="modal-footer">
              <button className="botao-fechar" onClick={closeModal}>
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Agendar;
