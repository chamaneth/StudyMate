package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    // GET all tasks
    @GetMapping
    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    // POST a new task
    @PostMapping
    public Task addTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    // PUT complete a task
    @PutMapping("/{id}/complete")
    public Task completeTask(@PathVariable String id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id " + id));
        task.setCompleted(true);
        return taskRepository.save(task);
    }

    // PUT update study time
    @PutMapping("/{id}/studyTime")
    public Task updateStudyTime(@PathVariable String id, @RequestParam long seconds) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id " + id));
        task.setStudyTimeSeconds(task.getStudyTimeSeconds() + seconds);
        return taskRepository.save(task);
    }

    // DELETE a task
    @DeleteMapping("/{id}")
    public String deleteTask(@PathVariable String id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id " + id));
        taskRepository.delete(task);
        return "Removed task: " + task.getName();
    }
}
