package com.hasc.jorum.thread;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("api/v1/thread")
@AllArgsConstructor
public class ThreadController {
    @GetMapping
    public List<Thread> getThreadsForSection() {
        return Collections.emptyList();
    }
}
