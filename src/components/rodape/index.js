import React from "react";
import "./rodape.css";
import colors from "../../assets/colors";

function Rodape() {
  return (
    <footer
      className="rodape"
      style={{
        backgroundColor: colors.background,
        color: colors.backgroundButton,
      }}
    >
      <p>&copy; 2024 Clínica Gidalti BN</p>
    </footer>
  );
}

export default Rodape;
