import React, { Component } from 'react';
import EmployeeApiService from "../../services/EmployeeApiService";
import DepartmentApiService from "../../services/DepartmentApiService";

class ListDepartmentComponents extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      departments: []
    };
    
    this.saveDepartment = this.saveDepartment.bind(this);
  }
  
  saveDepartment() {
    this.props.history.push('/department/_add');
  }
  
  componentDidMount() {
    DepartmentApiService.getDepartments().then((response) => {
      this.setState({
        departments: response.data
      })
    });
    console.log('departments: ' + this.state.departments);
  }
  
  render() {
    return (
      <div>
        <h2 className="text-center">Department List</h2>
  
        <div className="row">
          <button className="btn btn-primary" style={{marginBottom: "10px"}}
                  onClick={ this.saveDepartment }>Add Department</button>
        </div>
  
        <div className="row">
    
          <table className="table table-striped table-bordered">
      
            <thead className="thead-dark">
            <tr>
              <th>Name</th>
            </tr>
            </thead>
      
            <tbody>
            {
              this.state.departments.map(
                department =>
                  <tr key={ department.id }>
                    <td>{ department.name }</td>
                    <td>
                      <button className="btn btn-info"
                              onClick={ () => {this.updateDepartment(department.id)} }>Update</button>
                      <button className="btn btn-danger" style={{marginLeft: "10px"}}
                              onClick={ () => {this.deleteDepartment(department.id)} }>Delete</button>
                      <button className="btn btn-dark" style={{marginLeft: "10px"}}
                              onClick={ () => {this.viewDepartment(department.id)} }>View</button>
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

export default ListDepartmentComponents;