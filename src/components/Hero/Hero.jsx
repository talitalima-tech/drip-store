import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

// Imports dos Assets - Verifique se os arquivos estão na pasta assets
import sneakerImage from '../../assets/White-Sneakers-PNG.png';
import fireIcon from '../../assets/fire.png';
import dotsImage from '../../assets/dots.png';

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 681px;
  background-color: #F5F5F5;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 100px;
  position: relative;
`;

const TextContent = styled.div`
  width: 550px; /* Aumentado levemente para acomodar o fogo de 50px */
  z-index: 10;

  span.subtitle {
    color: ${theme.colors.warning || '#E7BB1F'};
    font-weight: bold;
    font-size: 16px;
    display: block;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 64px;
    font-weight: 800;
    line-height: 1.1;
    color: ${theme.colors.neutral.darkGray};
    margin: 0 0 20px 0;
    /* O display padrão do h1 permite que o inline-block da imagem funcione ao lado */
  }

  .fire-img {
    width: 50px;
    height: 50px;
    display: inline-block; /* Força o fogo a ficar na linha do texto */
    vertical-align: middle; /* Alinha com o meio da letra */
    margin-left: 15px;
    position: relative;
    top: -5px; /* Ajuste fino para o fogo subir um pouco */
  }

  p.desc {
    font-size: 18px;
    line-height: 28px;
    color: ${theme.colors.neutral.mediumGray || '#666'};
    margin-bottom: 40px;
    min-height: 56px;
  }

  button {
    background-color: ${theme.colors.primary};
    color: white;
    padding: 14px 60px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    &:hover { filter: brightness(1.1); }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 733px;
  height: 431px;

  .sneaker {
    width: 100%;
    transform: rotate(-19.34deg);
    position: relative;
    z-index: 2;
  }

  .dots {
    position: absolute;
    top: -40px;
    right: -50px;
    width: 140px;
    z-index: 1;
    opacity: 0.8;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%); /* Centraliza as bolinhas no meio da tela */
  display: flex;
  gap: 12px;
  z-index: 15;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  /* Cor rosa (primary) se ativo, cinza se inativo */
  background-color: ${props => props.$active ? theme.colors.primary : '#CCCCCC'};
  transition: all 0.3s ease;
  cursor: pointer;
`;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { desc: 'Descontos imperdíveis em tênis Nike para você renovar seu estilo com conforto e tecnologia.' },
    { desc: 'Aproveite as melhores ofertas da semana com frete grátis para todo o Brasil em compras Nike.' },
    { desc: 'Conheça a nova coleção Air Max com preços exclusivos que você só encontra aqui na Digital Store.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000); // Muda a cada 2 segundos
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <HeroWrapper>
      <Content>
        <TextContent>
          <span className="subtitle">Melhores ofertas personalizadas</span>
          <h1>
            Queima de <br />
            estoque Nike 
            <img src={fireIcon} alt="Fogo" className="fire-img" />
          </h1>

          <p className="desc" key={currentSlide}>
            {slides[currentSlide].desc}
          </p>
          
          <button>Ver Ofertas</button>
        </TextContent>

        <ImageContainer>
          <img src={sneakerImage} className="sneaker" alt="Tênis Nike" />
          <img src={dotsImage} className="dots" alt="Pontos decorativos" />
        </ImageContainer>
      </Content>

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot 
            key={index} 
            $active={index === currentSlide} 
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </DotsContainer>
    </HeroWrapper>
  );
};

export default Hero;