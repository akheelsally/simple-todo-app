import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div id="about-us">
        <img
          className="frame"
          src={process.env.PUBLIC_URL + "/img/prolap-shop.jpg"}
          alt=""
        />
        <div className="content-container">
          <h1>About Prolap</h1>
          <h2>Who We Are </h2>
          <p>
            Prolap is considered as the trendsetter of “Only Originals” in the
            Maldives. All products sold are 100% genuine originals and are
            imported directly from the United States. Our showroom provides the
            customer with hands on experience of the laptops while maintaining a
            wide variety of designs and models to fit the individual customer’s
            needs.
          </p>
          <h3>Our Vision</h3>
          <blockquote>
            To be a distinguished laptop showroom with computer accessories
            known for the quality of products, setting new trends at the best
            prices
          </blockquote>

          <h3>Our Mission</h3>
          <blockquote>
            To offer continuous value added products to our customers
          </blockquote>
          <p>
            To accomplish this, we focus on import products known for their
            exceptional design,innovation, quality and ease of use.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
