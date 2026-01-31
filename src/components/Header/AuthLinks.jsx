import { Link } from "react-router-dom";

const AuthLinks = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* cadastro */}
      <Link
        to="/register"
        style={{
          width: "102px",
          height: "28px",
          fontSize: "16px",
          color: "#474747",
          textDecoration: "underline",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Cadastre-se
      </Link>

      {/* espaço entre cadastre e entrar */}
      <div style={{ width: "30px" }} />

      {/* botao entrar */}
      <Link
        to="/login"
        style={{
          width: "114px",
          height: "40px",
          backgroundColor: "#C92071",
          color: "#FFFFFF",
          fontSize: "14px",
          fontWeight: "bold",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none"
        }}
      >
        Entrar
      </Link>
    </div>
  );
};

export default AuthLinks;
