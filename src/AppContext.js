import React, { Component } from "react";
import { productData } from "./Components/data";
const AppContext = React.createContext();

class AppContextProvider extends Component {
  state = {
    productData: productData,
    detailProduct: false,
  };

  setProductDetail = (id, filter) => {
    const product = this.getItem(id, filter);
    console.log(product);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  getItem = (id, filter) => {
    const product = this.state.productData[filter].find(
      (item) => item.id === id
    );
    return product;
  };

  render() {
    return (
      <AppContext.Provider
        value={{ ...this.state, setProductDetail: this.setProductDetail }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContext, AppContextProvider };
