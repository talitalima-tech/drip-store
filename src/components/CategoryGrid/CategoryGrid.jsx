import styled from "styled-components";
import { theme } from "../../styles/theme";
import { CATEGORIES } from "../../data/db";
import { IoShirtOutline } from "react-icons/io5";
import { PiBaseballCapLight, PiHeadphonesLight, PiPantsLight } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin: 40px 0;
  flex-wrap: wrap; /* Garante que quebre linha em telas menores */
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Circle = styled.div`
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background: ${theme.colors.neutral.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${theme.shadows?.md || '0px 4px 10px rgba(0,0,0,0.1)'};
  cursor: pointer;
  transition: 0.2s;
  
  /* Cor padrão do ícone */
  color: ${theme.colors.neutral.darkGray2 || '#474747'};

  &:hover { 
    color: ${theme.colors.primary};
    transform: translateY(-5px);
  }

  svg { 
    width: 64px; 
    height: 64px; 
  }
`;

// 2. Função auxiliar para escolher o ícone baseado no texto
const getIcon = (label) => {
  switch (label.toLowerCase()) {
    case 'camisetas': return <IoShirtOutline />;
    case 'calças': return <PiPantsLight />;
    case 'bonés': return <PiBaseballCapLight />;
    case 'headphones': return <PiHeadphonesLight />;
    case 'tênis': return <GiConverseShoe />;
    default: return <IoShirtOutline />;
  }
};

const CategoryGrid = () => (
  <Grid>
    {CATEGORIES.map((cat, idx) => (
      <Item key={idx}>
        <Circle>
          {getIcon(cat.label)}
        </Circle>
        <span style={{ 
          fontWeight: '700', 
          fontSize: '14px', 
          color: '#474747' 
        }}>
          {cat.label}
        </span>
      </Item>
    ))}
  </Grid>
);

export default CategoryGrid;