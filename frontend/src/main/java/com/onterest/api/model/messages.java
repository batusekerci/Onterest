package com.onterest.api.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "messages")
public class messages {

    @Id
    @Column(name = "id", unique = true, nullable = false)
    private int id;
    @Column(name = "sender", unique = true, nullable = false)
    private String sender;
    @Column(name = "receiver", unique = true, nullable = false)
    private String receiver;
    @Column(name = "content", unique = true, nullable = false)
    private String content;
    @Column(name = "sendDate", unique = true, nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:ss")
    private Date sendDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getSendDate() {
        return sendDate;
    }

    public void setSendDate(Date sendDate) {
        this.sendDate = sendDate;
    }
}
