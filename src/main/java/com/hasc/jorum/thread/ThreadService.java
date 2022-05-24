package com.hasc.jorum.thread;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ThreadService {
    private final ThreadRepository threadRepository;

    public List<Thread> getThreadsForSection(String section) {
        return threadRepository.findThreadsBySectionNameEqualsIgnoreCase(section);
    }
}
