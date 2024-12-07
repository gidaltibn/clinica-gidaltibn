import React from "react";
import "../cssCampoTexto/camposTexto.css";

function CampoTelefone({ placeholder, valor, setValor }) {
    const handleChange = (event) => {
      let value = event.target.value;
      // Remove qualquer caractere que não seja número
      value = value.replace(/[^0-9]/g, '');
  
      // Formata para o formato (99) 99999-9999
      if (value.length <= 2) {
        value = `(${value}`;
      } else if (value.length <= 7) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
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

export default CampoTelefone;
