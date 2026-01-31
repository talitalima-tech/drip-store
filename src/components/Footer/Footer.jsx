import styled from "styled-components";
import LogoFooter from "../../assets/logo-footer.svg";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import InfoColumn from "./InfoColumn";

/* CONTAINER PRINCIPAL*/
const FooterContainer = styled.footer`
  background-color: #1f1f1f;
  color: white;
  padding: 60px 100px 20px;

  @media (max-width: 768px) {
    padding: 40px 20px 20px;
  }
`;

/* PARTE SUPERIOR DO FOOTER*/
const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

/* ÁREA DA LOGO E DESCRIÇÃO */
const BrandArea = styled.div`
  max-width: 280px;
`;

const Description = styled.p`
  margin: 20px 0;
  font-size: 14px;
  line-height: 1.6;
  color: #cccccc;
`;

/* ÍCONES DAS REDES SOCIAIS */
const SocialIcons = styled.div`
  display: flex;
  gap: 16px;

  img {
    width: 20px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

/* BARRA INFERIOR */
const BottomBar = styled.div`
  border-top: 1px solid #444;
  margin-top: 40px;
  padding-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #cccccc;
`;

/* COMPONENTE FOOTER */
const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        <BrandArea>
          <img src={LogoFooter} alt="Logo Drip Store" width="180" />

          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>

          <SocialIcons>
            <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
          </SocialIcons>
        </BrandArea>

        <InfoColumn
          title="Informação"
          informations={[
            { text: "Sobre Drip Store", link: "/about" },
            { text: "Segurança", link: "/security" },
            { text: "Wishlist", link: "/wishlist" },
            { text: "Blog", link: "/blog" },
            { text: "Trabalhe conosco", link: "/jobs" },
            { text: "Meus Pedidos", link: "/orders" },
          ]}
        />

        <InfoColumn
          title="Categorias"
          informations={[
            { text: "Camisetas", link: "/cat/camisetas" },
            { text: "Calças", link: "/cat/calcas" },
            { text: "Bonés", link: "/cat/bones" },
            { text: "Headphones", link: "/cat/headphones" },
            { text: "Tênis", link: "/cat/tenis" },
          ]}
        />

        <InfoColumn
          title="Contato"
          informations={[
            { text: "Av. Santos Dumont, 1510 - CE", link: "#" },
            { text: "(85) 3051-3411", link: "#" },
          ]}
        />
      </TopSection>

      <BottomBar>
        © 2026 Digital Store
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
