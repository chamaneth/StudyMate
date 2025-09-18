package com.example.demo.controller;
/* 
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Task;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private List<Task> tasks = Collections.synchronizedList(
        new ArrayList<>()
    );

    @GetMapping
    public List<Task> getTasks() {
        return tasks;
    }

    @PostMapping
    public Task addTask(@RequestBody Task task) {
        tasks.add(task);
        return task;
    }

    @PutMapping("/{index}/complete")
    public Task completeTask(@PathVariable int index) {
        Task task = tasks.get(index);
        task.setCompleted(true);
        return task;
    }

    @PutMapping("/{index}/studyTime")
    public Task updateStudyTime(@PathVariable int index, @RequestParam long seconds) {
        Task task = tasks.get(index);
        task.setStudyTimeSeconds(task.getStudyTimeSeconds() + seconds);
        return task;
    }

    @DeleteMapping("/{index}")
    public String deleteTask(@PathVariable int index) {
        Task removed = tasks.remove(index);
        return "Removed task: " + removed.getName();
    }
}
*/