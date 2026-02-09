import styled from "styled-components";
import LogoFooter from "../../assets/logo-footer.svg";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import InfoColumn from "./InfoColumn";

const FooterBackground = styled.footer`
  background-color: #1f1f1f;
  width: 100%;
  font-family: 'Inter', sans-serif;
`;

const FooterContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 72px 104px 40px;
`;

/* para organizar a LOGO + COLUNAS */
const TopSection = styled.div`
  display: flex;
  align-items: flex-start;

`;

/* BLOCO LOGO */
const BrandArea = styled.div`
  width: 255px; /* distancia ate a coluna Informacao */
  margin-right: 255px;
`;

const Logo = styled.img`
  width: 253px;
  height: 44px;

   @media (max-width: 600px) {
    margin: 0 auto 20px;
  }
`;

const Description = styled.p`
  width: 307px;
  height: 78px;
  margin: 24px 0;
  font-size: 16px;
  line-height: 26px;
  color: #cccccc;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 36px;
`;

const FacebookIcon = styled.img`
  width: 11px;
  height: 21px;
`;

const InstagramIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const TwitterIcon = styled.img`
  width: 22px;
  height: 18px;
`;

/* COLUNAS */
const Columns = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ColumnInfo = styled.div`
  width: 135px;
  margin-right: 102px;
`;

const ColumnCategories = styled.div`
  width: 96px;
  margin-right: 168px;
`;

const ColumnContact = styled.div`
  width: 231px;
`;

const BottomBar = styled.div`
  border-top: 1px solid #444;
  margin-top: 60px;
  padding-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #cccccc;
`;

const Footer = () => {
  return (
    <FooterBackground>
      <FooterContainer>
        <TopSection>
          <BrandArea>
            <Logo src={LogoFooter} alt="Drip Store Logo" />

            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Description>

            <SocialIcons>
              <a href="#"><FacebookIcon src={facebookIcon} alt="Facebook" /></a>
              <a href="#"><InstagramIcon src={instagramIcon} alt="Instagram" /></a>
              <a href="#"><TwitterIcon src={twitterIcon} alt="Twitter" /></a>
            </SocialIcons>
          </BrandArea>

          <Columns>
            <ColumnInfo>
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
            </ColumnInfo>

            <ColumnCategories>
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
            </ColumnCategories>

            <ColumnContact>
              <InfoColumn
                title="Contato"
                informations={[
                  { text: "Av. Santos Dumont, 1510 - CE", link: "#" },
                  { text: "(85) 3051-3411", link: "#" },
                ]}
              />
            </ColumnContact>
          </Columns>
        </TopSection>

        <BottomBar>© 2026 Digital Store</BottomBar>
      </FooterContainer>
    </FooterBackground>
  );
};

export default Footer;
