import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import ProductContextProvider from "./contexts/ProductContext";
import Model from "./components/Model";

function App() {
  return (
    <ProductContextProvider>
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <Model />
        </Router>
      </React.Fragment>
    </ProductContextProvider>
  )
}

export default App;
