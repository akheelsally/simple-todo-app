import React, { Component } from "react";
import { productData } from "./Components/data";
const AppContext = React.createContext();

class AppContextProvider extends Component {
  state = {
    productData: productData,
  };

  render() {
    return (
      <AppContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppContextProvider };
