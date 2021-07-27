package com.onterest.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "comment")
public class comment {

    @Id
    @Column(name = "id", unique = true, nullable = false)
    private int id;
    @Column(name = "body", unique = true, nullable = false)
    private String body;
    @Column(name = "ontryId", unique = true, nullable = false)
    private int ontryId;
    @Column(name = "member", unique = true)
    private String member;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public int getOntryId() {
        return ontryId;
    }

    public void setOntryId(int ontryId) {
        this.ontryId = ontryId;
    }

    public String getMember() {
        return member;
    }

    public void setMember(String member) {
        this.member = member;
    }
}
