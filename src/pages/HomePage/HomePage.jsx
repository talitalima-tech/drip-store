import React from 'react';
import styled from 'styled-components';
import Layout from "../../Layouts/Layout";
import Section from "../../components/Section/Section";
import Gallery from "../../components/Gallery/Gallery";
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
`;

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 104px;
`;

const BannerGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  img { 
    width: 32%; 
    border-radius: 8px; 
    cursor: pointer;
    transition: 0.2s;
    &:hover { transform: scale(1.02); }
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <HomeWrapper>
        <Hero slides={HOME_SLIDES} />

        <Content>
          <Section title="Coleções em destaque">
            <BannerGrid>
              {COLLECTIONS.map((col, i) => (
                <img key={i} src={col.image} alt={col.title} />
              ))}
            </BannerGrid>
          </Section>

          <Section title="Coleções em destaque" titleAlign="center">
            <CategoryGrid />
          </Section>

          <Section title="Produtos em alta">
            <ProductListing products={PRODUCTS} />
          </Section>
        </Content>

        <SpecialOffer />
      </HomeWrapper>
    </Layout>
  );
};

export default HomePage;