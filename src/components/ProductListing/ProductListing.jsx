import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import reactLogo from '../../assets/react.svg';

export default function ProductListing() {
  const products = [
    { id: 1, image: reactLogo, name: 'Tênis React One', price: 399.9, priceDiscount: 299.9 },
    { id: 2, image: reactLogo, name: 'Camiseta React Blue', price: 89.9 },
    { id: 3, image: reactLogo, name: 'Headphone Wave', price: 499.9, priceDiscount: 449.9 },
    { id: 4, image: reactLogo, name: 'Boné Classic', price: 59.9 }
  ];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(292px, 1fr))',
    gap: 24
  };

  return (
    <div style={gridStyle}>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          image={p.image}
          name={p.name}
          price={p.price}
          priceDiscount={p.priceDiscount}
        />
      ))}
    </div>
  );
}
