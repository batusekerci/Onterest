package com.onterest.api.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "member")
public class member {

    private String username;
    private String password;
    private int type;
    private String email;
    private String birthDate;
    private List<ontry> ontryList;
    private List<messages> sendMessageList;
    private List<messages> receiveMessageList;
    private List<memberofclub> memberofclubList;
    private List<memberofsubclub> memberofsubclubList;

    @Id
    @Column(name = "username", unique = true, nullable = false)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Column(name = "password", unique = true, nullable = false)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column(name = "email", unique = true)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "birthDate", unique = true)
    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    @OneToMany(cascade = CascadeType.ALL, targetEntity = ontry.class)
    @JoinColumn(name = "member", updatable = false)
    public List<ontry> getOntryList() {
        return ontryList;
    }

    public void setOntryList(List<ontry> ontryList) {
        this.ontryList = ontryList;
    }

    @Column(name = "type", unique = true, nullable = false)
    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    @OneToMany(cascade = CascadeType.ALL, targetEntity = messages.class)
    @JoinColumn(name = "sender", updatable = false)
    public List<messages> getSendMessageList() {
        return sendMessageList;
    }

    public void setSendMessageList(List<messages> sendMessageList) {
        this.sendMessageList = sendMessageList;
    }

    @OneToMany(cascade = CascadeType.ALL, targetEntity = messages.class)
    @JoinColumn(name = "receiver", updatable = false)
    public List<messages> getReceiveMessageList() {
        return receiveMessageList;
    }

    public void setReceiveMessageList(List<messages> receiveMessageList) {
        this.receiveMessageList = receiveMessageList;
    }

    @OneToMany(cascade = CascadeType.ALL, targetEntity = memberofclub.class)
    @JoinColumn(name = "author", updatable = false)
    public List<memberofclub> getMemberofclubList() {
        return memberofclubList;
    }

    public void setMemberofclubList(List<memberofclub> memberofclubList) {
        this.memberofclubList = memberofclubList;
    }

    @OneToMany(cascade = CascadeType.ALL, targetEntity = memberofsubclub.class)
    @JoinColumn(name = "author", updatable = false)
    public List<memberofsubclub> getMemberofsubclubList() {
        return memberofsubclubList;
    }

    public void setMemberofsubclubList(List<memberofsubclub> memberofsubclubList) {
        this.memberofsubclubList = memberofsubclubList;
    }
}
