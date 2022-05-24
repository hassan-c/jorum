package com.hasc.jorum.thread;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/thread")
@AllArgsConstructor
public class ThreadController {
    private final ThreadService threadService;

    @GetMapping("/{section}")
    public List<Thread> getThreadsForSection(@PathVariable String section) {
        return threadService.getThreadsForSection(section);
    }
}
