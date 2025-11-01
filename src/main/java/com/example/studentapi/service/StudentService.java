package com.example.studentapi.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.studentapi.model.Student;
import com.example.studentapi.repository.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository repo;

    public StudentService(StudentRepository repo) {
        this.repo = repo;
    }

    public List<Student> getAll() {
        return repo.findAll();
    }

    public Student save(Student s) {
        return repo.save(s);
    }

    public Student update(Long id, Student s) {
        Student old = repo.findById(id).orElse(null);
        if (old != null) {
            old.setName(s.getName());
            old.setCourse(s.getCourse());
            old.setMarks(s.getMarks());
            return repo.save(old);
        }
        return null;
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
