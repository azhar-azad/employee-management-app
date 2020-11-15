package com.azad.projects.empmgmtapi.controllers;

import com.azad.projects.empmgmtapi.entities.Employee;
import com.azad.projects.empmgmtapi.exceptions.ResourceNotFoundException;
import com.azad.projects.empmgmtapi.repos.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/v1/")
public class EmployeeController {

    private EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    // get all employees
    @GetMapping(path = "/employees")
    public List<Employee> getAll() {
        return employeeRepository.findAll();
    }

    // add employee
    @PostMapping(path = "/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // get employee by id
    @GetMapping(path = "/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) {
        Employee employee =  employeeRepository.findById(id).orElseThrow(() ->
           new ResourceNotFoundException("Employee not found with id: " + id));

        return ResponseEntity.ok(employee);
    }

    // update employee by id
    @PutMapping(path = "/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employeeDetails) {
        Employee employee =  employeeRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Employee not found with id: " + id));

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmail(employeeDetails.getEmail());

        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }
}
