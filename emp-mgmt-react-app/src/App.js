import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from "./components/employee-components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import SingleEmployeeComponent from "./components/employee-components/SingleEmployeeComponent";
import UpdateEmployeeComponent from "./components/employee-components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/employee-components/ViewEmployeeComponent";
import HomeComponent from "./components/HomeComponent";
import ListDepartmentComponents from "./components/department-components/ListDepartmentComponents";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        
        <div className="container">
          <Switch>
            <Route path="/" exact component={ HomeComponent } />
            <Route path="/employees" exact component={ ListEmployeeComponent } />
            {/*step 1*/}
            <Route path="/employee/:id" exact component={ SingleEmployeeComponent } />
            <Route path="/view-employee/:id" exact component={ ViewEmployeeComponent } />
            {/*<Route path="/update-employee/:id" exact component={ UpdateEmployeeComponent } />*/}
            
            <Route path="/departments" component={ ListDepartmentComponents } />
          </Switch>
        </div>
        
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
