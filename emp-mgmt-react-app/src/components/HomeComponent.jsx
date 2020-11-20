import React, { Component } from 'react';

class HomeComponent extends Component {
 
  constructor(props) {
    super(props);
    
    this.state = {
    
    };
  }
  
  render() {
    return (
      <div>
        <h2>Employee Management App</h2>
        
        <div>
          <p><a href="/employees">Employee List</a></p>
          <p><a href="/departments">Department List</a></p>
        </div>
      </div>
    );
  }
}

export default HomeComponent;