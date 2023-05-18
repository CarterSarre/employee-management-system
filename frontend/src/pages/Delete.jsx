import React from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { deleteEmployee } from "../services/employeeService";

const Delete = () => {
  const location = useLocation();
  const { id, firstName, lastName, email } = location.state || {};
  const navigate = useNavigate();

  const deleteEmployees = async () => {
    try {
      await deleteEmployee(id);
    } catch (err) {
      console.log(err);
    }

    navigate("/employees");
  };
  return (
    <div className="actions-container">
      <div>
        <h2>
          Are you sure you want to delete {firstName} {lastName}?
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
        <div className="buttons">
          <NavLink to="/employees" className="nav-link">
            <button>Back to List</button>
          </NavLink>
          <button onClick={deleteEmployees} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
