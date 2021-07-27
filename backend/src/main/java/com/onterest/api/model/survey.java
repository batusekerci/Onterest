package com.onterest.api.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "survey")
public class survey {

    @Id
    @Column(name = "name", unique = true, nullable = false)
    private String name;
    @Column(name = "question", unique = true, nullable = false)
    private String question;
    @OneToMany(cascade = CascadeType.ALL, targetEntity = options.class)
    @JoinColumn(name = "surveyName", updatable = false)
    private List<options> optionList;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public List<options> getOptionList() {
        return optionList;
    }

    public void setOptionList(List<options> optionList) {
        this.optionList = optionList;
    }
}
