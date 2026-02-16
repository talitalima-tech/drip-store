import React from 'react';
import Layout from "../../Layouts/Layout";
import Section from "../../components/Section/Section";
import Gallery from "../../components/Gallery/Gallery";
import ProductListing from "../../components/ProductListing/ProductListing";
import { theme } from "../../styles/theme";

const HOME_SLIDES = [
  { src: "/home-slide-1.jpeg" },
  { src: "/home-slide-2.jpeg" },
  { src: "/home-slide-3.jpeg" }
];

const CATEGORY_ICONS = [
  { label: "Camisetas", icon: "/opt-1.png" },
  { label: "Calças", icon: "/opt-2.png" },
  { label: "Bonés", icon: "/opt-3.png" },
  { label: "Headphones", icon: "/opt-4.png" },
  { label: "Tênis", icon: "/opt-5.png" },
];

const PRODUCTS = [
  { id: 1, name: "K-Swiss V8 - Masculino", image: "/product-thumb-1.png", price: 200, priceDiscount: 149.9, category: "Tênis" },
  { id: 2, name: "K-Swiss V8 - Feminino", image: "/product-thumb-2.png", price: 200, priceDiscount: 149.9, category: "Tênis" },
  { id: 3, name: "Tênis Casual", image: "/product-thumb-3.png", price: 200, category: "Tênis" },
  { id: 4, name: "Tênis Esportivo", image: "/product-thumb-4.png", price: 200, category: "Tênis" },
  { id: 5, name: "K-Swiss Classic", image: "/product-thumb-1.png", price: 200, priceDiscount: 149.9, category: "Tênis" },
  { id: 6, name: "K-Swiss Sport", image: "/product-thumb-2.png", price: 200, category: "Tênis" },
  { id: 7, name: "Tênis Urban", image: "/product-thumb-3.png", price: 200, priceDiscount: 149.9, category: "Tênis" },
  { id: 8, name: "Tênis Training", image: "/product-thumb-4.png", price: 200, category: "Tênis" },
];

function HomePage() {
  const { colors, typography, spacing } = theme;

  return (
    <Layout>
      {/* 5.1 - Slide principal com respiro para o Header */}
      <div style={{ marginTop: spacing.sm }}>
        <Gallery images={HOME_SLIDES} width="1440px" height="681px" />
      </div>

      {/* 5.2 - Banners de Coleção */}
      <Section title="Coleções em destaque" titleAlign="left">
        <div style={{ display: 'flex', gap: spacing.md, justifyContent: 'center', marginTop: spacing.md }}>
          <img src="/collection-1.png" alt="Banner 1" style={{ borderRadius: '4px', width: '32%' }} />
          <img src="/collection-2.png" alt="Banner 2" style={{ borderRadius: '4px', width: '32%' }} />
          <img src="/collection-3.png" alt="Banner 3" style={{ borderRadius: '4px', width: '32%' }} />
        </div>
      </Section>

      {/* Categorias (Bolinhas) */}
      <Section title="Coleções em destaque" titleAlign="center">
        <div style={{ display: 'flex', justifyContent: 'center', gap: spacing.xxl, marginTop: spacing.md }}>
          {CATEGORY_ICONS.map((item, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                width: '104px', height: '104px', borderRadius: '50%',
                backgroundColor: colors.neutral.white,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: theme.shadows.sm, marginBottom: spacing.sm
              }}>
                <img src={item.icon} alt={item.label} />
              </div>
              <span style={{ fontWeight: typography.weights.bold, fontSize: typography.sizes.sm, color: colors.neutral.darkGray2 }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* 5.3 - Produtos */}
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={PRODUCTS} />
      </Section>

      {/* BANNER PROMOCIONAL - AJUSTADO COM O FIGMA */}
      <section style={{ 
        width: '100%', // Para ocupar toda a largura da tela
        maxWidth: '1440px', // Trava na largura do Figma
        height: '553px', // Altura exata do Figma
        margin: '0 auto', // Centraliza o banner se a tela for maior que 1440px
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 104px', // Padding lateral padrão do seu Header
        backgroundColor: theme.colors.neutral.white, 
        marginTop: '80px', // Espaço após a listagem de produtos
        marginBottom: '80px', // Espaço de segurança antes do Footer
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* LADO ESQUERDO: Imagem e Bola Decorativa */}
        <div style={{ 
          flex: 1, 
          position: 'relative', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          {/* A BOLA DO FIGMA */}
          <div style={{
            width: '466px',
            height: '466px',
            background: 'linear-gradient(180deg, rgba(66, 0, 255, 0.25) -40.67%, rgba(255, 255, 255, 0) 100%)',
            borderRadius: '50%',
            position: 'absolute',
            zIndex: 1,
            // Centralização precisa
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }} />

          {/* O TÊNIS */}
          <img 
            src="/layon-sneakers.png" 
            alt="Air Jordan Exclusive" 
            style={{ 
              position: 'relative', 
              zIndex: 2, 
              width: '573px', // Largura proporcional ao container
              height: 'auto',
              transform: 'rotate(-10deg)' 
            }} 
          />
        </div>

        {/* LADO DIREITO: Textos e Botão */}
        <div style={{ 
          flex: 1, 
          paddingLeft: '60px',
          zIndex: 3 // Garante que o texto fique acima de qualquer sobreposição
        }}>
          <p style={{ 
            color: theme.colors.primary, 
            fontWeight: 'bold', 
            fontSize: theme.typography.sizes.sm,
            marginBottom: '12px'
          }}>
            Oferta especial
          </p>
          <h2 style={{ 
            fontSize: '48px', 
            color: theme.colors.neutral.darkGray2, 
            fontWeight: theme.typography.weights.bold,
            lineHeight: '50px',
            marginBottom: '20px'
          }}>
            Air Jordan edição de colecionador
          </h2>
          <p style={{ 
            color: theme.colors.neutral.darkGray2, 
            lineHeight: '28px', 
            marginBottom: '32px',
            fontSize: '16px'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          </p>
          <button style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.neutral.white,
            padding: '12px 40px',
            borderRadius: theme.borderRadius.md,
            border: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(201, 32, 113, 0.25)' // Sombra suave na cor primária
          }}>
            Ver Oferta
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;