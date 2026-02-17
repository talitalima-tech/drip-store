import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importante para o link rosa
import Layout from "../../Layouts/Layout";
import Section from "../../components/Section/Section";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";
import ProductListing from "../../components/ProductListing/ProductListing";
import { theme } from "../../styles/theme";
import Hero from "../../components/Hero/Hero";
import { PRODUCTS, HOME_SLIDES, COLLECTIONS } from "../../data/db";

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 80px;
  background-color: ${theme.colors.neutral.lightGray3};
  padding-bottom: 80px;
`;

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 104px;
  width: 100%;
`;

// Novo Card para as Coleções (3 fotos)
// Atualize esses Styled Components no seu HomePage.jsx

const CollectionCard = styled.div`
  position: relative;
  flex: 1;
  height: 251px; /* Altura padrão para alinhar o grid */
  background-color: #D8E3ED;
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Garante espaço entre topo e base */
  overflow: hidden;

  .badge {
    background-color: #E7FF86;
    color: #474747;
    font-weight: 800;
    font-size: 12px;
    padding: 5px 15px;
    border-radius: 20px;
    width: fit-content; /* Ocupa apenas o espaço do texto */
    margin-bottom: 10px;
    z-index: 2;
  }

  h3 {
    font-size: 28px;
    font-weight: 700;
    color: #474747;
    margin-top: 12px;
    z-index: 2;
    max-width: 160px;
    line-height: 1.2;
  }

  button {
    /* Dados exatos do Figma para o Botão */
    width: 153px;
    height: 48px;
    background-color: #F5F5F5;
    color: ${theme.colors.primary};
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    z-index: 2;
    margin-top: auto; /* Empurra o botão para a base do card */
    transition: 0.2s;
    
    &:hover {
      background-color: #ffffff;
      transform: scale(1.02);
    }
  }

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%; /* Ajusta a imagem ao tamanho do card */
    z-index: 1;
    object-fit: contain;
  }
`;

const BannerGrid = styled.div`
  display: flex;
  gap: 20px; /* Gap entre os cards */
  margin-top: 20px;
  width: 100%;
`;

// Estilo para o link "Ver todos"
const ViewAllLink = styled(Link)`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover { text-decoration: underline; }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    color: #474747;
    font-weight: 700;
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <HomeWrapper>
        <Hero slides={HOME_SLIDES} />

        <Content>
          {/* 1. Coleções em destaque (Cards com Botão) */}
          <Section>
            <TitleContainer>
              <h2>Coleções em destaque</h2>
            </TitleContainer>
            <BannerGrid>
              {COLLECTIONS.map((col, i) => (
                <CollectionCard key={i}>
                  {/* 1. Fica apenas o selo de desconto */}
                  <span className="badge">30% OFF</span>
                  
                  {/* 2. O botão de comprar (Sem o texto da categoria no meio) */}
                  <button>Comprar</button>
                  
                  {/* 3. A imagem de fundo */}
                  <img src={col.image} alt="Coleção" />
                </CollectionCard>
              ))}
            </BannerGrid>
          </Section>

          {/* 2. Categorias (Ícones centralizados) */}
          <Section title="Categorias em destaque" titleAlign="center">
            <CategoryGrid />
          </Section>

          {/* 3. Produtos em Alta (Com link rosa) */}
          <Section>
            <TitleContainer>
              <h2>Produtos em alta</h2>
              <ViewAllLink to="/produtos">
                Ver todos <span>&rarr;</span>
              </ViewAllLink>
            </TitleContainer>
            <ProductListing products={PRODUCTS.slice(0, 8)} />
          </Section>
        </Content>

        <SpecialOffer />
      </HomeWrapper>
    </Layout>
  );
};

export default HomePage;