import Logo from "../Logo/Logo";
import SearchBar from "./SearchBar";
import AuthLinks from "./AuthLinks";
import CartIcon from "./CartIcon";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF"
      }}
    >
      {/* linha superior */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "42px",
          paddingLeft: "104px",  
          paddingRight: "100px",
        }}
      >
       
        <Logo />

        {/* espaço entre logo e barra de pesquisa */}
        <div style={{ width: "27px" }} />

        {/* barra de pesquisa */}
        <div style={{ width: "559px", height: "60px" }}>
          <SearchBar />
        </div>

        {/* espaço entre busca e "Cadastre-se" */}
        <div style={{ width: "48px" }} />

      
        <AuthLinks />

        {/* espaço entre entrar e carrinho */}
        <div style={{ width: "70px" }} />

        <div>
          <CartIcon />
        </div>
      </div>

      <div
        style={{
          marginLeft: "100px", 
          marginTop: "40px",
          marginBottom: "20px"
        }}
      >
        <MainNav />
      </div>
    </header>
  );
};

export default Header;