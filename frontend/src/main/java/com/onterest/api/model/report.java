package com.onterest.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "report")
public class report {

    @Id
    @Column(name = "id", unique = true, nullable = false)
    private int id;
    @Column(name = "user", unique = true)
    private String user;
    @Column(name = "club", unique = true)
    private String club;
    @Column(name = "subclub", unique = true)
    private String subclub;
    @Column(name = "ontryId", unique = true)
    private int ontryId;
    @Column(name = "message", unique = true)
    private String message;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getClub() {
        return club;
    }

    public void setClub(String club) {
        this.club = club;
    }

    public String getSubclub() {
        return subclub;
    }

    public void setSubclub(String subclub) {
        this.subclub = subclub;
    }

    public int getOntryId() {
        return ontryId;
    }

    public void setOntryId(int ontryId) {
        this.ontryId = ontryId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
