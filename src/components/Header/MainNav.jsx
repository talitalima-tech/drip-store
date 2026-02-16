import React from 'react';
import { NavLink } from "react-router-dom";
import { theme } from "../../styles/theme";

const MainNav = () => {
  const { colors, typography } = theme;

  // Função para estilizar os links dinamicamente (Ativo vs Inativo)
  const linkStyle = ({ isActive }) => ({
    color: isActive ? colors.primary : colors.neutral.darkGray2,
    textDecoration: "none",
    fontSize: typography.sizes.base,
    fontWeight: isActive ? typography.weights.bold : typography.weights.regular,
    paddingBottom: "4px",
    borderBottom: isActive ? `2px solid ${colors.primary}` : "2px solid transparent",
    transition: "all 0.2s ease-in-out",
    fontFamily: typography.fontFamily
  });

  // Estilo do container da lista
  const listStyle = {
    display: "flex",
    listStyle: "none",
    padding: 0,
    margin: 0,
    gap: "32px", // Espaço entre os links conforme o Figma
    alignItems: "center"
  };

  return (
    <nav style={{ height: "29px" }}>
      <ul style={listStyle}>
        <li>
          <NavLink to="/" style={linkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/produtos" style={linkStyle}>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="/categorias" style={linkStyle}>
            Categorias
          </NavLink>
        </li>
        <li>
          <NavLink to="/pedidos" style={linkStyle}>
            Meus Pedidos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;