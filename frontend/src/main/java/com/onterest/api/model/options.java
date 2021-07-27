package com.onterest.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "options")
public class options {

    @Id
    @Column(name = "selection", unique = true, nullable = false)
    private String selection;
    @Column(name = "club", unique = true, nullable = false)
    private String club;
    @Column(name = "surveyName", unique = true, nullable = false)
    private String surveyName;

    public String getSelection() {
        return selection;
    }

    public void setSelection(String selection) {
        this.selection = selection;
    }

    public String getClub() {
        return club;
    }

    public void setClub(String club) {
        this.club = club;
    }

    public String getSurveyName() {
        return surveyName;
    }

    public void setSurveyName(String surveyName) {
        this.surveyName = surveyName;
    }
}
