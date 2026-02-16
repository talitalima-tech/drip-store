import styled from "styled-components";
import { theme } from "../../styles/theme";

const FullContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.neutral.white};
  margin: 80px 0;
`;

const BannerSection = styled.section`
  width: 100%;
  max-width: 1440px;
  height: 553px; /* Altura exata Desktop */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 104px;
  position: relative;

  /* Versão Celular */
  @media (max-width: 768px) {
    flex-direction: column;
    width: 375px; /* Largura Mobile Figma */
    height: 701px; /* Altura Mobile Figma */
    padding: 60px 20px;
    margin: 40px auto;
    justify-content: center;
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

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const DecorativeBall = styled.div`
  width: 466px;
  height: 466px;
  background: linear-gradient(180deg, rgba(66, 0, 255, 0.25) -40.67%, rgba(255, 255, 255, 0) 100%);
  border-radius: 50%;
  position: absolute;
  z-index: 1;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ProductImg = styled.img`
  position: relative;
  z-index: 2;
  width: 573px;  
  height: 330px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 335px;
    height: auto;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding-left: 60px;
  z-index: 3;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Tag = styled.p`
  color: ${theme.colors.primary};
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.75px;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-size: 48px;
  line-height: 50px;
  color: ${theme.colors.neutral.darkGray2};
  font-weight: 800;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 36px;
  }
`;

const Description = styled.p`
  color: ${theme.colors.neutral.darkGray2};
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 30px;
`;

const BuyButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.neutral.white};
  padding: 12px 40px;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: filter 0.2s, transform 0.2s;

  &:hover {
    filter: brightness(1.1);
    transform: scale(1.02);
  }
`;

function SpecialOffer() {
  return (
    <FullContainer>
      <BannerSection>
        <ImageArea>
          <DecorativeBall />
          <ProductImg 
            src="/special-offer-banner.png" 
            alt="Air Jordan Exclusive" 
          />
        </ImageArea>

        <ContentArea>
          <Tag>Oferta especial</Tag>
          <Title>Air Jordan edição de colecionador</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          </Description>
          <BuyButton>Ver Oferta</BuyButton>
        </ContentArea>
      </BannerSection>
    </FullContainer>
  );
}

export default SpecialOffer;