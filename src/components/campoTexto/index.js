import React from "react";
import "../cssCampoTexto/camposTexto.css";

function CampoTexto({ placeholder, valor, setValor }) {
  const handleChange = (event) => {
    setValor(event.target.value);
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

export default CampoTexto;
