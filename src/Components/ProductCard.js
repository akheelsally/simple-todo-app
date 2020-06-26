import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class ProductCard extends Component {
  handleDetails = (id) => {
    this.props.setProductDetails(id, this.props.filter);
    this.props.history.push("details");
  };
  render() {
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
    } = this.props.data;

    return (
      <div className="product-card">
        <img
          className="product-card_img"
          src={process.env.PUBLIC_URL + "/" + img}
          alt="product image"
        />
        <div className="product-card_content">
          <h2 className="product-card_brand">{brand}</h2>
          <h3 className="product-card_model">{model}</h3>
          <span className="badge">{purpose}</span>

          <div className="spec_container">
            <h4 className="spec_title">CPU</h4>
            <span className="spec_details">{cpu}</span>
            <span className="spec_details-sub">{cpu_model}</span>
          </div>

          <div className="spec_container">
            <h4 className="spec_title">HDD</h4>
            <span className="spec_details">{hdd}</span>
            <span className="spec_details-sub"> {hdd_speed}</span>
          </div>

          <div className="spec_container">
            <h4 className="spec_title">RAM</h4>
            <span className="spec_details">{ram}</span>
            <span className="spec_details-sub">{ram_speed}</span>
          </div>

          <div className="spec_container">
            <h4 className="spec_title">GPU</h4>
            <span className="spec_details">{gpu}</span>
            <span className="spec_details-sub"> {vram}</span>
          </div>

          <div className="spec_container">
            <h4 className="spec_title">Optical Drive</h4>
            <span className="spec_details">{optical_drive}</span>
            <span className="spec_details-sub"> {optical_drive_details}</span>
          </div>

          <div className="product-card_footer-container">
            <button className="card-btn" onClick={() => this.handleDetails(id)}>
              Learn More
            </button>
            <span className="product-card_price">{price}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductCard);
