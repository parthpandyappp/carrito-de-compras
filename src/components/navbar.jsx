import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <div className="text-center">
      <nav
        style={{ display: "block", fontFamily: "Oswald", fontSize: "54px" }}
        class="navbar navbar-light bg-light"
      >
        <a className="navbar-brand" href="https://github.com/parthpandyappp">
          Shopping Cart{" "}
          <span className="badge badge-pill badge-secondary">
            {props.totalCounts}
          </span>
          <br />
          <p style={{ fontFamily: "Raleway", fontSize: "14px" }}>
            A simple <b>Add to cart</b> feature in React
          </p>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
