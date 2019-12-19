import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../store";
import { YELLOW_THEME, PINK_THEME, BLUE_THEME } from "../../store/types";
import { setActiveStyle } from "../../utils";
import "./index.scss";
import Table from '../../components/Table';

export default function Home() {
  const [state, dispatch] = useContext(ThemeContext);

  return (
    <Container theme={state.currentTheme} className="main">
      <div className="app-content">
        <h2 className="header">Create your Wishlist</h2>
        <h3 className="small_header">Choose color</h3>
        <div className="choose_colors">
          <span
            onClick={() =>
              dispatch({ type: YELLOW_THEME, active: YELLOW_THEME })
            }
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
