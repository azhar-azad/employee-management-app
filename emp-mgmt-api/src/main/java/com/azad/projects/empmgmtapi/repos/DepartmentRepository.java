package com.azad.projects.empmgmtapi.repos;

import com.azad.projects.empmgmtapi.entities.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
