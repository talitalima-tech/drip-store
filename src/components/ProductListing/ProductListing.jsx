import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductListing({ products = [] }) {
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
