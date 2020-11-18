package com.azad.projects.empmgmtapi.controllers;

import com.azad.projects.empmgmtapi.entities.Department;
import com.azad.projects.empmgmtapi.repos.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/")
public class DepartmentController {

    private DepartmentRepository departmentRepository;

    @Autowired
    public DepartmentController(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @GetMapping(path = "/departments/test")
    public String testDepartments() {
        return "Department endpoints are up";
    }

    // create department
    @PostMapping(path = "/departments")
    public Department createDepartment(@RequestBody Department department) {
        return departmentRepository.save(department);
    }

    // get all department
    @GetMapping(path = "/departments")
    public List<Department> getAll() {
        return departmentRepository.findAll();
    }
}
