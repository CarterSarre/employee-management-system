import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="nav-link">
        <h1>Employee Management System</h1>
      </NavLink>
      <NavLink to="/employees" className="nav-link">
        <h2>Employees</h2>
      </NavLink>
    </div>
  );
};

export default Header;
