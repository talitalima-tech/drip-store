import React from 'react';
import { theme } from '../../styles/theme';

export default function ProductCard({ image, name, price, priceDiscount }) {
  const containerStyle = {
    width: 292,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    fontFamily: theme.typography.fontFamily
  };

  const imageWrapperStyle = {
    width: 292,
    height: 321,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const imageStyle = {
    width: 292,
    height: 321,
    objectFit: 'cover'
  };

  const nameStyle = {
    fontSize: theme.typography.sizes.base,
    color: '#474747'
  };

  const priceRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  };

  const priceStyle = {
    fontSize: theme.typography.sizes['2xl'],
    color: '#474747'
  };

  const priceStrikedStyle = {
    fontSize: theme.typography.sizes['2xl'],
    color: '#8F8F8F',
    textDecoration: 'line-through'
  };

  const formatBRL = (value) =>
    typeof value === 'number'
      ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      : value;

  return (
    <div style={containerStyle}>
      <div style={imageWrapperStyle}>
        <img src={image} alt={name} style={imageStyle} />
      </div>

      <div style={nameStyle}>{name}</div>

      {!priceDiscount ? (
        <div style={priceStyle}>{formatBRL(price)}</div>
      ) : (
        <div style={priceRowStyle}>
          <div style={priceStyle}>{formatBRL(priceDiscount)}</div>
          <div style={priceStrikedStyle}>{formatBRL(price)}</div>
        </div>
      )}
    </div>
  );
}
