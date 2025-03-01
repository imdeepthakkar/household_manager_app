// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import TaskList from './components/Tasks/TaskList';
import TaskForm from './components/Tasks/TaskForm';
import ExpenseList from './components/Expenses/ExpenseList';
import ExpenseForm from './components/Expenses/ExpenseForm';
import Watchlist from './components/Watchlist/Watchlist';
import WatchlistForm from './components/Watchlist/WatchlistForm';
import AdminDashboard from './components/Admin/AdminDashboard';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/tasks" component={TaskList} />
        <Route path="/add-task" component={TaskForm} />
        <Route path="/expenses" component={ExpenseList} />
        <Route path="/add-expense" component={ExpenseForm} />
        <Route path="/watchlist" component={Watchlist} />
        <Route path="/add-watchlist" component={WatchlistForm} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/" exact>
          <h2>Welcome to Household Management App</h2>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
