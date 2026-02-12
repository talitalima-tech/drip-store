# Wiki da Drip Store

Esta é a versão protótipo da Wiki dentro do repositório, pronta para migrar para o GitHub Wiki quando ele estiver habilitado. Ela documenta as páginas entregues e links úteis para o código.

## Páginas do Projeto
- Home: Galeria, Coleções em destaque e Produtos em alta
  - Código: [HomePage.jsx](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/src/pages/HomePage/HomePage.jsx)
- Listagem de Produtos: Ordenação, Filtros e Contagem dinâmica
  - Código: [ProductListingPage.jsx](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/src/pages/ProductListingPage/ProductListingPage.jsx)
  - Filtros (componente): [FilterGroup.jsx](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/src/components/FilterGroup/FilterGroup.jsx)
- Visualização de Produto: Galeria, BuyBox e Produtos recomendados
  - Código: [ProductViewPage.jsx](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/src/pages/ProductViewPage/ProductViewPage.jsx)
  - BuyBox: [BuyBox.jsx](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/src/components/BuyBox/BuyBox.jsx)
  - Opções do Produto: [ProductOptions.jsx](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/src/components/ProductOptions/ProductOptions.jsx)

## Navegação
- Home: http://localhost:5173/
- Produtos: http://localhost:5173/produtos
- Produto: http://localhost:5173/product/1

## Release atual
- Tag: v0.7.0
- Detalhes: [Release v0.7.0](file:///c:/Users/hackp/Desktop/Darlann%20Saints/drip-store/docs/wiki/Release-v0.7.0.md)

## Como migrar para GitHub Wiki
1. Habilite “Wiki” nas configurações do repositório no GitHub.
2. Clone o repositório da Wiki:
   - `git clone https://github.com/<owner>/<repo>.wiki.git`
3. Copie os arquivos desta pasta `docs/wiki` para o repo da Wiki.
4. Commit e push.
