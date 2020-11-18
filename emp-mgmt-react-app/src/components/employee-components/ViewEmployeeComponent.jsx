import React, { Component } from 'react';
import EmployeeApiService from "../../services/EmployeeApiService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: this.props.match.params.id,
      employee: {}
    }
  }
  
  componentDidMount() {
    EmployeeApiService.getEmployeeById(this.state.id).then(response => {
      this.setState({ employee: response.data });
    });
  }
  
  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Employee Details</h3>
          <div className="card-body">
            <table className="table table-sm table-dark">
              <tr style={{textAlign: "center"}}>
                <td>First Name: </td>
                <td>{ this.state.employee.firstName }</td>
              </tr>
              <tr style={{textAlign: "center"}}>
                <td>Last Name: </td>
                <td>{ this.state.employee.lastName }</td>
              </tr>
              <tr style={{textAlign: "center"}}>
                <td>Email: </td>
                <td>{ this.state.employee.email }</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;