package com.onterest.api.repository;

import com.onterest.api.model.memberofclub;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface memberofclubRepository extends JpaRepository<memberofclub, Integer> {

    @Query("SELECT m FROM memberofclub m WHERE m.author=?1")
    List<memberofclub> getMemberOfClubByUser(String member);

    @Query("SELECT m FROM memberofclub m WHERE m.clubName=?1")
    List<memberofclub> getMemberOfClubByClub(String clubName);

}
