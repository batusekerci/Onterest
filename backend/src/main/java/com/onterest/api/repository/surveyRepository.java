package com.onterest.api.repository;

import com.onterest.api.model.survey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface surveyRepository extends JpaRepository<survey, String> {
}
