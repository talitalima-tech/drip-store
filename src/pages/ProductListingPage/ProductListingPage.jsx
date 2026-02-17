import styled from "styled-components";
import Layout from "../../Layouts/Layout"; // Reaproveita Header e Footer
import FilterGroup from "../../components/FilterGroup/FilterGroup";

const Container = styled.div`
  display: flex;
  padding: 40px 100px;
  background-color: #F5F5F5;
  gap: 30px;
`;

const Sidebar = styled.aside`
  width: 308px; /* Largura exata do Figma */
`;

const Content = styled.section`
  flex: 1; /* Ocupa o restante da tela */
`;

const ProductListingPage = () => {
  return (
    <Layout>
      <Container>
        {/* Lado Esquerdo */}
        <Sidebar>
          <h3>Filtrar por</h3>
          <hr style={{ margin: '15px 0', border: '1px solid #CCCCCC' }} />
          
          {/* Usando nosso componente pequeno várias vezes */}
          <FilterGroup 
            title="Marca" 
            inputType="checkbox" 
            options={[{text: "Adidas"}, {text: "Balenciaga"}, {text: "K-Swiss"}, {text: "Nike"}, {text: "Puma"}]} 
          />

          <FilterGroup 
            title="Categoria" 
            inputType="checkbox" 
            options={[{text: "Esporte e Lazer"}, {text: "Casual"}, {text: "Utilitário"}, {text: "Corrida"}]} 
          />

          <FilterGroup 
            title="Gênero" 
            inputType="checkbox" 
            options={[{text: "Masculino"}, {text: "Feminino"}, {text: "Unissex"}]} 
          />

          <FilterGroup 
            title="Estado" 
            inputType="checkbox" 
            options={[{text: "Novo"}, {text: "Usado"}]} 
          />
        </Sidebar>

        {/* Lado Direito */}
        <Content>
          <h2>Listagem de Produtos aparecerá aqui</h2>
        </Content>
      </Container>
    </Layout>
  );
};

export default ProductListingPage;