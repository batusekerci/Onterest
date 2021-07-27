package com.onterest.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "memberofsubclub")
public class memberofsubclub {

    @Id
    @Column(name = "id", unique = true, nullable = false)
    private int id;
    @Column(name = "author", unique = true, nullable = false)
    private String author;
    @Column(name = "subClubName", unique = true, nullable = false)
    private String subClubName;
    @Column(name = "star", unique = true)
    private int star;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getSubClubName() {
        return subClubName;
    }

    public void setSubClubName(String subClubName) {
        this.subClubName = subClubName;
    }

    public int getStar() {
        return star;
    }

    public void setStar(int star) {
        this.star = star;
    }
}
