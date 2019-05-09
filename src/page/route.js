import React from "react";
import Home from "./Home";
import Nav from "../component/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
