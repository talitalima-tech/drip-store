import Section from "../../components/Section/Section";
import Layout from "../../Layouts/Layout";
import Gallery from "../../components/Gallery/Gallery";
import ProductListing from "../../components/ProductListing/ProductListing";

const HomePage = () => {
  return (
    <Layout>

      {/* SLIDE */}
      <Gallery
        images={[
          { src: "/home-slide-1.jpeg" },
          { src: "/home-slide-2.jpeg" },
          { src: "/home-slide-3.jpeg" }
        ]}
        width="1440px"
        height="681px"
      />

      {/* COLEÇÕES */}
      <Section title="Coleções em destaque" titleAlign="center">
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center"
        }}>
          <img src="/collection-1.png" style={{ borderRadius: "4px" }} />
          <img src="/collection-2.png" style={{ borderRadius: "4px" }} />
          <img src="/collection-3.png" style={{ borderRadius: "4px" }} />
        </div>
      </Section>

      {/* PRODUTOS */}
      <Section title="Produtos em alta">
        <ProductListing
          products={[
            {
              name: "Produto 1",
              image: "/product-thumb-1.png",
              price: 200,
              priceDiscount: 149.9
            },
            {
              name: "Produto 2",
              image: "/product-thumb-2.png",
              price: 49.9
            },
            {
              name: "Produto 3",
              image: "/product-thumb-3.png",
              price: 99.9
            },
            {
              name: "Produto 4",
              image: "/product-thumb-4.png",
              price: 199.9
            },
            {
              name: "Produto 5",
              image: "/product-thumb-1.png",
              price: 120
            },
            {
              name: "Produto 6",
              image: "/product-thumb-2.png",
              price: 89.9
            },
            {
              name: "Produto 7",
              image: "/product-thumb-3.png",
              price: 300,
              priceDiscount: 249.9
            },
            {
              name: "Produto 8",
              image: "/product-thumb-4.png",
              price: 59.9
            }
          ]}
        />
      </Section>

    </Layout>
  );
};

export default HomePage;
