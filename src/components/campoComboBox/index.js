import React from "react";
import "../cssCampoTexto/camposTexto.css";

function CampoComboBox({ options, placeholder, valor, setValor }) {
  const handleChange = (event) => {
    setValor(event.target.value);
  };

  return (
    <select className="campo-texto" value={valor} onChange={handleChange}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default CampoComboBox;
