import React, { useContext } from "react";
import { ThemeContext } from "../../store";
import styled from "styled-components";
import Table from "../../components/Table";

export default function Card(props) {
  const [state, dispatch] = useContext(ThemeContext);
  return (
    <Container theme={state.currentTheme} id="promiseCard">
      <Header>
        <Title>My Promise Card</Title>
        <Name>for my anniversary</Name>
      </Header>
      <Table inputList={props.inputList} />
      <Footer>
        <Slogan><em>Thanks for Giving</em></Slogan>
        <Span>create yours on promisecard.com.ng</Span>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${props => props.theme};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 310px;
  min-height: 550px;
  padding: 1rem;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Title = styled.h2`
  font-family: "GTSuperText";
`;
const Name = styled.div`
  font-size: 16px;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: .8rem;
`;
const Slogan = styled.h2`
  font-size: 24px;
  font-family: "GTSuperText";
`;
const Span = styled.span`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 10px;
  line-height: 12px;
  padding: 0.25rem 1rem;
  border-radius: 8px;
`;

Card.defaultProps = {
  inputList: [{ title: "Shoes" }, { title: "Chair" }]
};
