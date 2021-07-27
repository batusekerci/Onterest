package com.onterest.api.repository;

import com.onterest.api.model.ontry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ontryRepository extends JpaRepository<ontry, Integer> {

    @Query("SELECT o FROM ontry o WHERE o.member=?1")
    List<ontry> getOntryByUsername(String username);
}
