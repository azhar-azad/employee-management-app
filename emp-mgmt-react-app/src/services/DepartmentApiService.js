import axios from 'axios';

const DEPARTMENT_API_BASE_URL = 'http://localhost:8080/api/v1/departments';

class DepartmentApiService {
  
  getDepartments() {
    return axios.get(DEPARTMENT_API_BASE_URL);
  }
}

export default new DepartmentApiService();