import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Products from "./Components/ProductList";
import Cart from "./Components/Cart";
import AboutUs from "./Components/AboutUs";
import Details from "./Components/Details";
import { AppContextProvider } from "./AppContext";
import { useOnClickOutside } from "./hooks";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div className="App">
      <Router>
        <AppContextProvider>
          <div ref={node}>
            <Navbar open={open} setOpen={setOpen}></Navbar>
          </div>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={AboutUs} />
            <Route path="/details" component={Details} />
          </Switch>
        </AppContextProvider>
      </Router>
    </div>
  );
}

export default App;
