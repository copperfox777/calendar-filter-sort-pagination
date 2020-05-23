import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="mynavbar" role="navigation" aria-label="main navigation">
      <div className="mynavitem">
        <NavLink activeStyle={{ fontWeight: "bold" }} to="/page-one">
          Page1
        </NavLink>
      </div>
      <div className="mynavitem">
        <NavLink activeStyle={{ fontWeight: "bold" }} to="/page-two">
          Page2
        </NavLink>
      </div>
    </nav>
  );
}
