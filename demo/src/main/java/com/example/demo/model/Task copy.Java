package com.example.demo.model;

public class Task {
    @Id
    private String id;
    private String name;
    private boolean completed = false;
    private long studyTimeSeconds = 0; // total study time

    public Task() {}

    public Task(String name) {
        this.name = name;
    }

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public boolean isCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }

    public long getStudyTimeSeconds() { return studyTimeSeconds; }
    public void setStudyTimeSeconds(long studyTimeSeconds) { this.studyTimeSeconds = studyTimeSeconds; }
}



package com.example.demo.model;

public class Task {
    private String name;
    private boolean completed;
    private long studyTimeSeconds;

    public Task() {}

    public Task(String name) {
        this.name = name;
        this.completed = false;
        this.studyTimeSeconds = 0;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public boolean isCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }
    public long getStudyTimeSeconds() { return studyTimeSeconds; }
    public void setStudyTimeSeconds(long studyTimeSeconds) { this.studyTimeSeconds = studyTimeSeconds; }
}

