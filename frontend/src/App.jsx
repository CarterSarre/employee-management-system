import React from "react";
import Employee from "./pages/Employee";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Details from "./pages/details";
import Home from "./pages/Home";
import Delete from "./pages/Delete";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </div>
  );
};

export default App;
