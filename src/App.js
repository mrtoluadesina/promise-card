import React from "react";
import AppRoutes from "./router";
import { ThemeProvider } from "./store";
import "./App.css";

export default () => (
  <div className="main">
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </div>
);
