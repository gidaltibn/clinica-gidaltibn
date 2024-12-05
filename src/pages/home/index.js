import React from "react";
import "./home.css";
import BarraSuperior from "../../components/barraSuperior";
import Rodape from "../../components/rodape";
import Card from "../../components/card";
import pediatriaIcon from "../../assets/ped-button.png";
import neuroIcon from "../../assets/neuro-button.png";
import fonoIcon from "../../assets/fono-button.png";
import fisioIcon from "../../assets/fisio-button.png";
import colors from "../../assets/colors";

function Home() {
  return (
    <div className="home-container" style={{ background: colors.background }}>
      <BarraSuperior />
      <main className="main-content">
        <section className="intro">
          <div className="intro-content">
            <h2 style={{ color: colors.verdeEscuroFonte }}>Saúde Familiar</h2>
            <h1 style={{ color: colors.verdeClaroFonte }}>É nosso foco</h1>
            <p>
              Fazer sempre um checkup pode prolongar sua vida e de sua família.
            </p>
          </div>
        </section>
        <section className="specialties">
          <div className="specialty-icons">
            <Card image={pediatriaIcon} altText="Pediatra" />
            <Card image={neuroIcon} altText="Neurologista" />
            <Card image={fonoIcon} altText="Fonoaudiólogo" />
            <Card image={fisioIcon} altText="Fisioterapeuta" />
          </div>
          <p>Especialidades</p>
        </section>
      </main>
      <Rodape />
      {/* <div className="limites"></div> */}
    </div>
  );
}

export default Home;
