import React, { useContext } from "react";
import { ThemeContext } from "../../store";
import styled from "styled-components";
import Card from "./Card";
import Button from "../../components/Button";

export default function Share() {
  const [state, dispatch] = useContext(ThemeContext);
  return (
    <Container theme={state.currentTheme}>
      <CardWrapper>
        <Card inputList={state.inputList} />
      </CardWrapper>
      <Actions>
        <Button value="Share with friends" />
        <Button value="Create new card" />
      </Actions>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${props => props.theme};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem 2rem;
  height: 100vh;
  z-index: 1;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 100vh;
    background-color: rgba(255,255,255,0.4);
    position: absolute;
    top: 0; 
    left: 0;
  }
`;

const CardWrapper = styled.div`
  border: 2px dashed black;
  z-index: 3;
  position: relative;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 3;
`;
