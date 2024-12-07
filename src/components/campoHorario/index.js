import React from "react";
import "../cssCampoTexto/camposTexto.css";

function CampoHorario({ placeholder, valor, setValor }) {
  const handleChange = (event) => {
    let value = event.target.value;
    // Remove qualquer caractere que não seja número
    value = value.replace(/[^0-9]/g, "");

    // Formata para o formato HH:MM
    if (value.length <= 2) {
      value = value;
    } else {
      value = `${value.slice(0, 2)}:${value.slice(2, 4)}`;
    }

    // Limita o valor de horas e minutos
    if (value.length === 5) {
      const [horas, minutos] = value.split(":");
      if (parseInt(horas, 10) > 23) {
        value = "23:" + minutos;
      }
      if (parseInt(minutos, 10) > 59) {
        value = horas + ":59";
      }
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

export default CampoHorario;
