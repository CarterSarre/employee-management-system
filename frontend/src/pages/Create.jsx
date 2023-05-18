import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { postEmployee } from "../services/employeeService";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createEmployee = async (e) => {
    e.preventDefault();

    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    if (!firstName || !lastName || !email) {
      setError("Please fill in all fields.");
    } else {
      try {
        await postEmployee(newEmployee);
        setFirstName("");
        setLastName("");
        setEmail("");
        navigate("/employees");
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <div className="actions-container">
      <h2>Create</h2>
      <form onSubmit={createEmployee}>
        <h4>First Name:</h4>
        <input
          type="text"
          className="input-field"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <h4>Last Name:</h4>
        <input
          type="text"
          className="input-field"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <h4>Email:</h4>
        <input
          type="text"
          className="input-field"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {error !== "" && <p>{error}</p>}
        <div className="buttons">
          <NavLink to="/employees" className="nav-link">
            <button>Back to List</button>
          </NavLink>
          <button type="submit" className="green-button">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
