import React from "react";
import { Link } from "react-router-dom";
import logo from "../prolap-logo.jpg";
import Burger from "react-css-burger";

function Navbar({ open, setOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to="/">
          {" "}
          <img className="nav_logo" src={logo} alt="" />
        </Link>
        <Burger
          id="nav_toggle"
          onClick={() => setOpen(!open)}
          active={open}
          burger="slider"
          color={open ? "#7f9eb5" : "#003e6b"}
        />
        <div
          className="navbar_navlinks_container"
          style={{
            transform: open ? "translateX(0) " : "translateX(200%)",
          }}
        >
          <span className="navlink">
            <Link to="/"> Products</Link>
          </span>
          <span className="navlink">
            <Link to="/cart"> Cart</Link>
          </span>
          <span className="navlink">
            <Link to="/about"> About</Link>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
