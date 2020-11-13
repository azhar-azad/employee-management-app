package com.azad.projects.empmgmtapi.controllers;

import com.azad.projects.empmgmtapi.entities.Employee;
import com.azad.projects.empmgmtapi.repos.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}
