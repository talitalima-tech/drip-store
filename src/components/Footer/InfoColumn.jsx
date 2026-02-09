import styled from "styled-components";

const Column = styled.div`
  color: #cccccc;
  font-size: 16px;
`;

const Title = styled.h3`
  color: #ffffff; 
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 14px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #cccccc;
  line-height: 26px;

  &:hover {
    color: #ffffff;
  }
`;

const InfoColumn = ({ title, informations }) => {
  return (
    <Column>
      <Title>{title}</Title>

      <List>
        {informations.map((item, index) => (
          <ListItem key={index}>
            <Link href={item.link}>{item.text}</Link>
          </ListItem>
        ))}
      </List>
    </Column>
  );
};

export default InfoColumn;
