package com.azad.projects.empmgmtapi.controllers;

import com.azad.projects.empmgmtapi.entities.Employee;
import com.azad.projects.empmgmtapi.repos.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
