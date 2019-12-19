import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../store";

export default function Home() {
  const [state, dispatch] = useContext(ThemeContext);

  return (
    <Container theme={state.currentTheme} className="main">
      <div>Create your Wishlist</div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${props => props.theme};
`;
