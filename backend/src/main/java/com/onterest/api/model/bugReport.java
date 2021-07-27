package com.onterest.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bugReport")
public class bugReport {

    @Id
    @Column(name = "id", unique = true, nullable = false)
    private int id;
    @Column(name = "user", unique = true, nullable = false)
    private String user;
    @Column(name = "message", unique = true, nullable = false)
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

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
