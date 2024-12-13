import React from "react";
import InputMask from "react-input-mask";
import "../cssCampoTexto/camposTexto.css";

function CampoHorario({ placeholder, valor, setValor }) {
  const handleChange = (event) => {
    let value = event.target.value;

    // Verifica se está no formato HH:MM e valida o valor
    if (/^\d{2}:\d{2}$/.test(value)) {
      const [horas, minutos] = value.split(":");

      // Limita horas e minutos aos valores válidos
      const horasValidadas = Math.min(parseInt(horas, 10), 23)
        .toString()
        .padStart(2, "0");
      const minutosValidados = Math.min(parseInt(minutos, 10), 59)
        .toString()
        .padStart(2, "0");

      value = `${horasValidadas}:${minutosValidados}`;
    }

    setValor(value);
  };

  return (
    <InputMask
      mask="99:99"
      value={valor}
      onChange={handleChange}
      maskPlaceholder={null} // Remove placeholders como "_"
    >
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

export default CampoHorario;
