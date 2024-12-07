import React from "react";
import "../cssCampoTexto/camposTexto.css";

function CampoData({ placeholder, valor, setValor }) {
  const handleChange = (event) => {
    let value = event.target.value;
    // Remove qualquer caractere que não seja número
    value = value.replace(/[^0-9]/g, "");

    // Formata para o formato DD/MM/AAAA
    if (value.length <= 2) {
      value = value;
    } else if (value.length <= 4) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    } else {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4, 8)}`;
    }

    setValor(value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={valor}
      onChange={handleChange}
      className="campo-texto"
    />
  );
}

export default CampoData;
