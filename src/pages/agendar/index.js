import React, { useState } from "react";
import "./agendar.css";
import BarraSuperior from "../../components/barraSuperior";
import Rodape from "../../components/rodape";
import colors from "../../assets/colors";
import CampoTexto from "../../components/campoTexto";
import CampoData from "../../components/campoData";
import CampoHorario from "../../components/campoHorario";
import CampoTelefone from "../../components/campoTelefone";

function Agendar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");

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
            <div className="campos-agendar">
              <CampoTexto placeholder="Nome" valor={nome} setValor={setNome} />
              <CampoTexto
                placeholder="E-mail"
                valor={email}
                setValor={setEmail}
              />
              <CampoTelefone
                placeholder="Telefone"
                valor={telefone}
                setValor={setTelefone}
              />
              <CampoData placeholder="Data" valor={data} setValor={setData} />
              <CampoHorario
                placeholder="Horário"
                valor={horario}
                setValor={setHorario}
              />
              <button className="botao-agendar">Agendar</button>
            </div>
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  );
}

export default Agendar;
