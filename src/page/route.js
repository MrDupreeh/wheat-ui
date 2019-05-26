import React from "react";
import Home from "./Home";
import Login from "./Login";
import News from "./News";
import Detail from "./Detail"
import Nav from "../component/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  let url = window.location.pathname;
  let flag = true;
  if (url === "/login") {
    flag = false;
  }
  return (
    <Router>
      {flag && <Nav />}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/news" component={News} />
      <Route exact path="/Detail" component={Detail} />
    </Router>
  );
}

export default App;
