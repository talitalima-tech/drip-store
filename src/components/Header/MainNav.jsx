import { NavLink } from "react-router-dom";

const MainNav = () => {
  const linkStyle = ({ isActive }) => ({
      color: isActive ? "#C92071" : "#474747", // rosa se ativo, cinza se não
      textDecoration: "none",
      fontSize: "16px",
      paddingBottom: "4px",
      borderBottom: isActive ? "2px solid #C92071" : "2px solid transparent",
      transition: "0.2s"
    });

  return (
    <nav
      style={{
        width: "423px",  //largura total no Figma
        height: "29px"
      }}
    >
      <ul className="flex justify-content-between list-none p-0 m-0">
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
