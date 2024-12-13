import React, { useEffect, useState } from "react";
import "./agendamentos.css";
import BarraSuperior from "../../components/barraSuperior";
import Rodape from "../../components/rodape";
import colors from "../../assets/colors";

function AgendamentosScreen() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  // Função para capitalizar o nome (Primeira letra de cada palavra maiúscula)
  const formatarNome = (nome) =>
    nome
      .toLowerCase()
      .split(" ")
      .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(" ");

  useEffect(() => {
    // Carregar os agendamentos do LocalStorage para o email atual
    const carregarAgendamentos = () => {
      const agendamentosStorage =
        JSON.parse(localStorage.getItem("agendamentos")) || {};

      // Encontre o último e-mail usado (primeira chave disponível no objeto)
      const emails = Object.keys(agendamentosStorage);
      if (emails.length > 0) {
        const emailUpperCase = emails[emails.length - 1]; // Último email armazenado
        const userAgendamentos = agendamentosStorage[emailUpperCase];

        setEmail(emailUpperCase.toLowerCase());
        setAgendamentos(userAgendamentos);

        // Preencher os campos com os dados do último agendamento
        const ultimoAgendamento = userAgendamentos[userAgendamentos.length - 1];
        setNome(formatarNome(ultimoAgendamento.nome || "")); // Formatado
        setTelefone(ultimoAgendamento.telefone || "");
      } else {
        setAgendamentos([]);
      }
    };

    carregarAgendamentos();
  }, []);

  return (
    <div className="container" style={{ background: colors.background }}>
      <BarraSuperior />
      <main className="main-content">
        <div className="agendamentos-container">
          <div className="info-usuario-container">
            <h4>{nome}</h4>
            <h4>{email}</h4>
            <h4>{telefone}</h4>
          </div>
          <div className="tabela-agendamentos-container">
            {agendamentos.length > 0 ? (
              <table className="tabela-agendamentos">
                <thead>
                  <tr>
                    <th>Especialidade</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {agendamentos.map((agendamento, index) => (
                    <tr key={index}>
                      <td>{agendamento.especialidade}</td>
                      <td>{agendamento.data}</td>
                      <td>{agendamento.horario}</td>
                      <td
                        style={{
                          color:
                            agendamento.status === "Aprovado"
                              ? "green"
                              : agendamento.status === "Em Análise"
                              ? "orange"
                              : agendamento.status === "Negado"
                              ? "red"
                              : "blue",
                        }}
                      >
                        {agendamento.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Não há agendamentos cadastrados.</p>
            )}
          </div>
          <div className="botao-agendar-container">
            <button
              className="botao-visualiza-agendamentos"
              onClick={() => {
                window.location.href = "/agendar";
              }}
            >
              Agendar consulta
            </button>
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
}

export default AgendamentosScreen;
