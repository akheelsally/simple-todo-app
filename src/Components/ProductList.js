import React, { Component } from "react";
import { AppContext } from "../AppContext";
import ProductCard from "./ProductCard";

class ProductList extends Component {
  static contextType = AppContext;
  state = {
    filter: "laptops",
    current: false,
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  setFilter = (e, filter) => {
    if (!this.state.current) {
      this.myRef.current.classList.remove("active");
    } else {
      this.state.current.classList.remove("active");
    }
    e.target.classList.add("active");
    this.state.current = e.target;
    this.setState({ filter: filter });
  };

  render() {
    const products = this.context.productData[this.state.filter];
    return (
      <div className="product-list">
        <div className="product-tab_container">
          <button
            className="tab-btn"
            onClick={(e) => this.setFilter(e, "desktops")}
            ref={this.myRef}
          >
            Desktops
          </button>

          <button
            className="tab-btn active"
            onClick={(e) => this.setFilter(e, "laptops")}
            ref={this.myRef}
          >
            Laptops
          </button>
        </div>

        <h2 className="product-list_heading">
          Recommended <span className="weak">Products</span>
        </h2>
        <div className="product-card_container">
          {products.map((data) => (
            <ProductCard filter={this.state.filter} id={data.id} data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
