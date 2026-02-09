import React from 'react';
import ProductListing from '../../components/ProductListing/ProductListing';

export default function HomePage() {
  return (
    <div style={{ padding: '40px 104px' }}>
      <h1 style={{ fontSize: '32px', color: '#1F1F1F', marginBottom: '24px' }}>Bem-vindo à Drip Store</h1>
      <ProductListing />
    </div>
  );
}
