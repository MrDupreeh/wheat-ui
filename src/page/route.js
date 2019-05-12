import React from "react";
import Home from "./Home";
import Login from "./Login";
import News from "./News";
import Nav from "../component/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  let url = window.location.pathname;
  let flag = true;
  if (url === "/") {
    flag = false;
  }
  return (
    <Router>
      {flag && <Nav />}
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/news" component={News} />
    </Router>
  );
}

export default App;
