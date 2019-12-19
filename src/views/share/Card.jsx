import React from 'react';
import styled from 'styled-components';
import Table from '../../components/Table';

export default function Card(props) {
  return ( 
    <Container>
      <Header>
        <h2>My Promise Card</h2>
        <Name>for my anniversary</Name>
      </Header>
      <Table />
      <Footer>
        <Slogan>Thanks for Giving</Slogan>
        <Span>create yours on promisecard.com.ng</Span>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 310px;
  min-height: 550px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  text-align: center;
`;
const Name = styled.div`
  font-size: 16px;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Slogan = styled.h2`
  font-size: 24px;
  font-family: "GTSuperText";
`;
const Span = styled.span`
  background-color: rgba(0,0,0,.7);
  color: white;
  font-size: 16px;
  padding: .5rem 1rem;
`;