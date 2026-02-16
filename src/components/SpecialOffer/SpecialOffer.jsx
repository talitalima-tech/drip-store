import styled from "styled-components";
import { theme } from "../../styles/theme";

// --- ESTILOS ---

const BannerSection = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 553px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 104px;
  background-color: ${theme.colors.neutral.white};
  margin-top: 80px;
  margin-bottom: 80px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: auto;
    padding: 40px 20px;
    text-align: center;
  }
`;

const ImageArea = styled.div`
  flex: 1;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DecorativeBall = styled.div`
  width: 466px;
  height: 466px;
  background: linear-gradient(180deg, rgba(66, 0, 255, 0.25) -40.67%, rgba(255, 255, 255, 0) 100%);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProductImg = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 573px;
  height: auto;
  transform: rotate(-10deg);
`;

const ContentArea = styled.div`
  flex: 1;
  padding-left: 60px;
  z-index: 3;

  @media (max-width: 1024px) {
    padding-left: 0;
    margin-bottom: 40px;
  }
`;

const Tag = styled.p`
  color: ${theme.colors.primary};
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-size: 48px;
  color: ${theme.colors.neutral.darkGray2};
  font-weight: 800;
  line-height: 50px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: ${theme.colors.neutral.darkGray2};
  line-height: 28px;
  margin-bottom: 32px;
`;

const BuyButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.neutral.white};
  padding: 12px 40px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: brightness(1.1);
    transform: scale(1.05);
  }
`;

// --- COMPONENTE ---

function SpecialOffer() {
  return (
    <BannerSection>
      <ImageArea>
        <DecorativeBall />
        <ProductImg src="/layon-sneakers.png" alt="Air Jordan Exclusive" />
      </ImageArea>

      <ContentArea>
        <Tag>Oferta especial</Tag>
        <Title>Air Jordan Edition Exclusive</Title>
        <Description>
          Conquiste o estilo lendário com a edição exclusiva do Air Jordan. 
          Conforto premium e design icônico para quem não abre mão de ser único.
        </Description>
        <BuyButton>Ver Oferta</BuyButton>
      </ContentArea>
    </BannerSection>
  );
}

export default SpecialOffer;