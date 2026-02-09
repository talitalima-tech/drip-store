import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Button from '../Button/Button';

export default function BuyBox({ image, name, price, priceDiscount, onBuy }) {
  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 292
  };

  return (
    <div style={boxStyle}>
      <ProductCard image={image} name={name} price={price} priceDiscount={priceDiscount} />
      <Button variant="primary" size="md" onClick={onBuy}>
        Comprar
      </Button>
    </div>
  );
}
