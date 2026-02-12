import React from 'react';
import Button from '../Button/Button';
import { theme } from '../../styles/theme';

export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
  onBuy
}) {
  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 540
  };

  const nameStyle = {
    fontSize: '32px',
    color: theme.colors.neutral[700],
    fontWeight: theme.typography.weights.semibold
  };

  const referenceStyle = {
    fontSize: '12px',
    color: theme.colors.neutral[500]
  };

  const ratingRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  };

  const starsStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontSize: '14px',
    color: theme.colors.neutral[700],
    backgroundColor: theme.colors.warning,
    borderRadius: theme.borderRadius.sm,
    padding: '4px 8px'
  };

  const starIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={theme.colors.neutral[100]} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.17L12 18.897l-7.335 4.271 1.401-8.17L.132 9.211l8.2-1.193L12 .587z"/>
    </svg>
  );

  const ratingStyle = {
    fontSize: '14px',
    color: theme.colors.neutral[400]
  };

  const priceRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  };

  const priceStyle = {
    fontSize: '32px',
    color: theme.colors.neutral[600]
  };

  const priceStrikedStyle = {
    fontSize: '16px',
    color: theme.colors.neutral[400],
    textDecoration: 'line-through'
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: theme.colors.neutral[600]
  };

  return (
    <div style={boxStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={referenceStyle}>{reference}</div>
      <div style={ratingRowStyle}>
        <div style={starsStyle}>
          <span>{stars}</span>
          {starIcon}
        </div>
        <div style={ratingStyle}>{rating}</div>
      </div>

      {!priceDiscount ? (
        <div style={priceStyle}>
          {typeof price === 'number'
            ? price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            : price}
        </div>
      ) : (
        <div style={priceRowStyle}>
          <div style={priceStyle}>
            {priceDiscount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </div>
          <div style={priceStrikedStyle}>
            {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </div>
        </div>
      )}

      <div style={descriptionStyle}>{description}</div>
      {children}

      <Button variant="secondary" size="md" onClick={onBuy}>
        COMPRAR
      </Button>
    </div>
  );
}
