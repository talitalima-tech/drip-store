import React from 'react';
import styled from 'styled-components';
import ProductCard from '../ProductCard/ProductCard';

// Criando o container com Grid responsivo
const GridContainer = styled.div`
  display: grid;
  gap: 24px;
  
  /* Desktop: 4 colunas fixas */
  grid-template-columns: repeat(4, 1fr);

  /* Tablet: 3 colunas */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Celular: 2 colunas fixas */
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px; /* Espaço menor no celular para não apertar */
  }
`;

export default function ProductListing({ products = [] }) {
  return (
    <GridContainer>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          image={p.image}
          name={p.name}
          price={p.price}
          priceDiscount={p.priceDiscount}
          // Se você tiver a categoria e a tag no seu db.js, passe-as aqui:
          category={p.category}
          tag={p.tag}
        />
      ))}
    </GridContainer>
  );
}