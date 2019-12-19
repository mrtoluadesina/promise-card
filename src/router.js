import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/home";
import Share from "./views/share";

export default function AppRoutes() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/share" component={Share}></Route>
    </Router>
  );
}
