import React, { useState } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { putEmployee } from "../services/employeeService";

const Edit = () => {
  const location = useLocation();
  const { id, firstName, lastName, email } = location.state || {};
  const [fName, setFName] = useState(firstName);
  const [lName, setLName] = useState(lastName);
  const [email1, setEmail] = useState(email);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createEmployee = async (e) => {
    e.preventDefault();

    const updatedEmployee = {
      firstName: fName,
      lastName: lName,
      email: email1,
    };

    if (!fName || !lName || !email1) {
      setError("Please fill in all fields.");
    } else {
      try {
        await putEmployee(id, updatedEmployee);
      } catch (err) {
        console.error(err);
      }
      navigate("/employees");
    }
  };

  return (
    <div className="actions-container">
      <h2>
        Edit {firstName} {lastName}
      </h2>
      <form onSubmit={createEmployee}>
        <h4>First Name:</h4>
        <input
          type="text"
          className="input-field"
          value={fName}
          placeholder="First Name"
          onChange={(e) => setFName(e.target.value)}
        />
        <h4>Last Name:</h4>
        <input
          type="text"
          className="input-field"
          value={lName}
          placeholder="Last Name"
          onChange={(e) => setLName(e.target.value)}
        />
        <h4>Email:</h4>
        <input
          type="text"
          className="input-field"
          value={email1}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {error !== "" && <p className="text-danger">{error}</p>}
        <div className="buttons">
          <NavLink to="/employees" className="nav-link">
            <button>Back to List</button>
          </NavLink>
          <button type="submit" className="green-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
