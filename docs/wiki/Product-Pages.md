# Páginas de Produto

## Home
- Galeria hero 1440x681 (2 imagens).
- Coleções em destaque (3 imagens com borda 4px).
- Produtos em alta (8 itens).
- Código: [HomePage.jsx](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/src/pages/HomePage/HomePage.jsx)

## Listagem de Produtos
- Ordenar por: Menor preço / Maior preço.
- Filtrar por:
  - Preço (radio): Até R$100, R$100–R$200, Acima de R$200.
  - Desconto (checkbox): Com desconto, Sem desconto.
- Contagem dinâmica em Section.
- Código:
  - Página: [ProductListingPage.jsx](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/src/pages/ProductListingPage/ProductListingPage.jsx)
  - Componente de filtro: [FilterGroup.jsx](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/src/components/FilterGroup/FilterGroup.jsx)

## Visualização do Produto
- Galeria lateral (700x570, radius 4px, thumbs).
- BuyBox: nome, referência, estrelas, rating, preço/priceDiscount, descrição, CTA “COMPRAR”.
- Opções do Produto:
  - square (46px altura, borda 1px, radius via prop), circle (31px).
  - type text (24px, dark-gray-2) e color (preenchimento).
  - seleção aplica borda 2px primary.
- Recomendações: Section “Produtos recomendados” + ProductListing.
- Código:
  - Página: [ProductViewPage.jsx](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/src/pages/ProductViewPage/ProductViewPage.jsx)
  - BuyBox: [BuyBox.jsx](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/src/components/BuyBox/BuyBox.jsx)
  - Opções: [ProductOptions.jsx](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/src/components/ProductOptions/ProductOptions.jsx)
