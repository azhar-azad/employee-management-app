import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import SingleEmployeeComponent from "./components/SingleEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        
        <div className="container">
          <Switch>
            <Route path="/" exact component={ ListEmployeeComponent } />
            <Route path="/employees" exact component={ ListEmployeeComponent } />
            {/*step 1*/}
            <Route path="/employee/:id" exact component={ SingleEmployeeComponent } />
            {/*<Route path="/update-employee/:id" exact component={ UpdateEmployeeComponent } />*/}
          </Switch>
        </div>
        
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
