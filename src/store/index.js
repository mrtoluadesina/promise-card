import React, { createContext, useReducer } from "react";
import themeReducer from "./reducer";
import { YELLOW_THEME } from "./types";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const initialState = {
    currentTheme: "#FFE04A",
    yellow: "#FFE04A",
    pink: "#FF94E1",
    blue: "#6ECFFF",
    active: YELLOW_THEME
  };

  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
