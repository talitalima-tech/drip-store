import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav>
      {/* Navegação principal do site */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Produtos</NavLink>
      <NavLink to="/categories">Categorias</NavLink>
      <NavLink to="/orders">Meus Pedidos</NavLink>
    </nav>
  );
}

export default MainNav;
