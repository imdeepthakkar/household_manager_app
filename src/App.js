import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Expenses from "./pages/Expenses";
import Watchlist from "./pages/Watchlist";
import Login from "./pages/Login";
import ManageUsers from "./pages/ManageUsers";

const defaultTheme = {
  primary: "#007bff", // Default blue theme
  background: "#f4f5f7",
  text: "#333"
};

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manage-users" element={<ManageUsers />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
