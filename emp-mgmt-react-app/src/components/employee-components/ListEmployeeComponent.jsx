import React, { Component } from 'react';
import EmployeeApiService from "../../services/EmployeeApiService";

class ListEmployeeComponent extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      employees: []
    };
  
    this.saveEmployee = this.saveEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }
  
  saveEmployee() {
    this.props.history.push('/employee/_add');
  }
  
  updateEmployee(id) {
    this.props.history.push(`/employee/${id}`);
  }
  
  deleteEmployee(id) {
    EmployeeApiService.deleteEmployee(id).then((response) => {
      this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
    });
  }
  
  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }
  
  componentDidMount() {
    EmployeeApiService.getEmployees().then((response) => {
      this.setState({
        employees: response.data
      })
    });
  }
  
  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        
        <div className="row">
          <button className="btn btn-primary" style={{marginBottom: "10px"}}
                  onClick={ this.saveEmployee }>Add Employee</button>
        </div>
        
        <div className="row">
          
          <table className="table table-striped table-bordered">
            
            <thead className="thead-dark">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            
            <tbody>
            {
              this.state.employees.map(
                employee =>
                  <tr key={ employee.id }>
                    <td>{ employee.firstName }</td>
                    <td>{ employee.lastName }</td>
                    <td>{ employee.email }</td>
                    <td>
                      <button className="btn btn-info"
                              onClick={ () => {this.updateEmployee(employee.id)} }>Update</button>
                      <button className="btn btn-danger" style={{marginLeft: "10px"}}
                              onClick={ () => {this.deleteEmployee(employee.id)} }>Delete</button>
                      <button className="btn btn-dark" style={{marginLeft: "10px"}}
                              onClick={ () => {this.viewEmployee(employee.id)} }>View</button>
                    </td>
                  </tr>
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;