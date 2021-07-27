package com.onterest.api.repository;

import com.onterest.api.model.subclub;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface subclubRepository extends JpaRepository<subclub, String> {

    @Modifying
    @Transactional
    @Query("delete from subclub s where s.clubName = ?1")
    void deleteSubClub(String clubName);

}
