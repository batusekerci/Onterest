package com.onterest.api.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "ontry")
public class ontry {

    private int id;
    private String title;
    private String body;
    private String member;
    private Date date;
    private String club;
    private String subclub;
    private List<comment> commentList;

    @Id
    @Column(name = "id", unique = true, nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "title", unique = true)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column(name = "body", unique = true, nullable = false)
    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @Column(name = "date", unique = true, nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:ss")
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Column(name = "club", unique = true)
    public String getClub() {
        return club;
    }

    public void setClub(String club) {
        this.club = club;
    }

    @Column(name = "subclub", unique = true)
    public String getSubclub() {
        return subclub;
    }

    public void setSubclub(String subclub) {
        this.subclub = subclub;
    }

    @Column(name = "member", unique = true)
    public String getMember() {
        return member;
    }

    public void setMember(String member) {
        this.member = member;
    }

    @OneToMany(cascade = CascadeType.ALL, targetEntity = comment.class)
    @JoinColumn(name = "ontryId", updatable = false)
    public List<comment> getCommentList() {
        return commentList;
    }

    public void setCommentList(List<comment> commentList) {
        this.commentList = commentList;
    }
}
