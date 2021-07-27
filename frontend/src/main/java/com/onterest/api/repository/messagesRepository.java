package com.onterest.api.repository;

import com.onterest.api.model.messages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface messagesRepository extends JpaRepository<messages, Integer> {

    @Query("SELECT m FROM messages m WHERE m.sender = ?1")
    List<messages> getSenderMessages(String sender);

    @Query("SELECT m FROM messages m WHERE m.receiver = ?1")
    List<messages> getReceiverMessages(String receiver);
}
