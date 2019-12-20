import React, { createContext, useReducer } from "react";
import appReducer from "./reducer";
import { YELLOW_THEME } from "./types";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const initialState = {
    currentTheme: "#FFE04A",
    yellow: "#FFE04A",
    pink: "#FF94E1",
    blue: "#6ECFFF",
    active: YELLOW_THEME,
    inputList: Array(10).fill({ title: "" }),
    user: {
      name: "amakiri joseph",
      email: "amakirij@gmail.com",
      title: "Christmas"
    }
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
