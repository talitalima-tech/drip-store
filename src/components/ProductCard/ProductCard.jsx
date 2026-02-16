import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

// 1. Container Principal
const CardContainer = styled.div`
  width: 100%; /* Ocupa o espaço do grid */
  max-width: 292px; /* Limite do Figma */
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;

  @media (max-width: 600px) {
    max-width: 100%; /* Garante que 2 caibam lado a lado */
  }
`;

// 2. O Wrapper cinza da imagem (321px de altura)
const ImageWrapper = styled.div`
  width: 100%;
  height: 321px;
  background-color: #F5F5F5;
  border-radius: 4px; /* Medida do Figma */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);

  @media (max-width: 600px) {
    height: 180px; /* Altura reduzida para telas pequenas */
  }
`;

// 3. A Imagem com a rotação de 30 graus
const ProductImage = styled.img`
  width: 248px;  /* Medida do Figma */
  height: 134px; /* Medida do Figma */
  object-fit: contain;
  transform: rotate(-30deg); 
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: rotate(-30deg) scale(1.1); /* Zoom leve no hover */
  }

  @media (max-width: 600px) {
    width: 80%;
    height: auto;
  }
`;

const Name = styled.div`
  font-size: 16px;
  color: #474747;
  font-weight: 400;
  /* Se houver tema: font-family: ${theme.typography?.fontFamily || 'inherit'}; */
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #1F1F1F;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const PriceStriked = styled.div`
  font-size: 24px;
  color: #8F8F8F;
  text-decoration: line-through;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export default function ProductCard({ image, name, price, priceDiscount }) {
  const formatBRL = (value) =>
    typeof value === 'number'
      ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      : value;

  return (
    <CardContainer>
      <ImageWrapper>
        <ProductImage src={image} alt={name} />
      </ImageWrapper>

      <Name>{name}</Name>

      {!priceDiscount ? (
        <Price>{formatBRL(price)}</Price>
      ) : (
        <PriceRow>
          <Price>{formatBRL(priceDiscount)}</Price>
          <PriceStriked>{formatBRL(price)}</PriceStriked>
        </PriceRow>
      )}
    </CardContainer>
  );
}