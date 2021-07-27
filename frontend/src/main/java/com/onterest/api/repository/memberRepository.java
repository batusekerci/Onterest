package com.onterest.api.repository;

import com.onterest.api.model.member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface memberRepository extends JpaRepository<member, String> {

    @Query("SELECT m FROM member m WHERE m.username =?1 AND m.password = ?2 AND m.type=1")
    member isAdminAuthenticated(String username, String password);

    @Query("SELECT m FROM member m WHERE m.username =?1 AND m.password = ?2 AND m.type=2")
    member isSubAdminAuthenticated(String username, String password);

    @Query("SELECT m FROM member m WHERE m.username =?1 AND m.password = ?2 AND m.type=3")
    member isMemberAuthenticated(String username, String password);

    @Query("SELECT m FROM member m WHERE m.type=1")
    List<member> getAdminList();

    @Query("SELECT m FROM member m WHERE m.type=2")
    List<member> getSubAdminList();

    @Query("SELECT m FROM member m WHERE m.type=3")
    List<member> getMemberList();
}
