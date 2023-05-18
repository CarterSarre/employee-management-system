# Employee Management System

This is a web application for managing employee information using React.js, Spring Boot, and MongoDB. The website allows users to perform CRUD (Create, Read, Update, Delete) operations on employee records.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Spring Boot: A Java framework for creating web applications.
- MongoDB: A NoSQL database for storing and retrieving employee data.

## Features

1. Employee Creation: Users can create new employee records by providing necessary information such as first name, last name, and email.
![Screenshot](/images/create.png)
3. Employee List: The website displays a list of all employees with their basic details, allowing users to view the information at a glance.
![Screenshot](/images/viewEmployees.png)
5. Employee Details: Users can click to view an employee information, including first name, last name, and email.
![Screenshot](/images/viewEmployee.png)
7. Employee Editing: Users have the ability to edit employee information.
![Screenshot](/images/edit.png)
9. Employee Deletion: Users can delete an employee record if it is no longer required.
![Screenshot](/images/delete.png)


## Getting Started

Follow the instructions below to set up and run the application locally:

1. Clone the repository: `git clone https://github.com/your/repository.git`
2. Navigate to the project directory: `cd employee-management-system`
3. Install the dependencies:
   - React.js frontend: `cd frontend && npm install`
   - Spring Boot backend: `cd backend && mvn install`
4. Start the application:
   - React.js frontend: `cd frontend && npm run dev`
   - Spring Boot backend: `cd backend && mvn spring-boot:run`
5. Access the application in your web browser at `http://localhost:5173`.
