import styled from "styled-components";
import { theme } from "../../styles/theme";
import { CATEGORIES } from "../../data/db";

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin: 40px 0;
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
  box-shadow: ${theme.shadows.md};
  cursor: pointer;
  transition: 0.2s;
  &:hover { 
    border: 2px solid ${theme.colors.primary};
    transform: translateY(-5px);
  }
  img { width: 64px; height: auto; }
`;

const CategoryGrid = () => (
  <Grid>
    {CATEGORIES.map((cat, idx) => (
      <Item key={idx}>
        <Circle><img src={cat.icon} alt={cat.label} /></Circle>
        <span style={{ fontWeight: '700', fontSize: '14px' }}>{cat.label}</span>
      </Item>
    ))}
  </Grid>
);

export default CategoryGrid;