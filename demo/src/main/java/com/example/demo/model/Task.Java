package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "tasks")
public class Task {
    @Id
    private String id;
    private String name;
    private boolean completed;
    private long studyTimeSeconds;

    public Task() {}

    public Task(String name) {
        this.name = name;
        this.completed = false;
        this.studyTimeSeconds = 0;
    }
}
