import Logo from "../Logo/Logo";
import SearchBar from "./SearchBar";
import AuthLinks from "./AuthLinks";
import CartIcon from "./CartIcon";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-between mt-[42px] pl-[104px] pr-[100px]">
        <Logo />
        <div className="w-[27px]" />
        <div className="w-[559px] h-[60px]">
          <SearchBar />
        </div>
        <div className="w-[48px]" />
        <AuthLinks />
        <div className="w-[70px]" />
        <div>
          <CartIcon />
        </div>
      </div>

      <div className="ml-[100px] mt-[40px] mb-[20px]">
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
