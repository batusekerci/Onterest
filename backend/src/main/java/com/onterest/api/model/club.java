package com.onterest.api.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "club")
public class club {

    @Id
    @Column(name = "name", unique = true, nullable = false)
    private String name;

    @OneToMany(cascade = CascadeType.ALL, targetEntity = subclub.class)
    @JoinColumn(name = "clubName", updatable = false)
    private List<subclub> subclubList;

    @OneToMany(cascade = CascadeType.ALL, targetEntity = ontry.class)
    @JoinColumn(name = "club", updatable = false)
    private List<ontry> ontryList;

    @OneToMany(cascade = CascadeType.ALL, targetEntity = memberofclub.class)
    @JoinColumn(name = "clubName", updatable = false)
    private List<memberofclub> memberofclubList;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<subclub> getSubclubList() {
        return subclubList;
    }

    public void setSubclubList(List<subclub> subclubList) {
        this.subclubList = subclubList;
    }

    public List<ontry> getOntryList() {
        return ontryList;
    }

    public void setOntryList(List<ontry> ontryList) {
        this.ontryList = ontryList;
    }

    public List<memberofclub> getMemberofclubList() {
        return memberofclubList;
    }

    public void setMemberofclubList(List<memberofclub> memberofclubList) {
        this.memberofclubList = memberofclubList;
    }
}
