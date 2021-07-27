package com.onterest.api.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "subclub")
public class subclub {

    @Id
    @Column(name = "name", unique = true, nullable = false)
    private String name;
    @Column(name = "clubName", unique = true, nullable = false)
    private String clubName;
    @OneToMany(cascade = CascadeType.ALL, targetEntity = ontry.class)
    @JoinColumn(name = "subclub", updatable = false)
    private List<ontry> ontryList;

    @OneToMany(cascade = CascadeType.ALL, targetEntity = memberofsubclub.class)
    @JoinColumn(name = "subClubName", updatable = false)
    private List<memberofsubclub> memberOfSubClubList;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getClubName() {
        return clubName;
    }

    public void setClubName(String clubName) {
        this.clubName = clubName;
    }

    public List<ontry> getOntryList() {
        return ontryList;
    }

    public void setOntryList(List<ontry> ontryList) {
        this.ontryList = ontryList;
    }

    public List<memberofsubclub> getMemberOfSubClubList() {
        return memberOfSubClubList;
    }

    public void setMemberOfSubClubList(List<memberofsubclub> memberOfSubClubList) {
        this.memberOfSubClubList = memberOfSubClubList;
    }
}
