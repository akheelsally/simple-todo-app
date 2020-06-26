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
      </div>
    );
  }
}

export default AboutUs;
