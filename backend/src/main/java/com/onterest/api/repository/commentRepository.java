package com.onterest.api.repository;

import com.onterest.api.model.comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface commentRepository extends JpaRepository<comment, Integer> {

    @Query("SELECT c FROM comment c WHERE c.member = ?1")
    List<comment> getCommentByMember(String member);

    @Query("SELECT c FROM comment c WHERE c.ontryId = ?1")
    List<comment> getCommentByOntry(Integer member);
}
