import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductListing({ products = [] }) {
  return (
    <div className="grid grid-cols-4 gap-[24px] max-[1024px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:gap-[16px]">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          image={p.image}
          name={p.name}
          price={p.price}
          priceDiscount={p.priceDiscount}
          category={p.category}
          tag={p.tag}
        />
      ))}
    </div>
  );
}
