package com.onterest.api.repository;

import com.onterest.api.model.bugReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface bugReportRepository extends JpaRepository<bugReport, Integer> {
}
