import React from "react";
import InputMask from "react-input-mask";
import "../cssCampoTexto/camposTexto.css";

function CampoData({ placeholder, valor, setValor }) {
  const handleChange = (event) => {
    setValor(event.target.value);
  };

  return (
    <InputMask mask="99/99/9999" value={valor} onChange={handleChange}>
      {(inputProps) => (
        <input
          {...inputProps}
          type="text"
          placeholder={placeholder}
          className="campo-texto"
        />
      )}
    </InputMask>
  );
}

export default CampoData;
