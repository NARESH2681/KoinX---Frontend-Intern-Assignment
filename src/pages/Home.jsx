import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>KoinX - Frontend Intern Assignment</h1>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Name : Naresh Shanmugam</h1>      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/bitcoin" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#87CEFA", color: "white", textDecoration: "none", borderRadius: "5px" }}>
            Click here to view
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
