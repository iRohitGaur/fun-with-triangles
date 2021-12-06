import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ cartItems }) {
  return (
    <div className="nav">
      <div className="nav__left">Fun with 📐angles</div>
      <div className="nav__right">
        <NavLink to="/" activeClassName="active">
          <div className="nav__items">Is Triangle?</div>
        </NavLink>
        <NavLink to="/quiz" activeClassName="active">
          <div className="nav__items">Quiz</div>
        </NavLink>
        <NavLink to="/hypotenuse" activeClassName="active">
          <div className="nav__items">Hypotenuse</div>
        </NavLink>
        <NavLink to="/area" activeClassName="active">
          <div className="nav__items">Area</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
