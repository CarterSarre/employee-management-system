import React from "react";
import { NavLink } from "react-router-dom";

const EmployeeCard = ({ id, firstName, lastName, email }) => {
  return (
    <tr className="Employee" key={id}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        <NavLink
          to={`/details/${id}`}
          state={{ id, firstName, lastName, email }}
          className="nav-link"
        >
          <button>View</button>
        </NavLink>
        <NavLink
          to={`/edit/${id}`}
          state={{ id, firstName, lastName, email }}
          className="nav-link"
        >
          <button>Edit</button>
        </NavLink>
        <NavLink
          to={`/delete/${id}`}
          state={{ id, firstName, lastName, email }}
          className="nav-link"
        >
          <button>Delete</button>
        </NavLink>
      </td>
    </tr>
  );
};

export default EmployeeCard;
