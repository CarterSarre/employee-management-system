import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Employee from "../components/EmployeeCard.jsx";
import { getEmployees, deleteEmployee } from "../services/employeeService.jsx";

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <div className="employee-container d-flex flex-column align-items-center position-relative">
        <h2>Employees</h2>
        <NavLink to="/create" className="nav-link">
          <button className="btn btn-primary">Create New</button>
        </NavLink>
        <table className="employee-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  email={employee.email}
                />
              ))
            ) : (
              <tr>
                <td colSpan={4}>No Employees Found...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeePage;
