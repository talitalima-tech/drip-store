import styled from "styled-components";

const SectionWrapper = styled.section`
  margin: 48px 0;
  padding: 0 16px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  justify-content: ${(props) =>
    props.align === "center" ? "center" : "space-between"};
`;

const Title = styled.h2`
  font-size: 24px;
  color: #474747; 
  font-weight: 600;
  margin: 0;
  text-align: ${(props) => (props.align === "center" ? "center" : "left")};
  width: ${(props) => (props.align === "center" ? "100%" : "auto")};
`;

const SectionLink = styled.a`
  font-size: 18px;
  color: #C92071; 
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <SectionWrapper>
      <SectionHeader align={titleAlign}>
        <Title align={titleAlign}>{title}</Title>

        {link && titleAlign !== "center" && (
          <SectionLink href={link.href}>{link.text}</SectionLink>
        )}
      </SectionHeader>

      <Content>{children}</Content>
    </SectionWrapper>
  );
};

export default Section;
