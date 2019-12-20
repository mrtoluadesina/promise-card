import React from "react";
import AppRoutes from "./router";
import { ThemeProvider } from "./store";
import "./App.scss";

export default () => (
  <ThemeProvider>
    <AppRoutes />
  </ThemeProvider>
);
