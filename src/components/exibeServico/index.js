import React from "react";
import "./exibeServico.css";

function ExibeServico({ nome, descricao, imagem, altText }) {
  return (
    <div className="container-services">
      <div className="imagem-container">
        <img src={imagem} alt={altText} className="servico-imagem" />
      </div>
      <div className="exibe-servico">
        <h3 className="servico-nome">{nome}</h3>
        <p className="servico-descricao">{descricao}</p>
      </div>
    </div>
  );
}

export default ExibeServico;
