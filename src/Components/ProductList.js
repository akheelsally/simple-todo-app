import React, { Component } from "react";
import { AppContext } from "../AppContext";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import DiscreteSlider from "./slider";
import SimpleSelect from "./select";

class ProductList extends Component {
  static contextType = AppContext;
  state = {
    filter: "laptops",
    current: false,
    max_value: 30000,
    sort_filter: 2,
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  setFilter = (e, filter) => {
    let target = e.target;
    if (target.tagName !== "BUTTON") {
      target = target.parentNode;
    }
    if (!this.state.current) {
      this.myRef.current.classList.remove("active");
    } else {
      this.state.current.classList.remove("active");
    }
    target.classList.add("active");
    this.state.current = target;
    this.setState({ filter: filter });
  };

  setProductDetails = (id, filter) => {
    this.context.setProductDetail(id, filter);
  };

  setMaxValue = (value) => {
    this.setState({ max_value: value });
  };

  setSortFilter = (value) => {
    this.setState({ sort_filter: value });
  };

  render() {
    const products = this.context.productData[this.state.filter].filter(
      (item) => item.price.slice(2).replace(",", "") < this.state.max_value
    );
    if (this.state.sort_filter === 1) {
      products.sort(function (a, b) {
        return (
          a.price.slice(2).replace(",", "") - b.price.slice(2).replace(",", "")
        );
      });
    } else {
      products.sort(function (a, b) {
        return (
          b.price.slice(2).replace(",", "") - a.price.slice(2).replace(",", "")
        );
      });
    }

    return (
      <div className="product-list">
        <div className="product-tab_container">
          <button
            className="tab-btn"
            onClick={(e) => this.setFilter(e, "desktops")}
            ref={this.myRef}
          >
            <FontAwesomeIcon icon={["fas", "desktop"]} className="lg" />
            Desktops
          </button>

          <button
            className="tab-btn active"
            onClick={(e) => this.setFilter(e, "laptops")}
            ref={this.myRef}
          >
            <FontAwesomeIcon icon={["fas", "laptop"]} className="lg" />
            Laptops
          </button>
        </div>

        <div className="filter-controls_container">
          <div>
            <DiscreteSlider
              onChangeCommitted={(e, value) => this.setMaxValue(value)}
            />
          </div>

          <div>
            <SimpleSelect onChange={(value) => this.setSortFilter(value)} />
          </div>
        </div>

        <h2 className="product-list_heading">
          Recommended <span className="weak">Products</span>
        </h2>
        {products.length === 0 ? (
          <div className="no_items">
            <div className="no_items_content">
              <h2 className="no_items_heading">
                Sorry no {this.state.filter} availabe in RF{" "}
                {this.state.max_value} buget range
              </h2>
              <p className="no_items_text">
                Please consider increasing your buget
              </p>
            </div>
          </div>
        ) : (
          <div className="product-card_container">
            {products.map((data) => (
              <ProductCard
                filter={this.state.filter}
                id={data.id}
                data={data}
                setProductDetails={this.setProductDetails}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ProductList;
