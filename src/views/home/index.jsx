import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../store";

import "./index.scss";
import { Table } from "../../components/Styles";

export default function Home() {
  const [state, dispatch] = useContext(ThemeContext);

  return (
    <Container theme={state.currentTheme} className="main">
      <div className="app-content">
        <Heading>Create your Wishlist</Heading>
        <Small>Choose color</Small>
        <Table />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${props => props.theme};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 27px;
  width: 200px;
  line-height: 35px;
  text-align: center;
`;

const Small = styled.h3`
  font-size: 16px;
`;
