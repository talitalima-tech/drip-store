import Logo from "../Logo/Logo";
import AuthLinks from "./AuthLinks";
import CartIcon from "./CartIcon";
import MainNav from "./MainNav";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <div>
        <Logo/>
        <SearchBar />
        <AuthLinks />
        <CartIcon />
      </div>

      <MainNav />
    </header>
  );
};

export default Header;
