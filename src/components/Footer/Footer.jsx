import LogoFooter from "../../assets/logo-footer.svg";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import InfoColumn from "./InfoColumn";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] w-full font-inter">
      <div className="max-w-[1440px] mx-auto px-[104px] pt-[72px] pb-[40px]">
        <div className="flex items-start">
          <div className="w-[255px] mr-[255px]">
            <img className="w-[253px] h-[44px]" src={LogoFooter} alt="Drip Store Logo" />
            <p className="w-[307px] h-[78px] my-[24px] text-[16px] leading-[26px] text-[#cccccc]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-[36px]">
              <a href="#"><img className="w-[11px] h-[21px]" src={facebookIcon} alt="Facebook" /></a>
              <a href="#"><img className="w-[20px] h-[20px]" src={instagramIcon} alt="Instagram" /></a>
              <a href="#"><img className="w-[22px] h-[18px]" src={twitterIcon} alt="Twitter" /></a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-[135px] mr-[102px]">
              <InfoColumn
                title="Informação"
                informations={[
                  { text: "Sobre Drip Store", link: "/about" },
                  { text: "Segurança", link: "#" },
                  { text: "Wishlist", link: "#" },
                  { text: "Blog", link: "#" },
                  { text: "Trabalhe conosco", link: "#" },
                  { text: "Meus Pedidos", link: "#" },
                ]}
              />
            </div>

            <div className="w-[96px] mr-[168px]">
              <InfoColumn
                title="Categorias"
                informations={[
                  { text: "Camisetas", link: "#" },
                  { text: "Calças", link: "#" },
                  { text: "Bonés", link: "#" },
                  { text: "Headphones", link: "#" },
                  { text: "Tênis", link: "#" },
                ]}
              />
            </div>

            <div className="w-[231px]">
              <InfoColumn
                title="Contato"
                informations={[
                  { text: "Av. Santos Dumont, 1510 - CE", link: "#" },
                  { text: "(85) 3051-3411", link: "#" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#444] mt-[60px] pt-[20px] text-center text-[14px] text-[#cccccc]">
          © 2026 Digital Store
        </div>
      </div>
    </footer>
  );
};

export default Footer;
