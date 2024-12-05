import React from "react";
import { NavLink } from "react-router-dom";
import "./barraSuperior.css";
import logoClinica from "../../assets/logo-clinica2.png";
import colors from "../../assets/colors";

function BarraSuperior() {
  return (
    <header
      className="barra-superior"
      style={{ background: colors.background }}
    >
      <div className="logo-container">
        <img
          src={logoClinica}
          alt="Logo da Clínica Gidalti BN"
          className="logo"
        />
      </div>
      <nav className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/servicos"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Serviços
        </NavLink>
        <NavLink
          to="/agendar"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Agendar
        </NavLink>
        <NavLink
          to="/contato"
          className={({ isActive }) =>
            isActive ? "nav-button active" : "nav-button"
          }
        >
          Contato
        </NavLink>
      </nav>
    </header>
  );
}

export default BarraSuperior;
