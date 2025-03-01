import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav style={{ padding: "1rem", background: "#007bff", color: "#fff" }}>
      <h2>Household Manager</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
        <li><Link to="/watchlist">Watchlist</Link></li>
        <li><Link to="/manage-users">Manage Users</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
