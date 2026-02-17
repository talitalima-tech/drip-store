import styled from "styled-components";

// 1. Estilização do grupo (o título e o espaçamento)
const Container = styled.div`
  margin-bottom: 20px;
  
  h4 {
    font-size: 14px;
    color: #474747; /* dark-gray-2 */
    margin-bottom: 10px;
  }
`;

// 2. Estilização de cada linha (input + texto)
const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  input {
    width: 22px;
    height: 22px;
    cursor: pointer;
    /* No CSS puro usamos accent-color para mudar a cor do checkbox */
    accent-color: #C92071; /* Cor primary (Rosa) */
  }

  label {
    font-size: 14px;
    color: #474747;
    cursor: pointer;
  }
`;

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <Container>
      <h4>{title}</h4>
      {/* Aqui fazemos um mapa para criar cada opção da lista */}
      {options.map((option, index) => (
        <Option key={index}>
          <input type={inputType} id={option.text} name={title} />
          <label htmlFor={option.text}>{option.text}</label>
        </Option>
      ))}
    </Container>
  );
};

export default FilterGroup;