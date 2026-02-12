import React, { useMemo, useState } from 'react';
import Layout from '../../layouts/Layout';
import { theme } from '../../styles/theme';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';

export default function ProductListingPage() {
  const baseProducts = useMemo(
    () => [
      { id: 1, name: 'Tênis Runner Pro', image: 'public/product-thumb-1.png', price: 200, priceDiscount: 149.9 },
      { id: 2, name: 'Camiseta Casual', image: 'public/product-thumb-2.png', price: 49.9 },
      { id: 3, name: 'Jaqueta Esportiva', image: 'public/product-thumb-3.png', price: 120, priceDiscount: 99.9 },
      { id: 4, name: 'Boné Street', image: 'public/product-thumb-4.png', price: 89.9 },
      { id: 5, name: 'Mochila Travel', image: 'public/product-thumb-5.png', price: 299.9, priceDiscount: 249.9 },
      { id: 6, name: 'Meia Performance', image: 'public/product-thumb-6.png', price: 59.9 },
      { id: 7, name: 'Calça Confort', image: 'public/product-thumb-7.png', price: 159.9, priceDiscount: 129.9 },
      { id: 8, name: 'Bermuda Flex', image: 'public/product-thumb-8.png', price: 79.9 }
    ],
    []
  );

  const [order, setOrder] = useState('asc'); // asc: menor preço, desc: maior preço
  const [priceFilter, setPriceFilter] = useState([]); // radio: ['lt100'|'100-200'|'gt200']
  const [discountFilter, setDiscountFilter] = useState([]); // checkbox: ['discount','no-discount']

  const sidebarStyle = {
    width: 308,
    flex: '0 0 308px',
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  };

  const mainStyle = {
    flex: 1
  };

  const gridStyle = {
    display: 'flex',
    gap: 24
  };

  const labelStyle = {
    fontSize: theme.typography.sizes.base,
    color: theme.colors.neutral[600],
    marginBottom: 8
  };

  const selectStyle = {
    width: 308,
    height: 60,
    border: `1px solid ${theme.colors.neutral[400]}`,
    borderRadius: theme.borderRadius.md,
    fontSize: theme.typography.sizes.base,
    color: theme.colors.neutral[600],
    padding: '0 12px',
    backgroundColor: theme.colors.neutral[100]
  };

  const filterCardStyle = {
    backgroundColor: theme.colors.neutral[100],
    border: `1px solid ${theme.colors.neutral[300]}`,
    borderRadius: theme.borderRadius.md,
    padding: 16
  };

  const filterTitleStyle = {
    fontSize: theme.typography.sizes.base,
    color: theme.colors.neutral[600],
    fontWeight: theme.typography.weights.semibold,
    marginBottom: 8
  };

  const hrStyle = {
    height: 1,
    backgroundColor: theme.colors.neutral[400],
    border: 'none',
    margin: '8px 0 12px 0'
  };

  const filteredProducts = useMemo(() => {
    let arr = [...baseProducts];
    if (priceFilter[0] === 'lt100') {
      arr = arr.filter((p) => p.price < 100);
    } else if (priceFilter[0] === '100-200') {
      arr = arr.filter((p) => p.price >= 100 && p.price <= 200);
    } else if (priceFilter[0] === 'gt200') {
      arr = arr.filter((p) => p.price > 200);
    }

    if (discountFilter.length === 1) {
      if (discountFilter.includes('discount')) {
        arr = arr.filter((p) => typeof p.priceDiscount === 'number');
      } else if (discountFilter.includes('no-discount')) {
        arr = arr.filter((p) => typeof p.priceDiscount !== 'number');
      }
    }

    arr.sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price));
    return arr;
  }, [baseProducts, priceFilter, discountFilter, order]);

  return (
    <Layout>
      <div style={{ padding: '40px 104px' }}>
        <div style={gridStyle}>
          <aside style={sidebarStyle}>
            <div>
              <div style={labelStyle}>Ordenar por</div>
              <select
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                style={selectStyle}
              >
                <option value="asc" style={{ color: theme.colors.neutral[600] }}>
                  Menor preço
                </option>
                <option value="desc" style={{ color: theme.colors.neutral[600] }}>
                  Maior preço
                </option>
              </select>
            </div>

            <div style={filterCardStyle}>
              <div style={filterTitleStyle}>Filtrar por</div>
              <hr style={hrStyle} />

              <FilterGroup
                title="Preço"
                inputType="radio"
                options={[
                  { text: 'Até R$ 100', value: 'lt100' },
                  { text: 'R$ 100 a R$ 200', value: '100-200' },
                  { text: 'Acima de R$ 200', value: 'gt200' }
                ]}
                values={priceFilter}
                onChange={setPriceFilter}
              />

              <FilterGroup
                title="Desconto"
                inputType="checkbox"
                options={[
                  { text: 'Com desconto', value: 'discount' },
                  { text: 'Sem desconto', value: 'no-discount' }
                ]}
                values={discountFilter}
                onChange={setDiscountFilter}
              />
            </div>
          </aside>

          <main style={mainStyle}>
            <Section
              title={`${filteredProducts.length} produtos encontrados`}
              titleAlign="left"
            >
              <ProductListing products={filteredProducts} />
            </Section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
