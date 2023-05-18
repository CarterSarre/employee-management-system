import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const { id, firstName, lastName, email } = location.state || {};

  return (
    <div className="actions-container">
      <h2>
        {firstName} {lastName}
      </h2>
      <div className="details">
        <h3>ID:</h3>
        <p>{id}</p>
      </div>
      <div className="details">
        <h3>First Name:</h3>
        <p>{firstName}</p>
      </div>
      <div className="details">
        <h3>Last Name:</h3>
        <p>{lastName}</p>
      </div>
      <div className="details">
        <h3>Email:</h3>
        <p>{email}</p>
      </div>
      <NavLink to="/employees" className="nav-link">
        <button>Back to List</button>
      </NavLink>
    </div>
  );
};

export default Details;
