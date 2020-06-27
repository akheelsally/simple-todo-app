import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

class Details extends Component {
  static contextType = AppContext;

  isNotValid = (prop, value) => {
    return (
      value === "" ||
      prop.toLowerCase() === "price" ||
      prop.toLowerCase() === "img" ||
      prop.toLowerCase() === "id"
    );
  };

  render() {
    const currentProduct = this.context.detailProduct;
    const {
      id,
      brand,
      model,
      price,
      img,
      purpose,
      cpu,
      ram,
      cpu_model,
      hdd,
      hdd_speed,
      ram_speed,
      gpu,
      vram,
      optical_drive,
      optical_drive_details,
    } = currentProduct;

    return (
      <div>
        <h2>Product Details</h2>
        <Link className="card-btn" to="/">
          Back to Products
        </Link>
        <div id="details">
          <img
            className="frame"
            src={process.env.PUBLIC_URL + "/" + img}
            alt="product image"
          />
          <div className="content-container">
            <h2 className="product-card_brand">{brand}</h2>
            <h3 className="product-card_model">{model}</h3>
            <span className="badge">{purpose}</span>

            {Object.entries(currentProduct).map((item) => {
              const [prop, value] = item;
              if (this.isNotValid(prop, value)) {
                return;
              }
              return (
                <div className="spec_container">
                  <span className="spec_title">
                    <strong>{item[0]} </strong>
                  </span>
                  <span className="spec_details">
                    {item[1] ? item[1] : "None"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
