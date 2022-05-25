package com.hasc.jorum.thread;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/thread")
@AllArgsConstructor
public class ThreadController {
    private final ThreadService threadService;

    @PostMapping
    public Thread createNewThread(@RequestBody ThreadCreationRequest threadCreationRequest) {
        return threadService.addThread(threadCreationRequest);
    }
}
