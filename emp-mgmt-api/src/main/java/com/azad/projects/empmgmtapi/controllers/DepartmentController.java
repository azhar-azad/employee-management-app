package com.azad.projects.empmgmtapi.controllers;

import com.azad.projects.empmgmtapi.entities.Department;
import com.azad.projects.empmgmtapi.exceptions.ResourceNotFoundException;
import com.azad.projects.empmgmtapi.repos.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DeadlockLoserDataAccessException;
import org.springframework.http.ResponseEntity;
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

    // get department by id
    @GetMapping(path = "/departments/{id}")
    public ResponseEntity<Department> getDepartmentById(@PathVariable long id) {
        Department department = departmentRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Department not found with id: " + id));

        return ResponseEntity.ok(department);
    }

    // update department by id
    @PutMapping(path = "/departments/{id}")
    public ResponseEntity<Department> updateDepartment(@PathVariable long id, @RequestBody Department departmentDetails) {
        Department department = departmentRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Department not found with id: " + id));

        department.setName(departmentDetails.getName());
        departmentRepository.save(department);\\

        return ResponseEntity.ok(department);
    }
}
