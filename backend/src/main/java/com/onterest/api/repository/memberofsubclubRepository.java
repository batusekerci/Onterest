package com.onterest.api.repository;

import com.onterest.api.model.memberofsubclub;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface memberofsubclubRepository extends JpaRepository<memberofsubclub, Integer> {

    @Query("SELECT m FROM memberofsubclub m WHERE m.author=?1")
    List<memberofsubclub> getMemberOfSubClubByUser(String member);

    @Query("SELECT m FROM memberofsubclub m WHERE m.subClubName=?1")
    List<memberofsubclub> getMemberOfSubClubByClub(String subClubName);
}
