import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import Gallery from '../../components/Gallery/Gallery';
import BuyBox from '../../components/BuyBox/BuyBox';
import ProductOptions from '../../components/ProductOptions/ProductOptions';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';

export default function ProductViewPage() {
  const { id } = useParams();

  const containerStyle = {
    padding: '40px 104px'
  };

  const rowStyle = {
    display: 'flex',
    gap: 24,
    alignItems: 'flex-start'
  };

  const product = {
    id,
    name: 'Tênis Esportivo X',
    reference: 'REF-12345',
    stars: 4.6,
    rating: '120 avaliações',
    price: 249.9,
    priceDiscount: 199.9,
    description:
      'Tênis esportivo com amortecimento avançado, ideal para corridas e treinos intensos.'
  };

  const images = [
    { src: 'public/product-image-1.png' },
    { src: 'public/product-image-2.png' },
    { src: 'public/product-image-3.png' }
  ];

  const recommended = [
    {
      id: 'r1',
      name: 'Produto recomendado 1',
      image: 'https://picsum.photos/seed/drip1/400/400',
      price: 200,
      priceDiscount: 149.9
    },
    {
      id: 'r2',
      name: 'Produto recomendado 2',
      image: 'https://picsum.photos/seed/drip2/400/400',
      price: 49.9
    }
  ];

  return (
    <Layout>
      <div style={containerStyle}>
        <div style={rowStyle}>
          <Gallery
            images={images}
            showThumbs
            width="700px"
            height="570px"
            radius="4px"
          />

          <BuyBox
            name={product.name}
            reference={product.reference}
            stars={product.stars}
            rating={product.rating}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description={product.description}
            onBuy={() => {}}
          >
            <ProductOptions
              options={['39', '40', '41', '42']}
              radius="8px"
              shape="square"
              type="text"
            />

            <div style={{ height: 12 }} />

            <ProductOptions
              options={['#000000', '#555555', '#C92071', '#2C5AA0']}
              shape="circle"
              type="color"
            />
          </BuyBox>
        </div>

        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/produtos' }}
        >
          <ProductListing products={recommended} />
        </Section>
      </div>
    </Layout>
  );
}
