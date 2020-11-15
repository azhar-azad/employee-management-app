import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        
        <div className="container">
          <Switch>
            <Route path="/" exact component={ ListEmployeeComponent }></Route>
            <Route path="/employees" exact component={ ListEmployeeComponent }></Route>
            <Route path="/add-employee" exact component={ CreateEmployeeComponent }></Route>
            <Route path="/update-employee/:id" exact component={ UpdateEmployeeComponent }></Route>
          </Switch>
        </div>
        
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
