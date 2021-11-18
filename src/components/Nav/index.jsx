import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Nav = () => {
  return (
    <nav>
      <div className="Header">
        <h1>Logo</h1>
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/shortlisted" className="link">
          ShortListed
        </NavLink>
        <NavLink to="/rejected" className="link">
          Rejected
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
