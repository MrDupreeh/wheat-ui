import React from "react";
import Home from "./Home";
import Login from "./Login";
import News from "./News";
import Detail from "./Detail"
import Cert from "./Cert"
import Register from "./Register"
import Commodity from "./Commodity"
import Sort from "./Sort"
import Order from "./Order"
import Payment from "./Payment"
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
      <Route exact path="/Cert" component={Cert} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/sort" component={Sort} />
      <Route exact path="/commodity" component={Commodity} />
      <Route exact path="/order" component={Order} />
      <Route exact path="/payment" component={Payment} />
    </Router>
  );
}

export default App;
