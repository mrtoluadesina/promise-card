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
    inputList: Array(8).fill({ title: "" }),
    user: {
      name: "",
      email: "",
      title: ""
    },
    isLoading: false
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
