import Layout from "../../Layouts/Layout"; 
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import ProductListing from "../../components/ProductListing/ProductListing";
import { PRODUCTS } from "../../data/db";

const ProductListingPage = () => {
  return (
    <Layout>
      <div className="flex px-[100px] py-[40px] bg-[#F5F5F5] gap-[30px]">
        <aside className="w-[308px]">
          <div className="bg-white p-[30px] rounded-[4px]">
            <h3 className="text-[16px] text-[#474747] mb-[5px]">Filtrar por</h3>
            <hr className="my-[15px] border border-[#CCCCCC]" />
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
          </div>
        </aside>

        <section className="flex-1">
          <div className="flex justify-between items-center mb-[30px]">
            <h4 className="text-[#474747]">Resultados para "Ténis" - {PRODUCTS.slice(0, 15).length} produtos</h4>
            <div>
              <label className="text-[16px] font-bold text-[#474747] mr-[10px]">Ordenar por:</label>
              <select className="w-[308px] h-[60px] border border-[#474747] rounded-[4px] px-[15px] text-[16px] text-[#474747] bg-transparent cursor-pointer">
                <option value="relevantes">Mais relevantes</option>
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
              </select>
            </div>
          </div>
          <div className="grid gap-[20px]">
            <ProductListing products={PRODUCTS.slice(0, 15)} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
