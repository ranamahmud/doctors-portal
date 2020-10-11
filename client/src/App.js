import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './components/AddDoctor/AddDoctor/AddDoctor';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route path="/addDoctor">
          <AddDoctor />
        </Route>
        <Route path="/dashboard/appointment">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
