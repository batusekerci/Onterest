package com.onterest.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "memberofclub")
public class memberofclub {

    @Id
    @Column(name = "id", unique = true, nullable = false)
    private int id;
    @Column(name = "author", unique = true, nullable = false)
    private String author;
    @Column(name = "clubName", unique = true, nullable = false)
    private String clubName;
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

    public String getClubName() {
        return clubName;
    }

    public void setClubName(String clubName) {
        this.clubName = clubName;
    }

    public int getStar() {
        return star;
    }

    public void setStar(int star) {
        this.star = star;
    }
}
