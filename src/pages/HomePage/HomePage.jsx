import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../Layouts/Layout";
import Section from "../../components/Section/Section";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";
import ProductListing from "../../components/ProductListing/ProductListing";
import Hero from "../../components/Hero/Hero";
import { PRODUCTS, HOME_SLIDES, COLLECTIONS } from "../../data/db";

const HomePage = () => {
  return (
    <Layout>
      <main className="flex flex-col gap-[80px] bg-neutral-lightGray3 pb-[80px]">
        <Hero slides={HOME_SLIDES} />

        <div className="max-w-[1440px] mx-auto px-[104px] w-full">
          <Section>
            <div className="flex justify-between items-center w-full mb-[20px]">
              <h2 className="text-[24px] text-[#474747] font-bold">Coleções em destaque</h2>
            </div>
            <div className="flex gap-[20px] mt-[20px] w-full">
              {COLLECTIONS.map((col, i) => (
                <div
                  key={i}
                  className="relative flex-1 h-[251px] bg-[#D8E3ED] rounded-[8px] p-[30px] flex flex-col justify-between overflow-hidden"
                >
                  <span className="bg-[#E7FF86] text-[#474747] font-extrabold text-[12px] px-[15px] py-[5px] rounded-[20px] w-fit mb-[10px] z-20">
                    30% OFF
                  </span>
                  <button className="w-[153px] h-[48px] bg-[#F5F5F5] text-primary rounded-[8px] font-bold text-[16px] z-20 mt-auto transition hover:bg-white hover:scale-[1.02]">
                    Comprar
                  </button>
                  <img className="absolute right-0 bottom-0 h-full z-10 object-contain" src={col.image} alt="Coleção" />
                </div>
              ))}
            </div>
          </Section>

          <Section title="Categorias em destaque" titleAlign="center">
            <CategoryGrid />
          </Section>

          <Section>
            <div className="flex justify-between items-center w-full mb-[20px]">
              <h2 className="text-[24px] text-[#474747] font-bold">Produtos em alta</h2>
              <Link
                to="/produtos"
                className="text-primary no-underline font-normal text-[18px] flex items-center gap-[8px] hover:underline"
              >
                Ver todos <span>&rarr;</span>
              </Link>
            </div>
            <ProductListing products={PRODUCTS.slice(0, 8)} />
          </Section>
        </div>

        <SpecialOffer />
      </main>
    </Layout>
  );
};

export default HomePage;
