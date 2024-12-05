import React from "react";
import "./agendar.css";
import BarraSuperior from "../../components/barraSuperior";
import Rodape from "../../components/rodape";
import colors from "../../assets/colors";

function Agendar() {
  return (
    <div className="agendar-container" style={{ background: colors.background }}>
      <BarraSuperior />
      <main className="main-content">
        <section className="agendar-subcontainer">
        </section>
      </main>
      <Rodape />
    </div>
  );
}

export default Agendar;
