import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Nav = () => {
  return (
    <nav>
      <div className="Header">
        <h1>Logo</h1>
        <NavLink exact to="/" className="link" activeClassName="activeLink">
          Home
        </NavLink>
        <NavLink
          to="/shortlisted"
          className="link"
          activeClassName="activeLink"
        >
          Shortlisted
        </NavLink>
        <NavLink to="/rejected" className="link" activeClassName="activeLink">
          Rejected
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
