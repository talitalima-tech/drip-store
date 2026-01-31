import { Link } from "react-router-dom";

const AuthLinks = () => {
  return (
    <div>
      <Link to="/login">Entrar</Link>
      <Link to="/register">Cadastre-se</Link>
    </div>
  );
}

export default AuthLinks;
