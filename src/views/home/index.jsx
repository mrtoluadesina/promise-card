import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../store";
import { YELLOW_THEME, PINK_THEME, BLUE_THEME } from "../../store/types";
import { setActiveStyle } from "../../utils";
import "./home.scss";

export default function Home() {
  const [state, dispatch] = useContext(ThemeContext);

  return (
    <Container theme={state.currentTheme} className="main">
      <h1>Create your Wishlist</h1>
      <p>Chose color</p>
      <div className="choose_colors">
        <span
          onClick={() => dispatch({ type: YELLOW_THEME, active: YELLOW_THEME })}
          style={setActiveStyle({
            active: state.active,
            boxType: YELLOW_THEME
          })}
        ></span>
        <span
          onClick={() => dispatch({ type: PINK_THEME, active: PINK_THEME })}
          style={setActiveStyle({
            active: state.active,
            boxType: PINK_THEME
          })}
        ></span>
        <span
          onClick={() => dispatch({ type: BLUE_THEME, active: BLUE_THEME })}
          style={setActiveStyle({
            active: state.active,
            boxType: BLUE_THEME
          })}
        ></span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${props => props.theme};
`;
