import styled from "styled-components";
import { Link } from "react-router-dom";

/* Título da coluna */
const Title = styled.h4`
  font-size: 18px;
  margin-bottom: 16px;
`;

/* Lista de links */
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

/* Item da lista */
const ListItem = styled.li`
  margin-bottom: 10px;

  a {
    color: #cccccc;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: white;
    }
  }
`;

const InfoColumn = ({ title, informations }) => {
  return (
    <div>
      <Title>{title}</Title>

      <List>
        {informations.map((item, index) => (
          <ListItem key={index}>
            <Link to={item.link}>{item.text}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default InfoColumn;
