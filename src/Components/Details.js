import React, { Component } from "react";
import { Link } from "react-router-dom";

class Details extends Component {
  render() {
    return (
      <div>
        <h2>Details page</h2>
        <Link to="/"> Back to Products </Link>
      </div>
    );
  }
}

export default Details;
