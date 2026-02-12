import React from 'react';
import Layout from '../../layouts/Layout';
import Gallery from '../../components/Gallery/Gallery';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';

export default function HomePage() {
  const collections = [
    { src: 'public/collection-1.png', alt: 'Coleção 1' },
    { src: 'public/collection-2.png', alt: 'Coleção 2' },
    { src: 'public/collection-3.png', alt: 'Coleção 3' }
  ];

  const products = [
    { id: 1, name: 'Nome do produto', image: 'public/product-thumb-1.png', price: 200, priceDiscount: 149.9 },
    { id: 2, name: 'Nome do produto', image: 'public/product-thumb-2.png', price: 49.9 },
    { id: 3, name: 'Nome do produto', image: 'public/product-thumb-3.png', price: 120, priceDiscount: 99.9 },
    { id: 4, name: 'Nome do produto', image: 'public/product-thumb-4.png', price: 89.9 },
    { id: 5, name: 'Nome do produto', image: 'public/product-thumb-5.png', price: 299.9, priceDiscount: 249.9 },
    { id: 6, name: 'Nome do produto', image: 'public/product-thumb-6.png', price: 59.9 },
    { id: 7, name: 'Nome do produto', image: 'public/product-thumb-7.png', price: 159.9, priceDiscount: 129.9 },
    { id: 8, name: 'Nome do produto', image: 'public/product-thumb-8.png', price: 79.9 }
  ];

  return (
    <Layout>
      <div style={{ padding: '40px 104px' }}>
        <div style={{ background: '#FFF3CD', color: '#8A6D3B', border: '1px solid #FFE8A1', borderRadius: 6, padding: '10px 12px', marginBottom: 16, fontSize: 14 }}>
          Status: Gallery 1440x681 (2 imagens), Coleções 3 itens, Produtos 8 itens
        </div>
        <Gallery
          width="1440px"
          height="681px"
          radius="4px"
          showThumbs
          images={[
            { src: 'public/home-slide-1.jpeg' },
            { src: 'public/home-slide-2.jpeg' }
          ]}
        />
        <div style={{ height: '24px' }} />
        <h1 style={{ fontSize: '32px', color: '#1F1F1F', marginBottom: '24px' }}>Bem-vindo à Drip Store</h1>
        
        <Section title="Coleções em destaque" titleAlign="center">
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
            {collections.map((c, i) => (
              <div key={i} style={{ width: 466, height: 200, borderRadius: 4, overflow: 'hidden' }}>
                <img
                  src={c.src.replace(/^public\//, '/')}
                  alt={c.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.currentTarget.src = '/vite.svg'; }}
                />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Produtos em alta" titleAlign="left">
          <ProductListing products={products} />
        </Section>
      </div>
    </Layout>
  );
}
