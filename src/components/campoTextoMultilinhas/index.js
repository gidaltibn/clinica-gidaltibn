import React from "react";
import "../cssCampoTexto/camposTexto.css";

function CampoTextoMultilinhas({ placeholder, valor, setValor }) {
  const handleChange = (event) => {
    setValor(event.target.textContent);
  };

  return (
    <div
      contentEditable
      onInput={handleChange}
      className="campo-texto-multilinhas"
      data-placeholder={placeholder}
      suppressContentEditableWarning
    >
      {valor}
    </div>
  );
}

export default CampoTextoMultilinhas;
