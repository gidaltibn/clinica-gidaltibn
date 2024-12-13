import React, { useState, useEffect } from "react";
import "./agendar.css";
import BarraSuperior from "../../components/barraSuperior";
import Rodape from "../../components/rodape";
import colors from "../../assets/colors";
import CampoTexto from "../../components/campoTexto";
import CampoData from "../../components/campoData";
import CampoHorario from "../../components/campoHorario";
import CampoTelefone from "../../components/campoTelefone";
import CampoComboBox from "../../components/campoComboBox";
import DadosEspecialidades from "../../datas/DadosEspecialidades";

function Agendar() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAgendar = () => {

    console.log(nome, telefone, especialidade, email, data, horario);
    if (!nome || !telefone || !especialidade || !email || !data || !horario) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    // // Converter o email para maiúsculas para padronização
    const emailUpperCase = email.toUpperCase();

    // // Recuperar os agendamentos já salvos no localStorage
    const agendamentosStorage =
      JSON.parse(localStorage.getItem("agendamentos")) || {};

    // // Verificar se já existem agendamentos para o email
    if (!agendamentosStorage[emailUpperCase]) {
      agendamentosStorage[emailUpperCase] = [];
    }

    // // Adicionar o novo agendamento
    agendamentosStorage[emailUpperCase].push({
      nome: nome.toUpperCase(),
      telefone: telefone,
      especialidade: especialidade,
      data,
      horario,
      status: "Em análise", // Campo oculto
    });

    // // Salvar os dados atualizados no localStorage
    localStorage.setItem("agendamentos", JSON.stringify(agendamentosStorage));

    // Exibir o modal de sucesso
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [showModal]);

  const especialidades = DadosEspecialidades().map((item) => item.nome);

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
                    setValor={(valor) => setNome(valor.toUpperCase())}
                    placeholder={"Nome"}
                  />
                  <CampoTelefone
                    label="Telefone"
                    value={telefone}
                    setValor={(valor) => setTelefone(valor.toUpperCase())}
                    placeholder={"Telefone"}
                  />
                  <CampoComboBox
                    options={especialidades}
                    placeholder="Selecione uma especialidade"
                    valor={especialidade}
                    setValor={(valor) => setEspecialidade(valor.toUpperCase())}
                  />
                </div>
                <div className="campos-agendar">
                  <CampoTexto
                    label="Email"
                    value={email}
                    setValor={(valor) => setEmail(valor.toUpperCase())}
                    placeholder={"Seu e-mail"}
                  />
                  <CampoData
                    label="Data"
                    value={data}
                    setValor={(valor) => setData(valor.toUpperCase())}
                    placeholder={"Data"}
                  />
                  <CampoHorario
                    label="Horário"
                    value={horario}
                    setValor={(valor) => setHorario(valor.toUpperCase())}
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
        <div
          className="modal-overlay"
          aria-hidden={!showModal}
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="modal-content">
            <div className="modal-header">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="Ícone de sucesso"
              />
              <h2 id="modal-title">Solicitação feita com sucesso!</h2>
            </div>
            <div className="modal-body">
              <p id="modal-description">
                Sua solicitação foi enviada com sucesso, aguarde o contato de
                confirmação ou acompanhe a situação em "Visualizar seus
                agendamentos".
              </p>
            </div>
            <div className="modal-footer">
              <button className="botao-fechar" onClick={closeModal} autoFocus>
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
