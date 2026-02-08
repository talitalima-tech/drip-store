import Header from "../components/Header";
import Footer from "../components/Footer";

// Definindo o componente de layout
const Layout = ({ children }) => {
  return (
    <div>
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      {children}

      {/* Componente do rodapé */}
      <Footer />
    </div>
  );
};

export default Layout;
