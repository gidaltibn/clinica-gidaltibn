import React, { useState, useEffect } from "react";
import BarraSuperior from "../../components/barraSuperior";
import Rodape from "../../components/rodape";
import "./servicos.css";
import colors from "../../assets/colors";
import DadosEspecialidades from "../../datas/DadosEspecialidades";
import ExibeServico from "../../components/exibeServico";

const ServicosScreen = () => {
  const [especialidades, setEspecialidades] = useState([]);

  useEffect(() => {
    setEspecialidades(DadosEspecialidades);
  }, []);

  return (
    <div className="container" style={{ background: colors.background }}>
      <BarraSuperior />
      <main className="main-content">
        <div className="services-content">
          <h1>Nossos Serviços</h1>
          <div className="services-list">
            {especialidades.map((especialidade) => (
              <ExibeServico
                key={especialidade.id}
                nome={especialidade.nome}
                descricao={especialidade.descricao}
                imagem={especialidade.imagem}
                altText={especialidade.altText}
              />
            ))}
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
};

export default ServicosScreen;
