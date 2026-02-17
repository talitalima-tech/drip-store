import styled from "styled-components";
import Layout from "../../Layouts/Layout"; 
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import ProductListing from "../../components/ProductListing/ProductListing";
import { PRODUCTS } from "../../data/db";

const Container = styled.div`
  display: flex;
  padding: 40px 100px;
  background-color: #F5F5F5;
  gap: 30px;
`;

const Sidebar = styled.aside`
  width: 308px; 
`;

const Content = styled.section`
  flex: 1; 
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const OrderContainer = styled.div`
  label {
    font-size: 16px;
    font-weight: 700;
    color: #474747;
    margin-right: 10px;
  }

  select {
    width: 308px;
    height: 60px;
    border: 1px solid #474747;
    border-radius: 4px;
    padding: 0 15px;
    font-size: 16px;
    color: #474747;
    background-color: transparent;
    cursor: pointer;
  }
`;

const FilterBox = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 4px;

  h3 {
    font-size: 16px;
    color: #474747;
    margin-bottom: 5px;
  }

  hr {
    margin: 15px 0;
    border: 0.5px solid #CCCCCC;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  gap: 20px;
`;

const ProductListingPage = () => {
  return (
    <Layout>
      <Container>
        {/* filtros */}
        <Sidebar>
          <FilterBox>
            <h3>Filtrar por</h3>
            <hr />
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
          </FilterBox>
        </Sidebar>

        {/* Ordenação e Produtos */}
        <Content>
          <TopContent>
            <h4 style={{color: '#474747'}}>Resultados para "Ténis" - {PRODUCTS.slice(0, 15).length} produtos</h4>
            
            <OrderContainer>
              <label>Ordenar por:</label>
              <select>
                <option value="relevantes">Mais relevantes</option>
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
              </select>
            </OrderContainer>
          </TopContent>

          <ProductsGrid>
             <ProductListing products={PRODUCTS.slice(0, 15)} />
          </ProductsGrid>
        </Content>
      </Container>
    </Layout>
  );
};

export default ProductListingPage;