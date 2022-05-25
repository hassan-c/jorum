package com.hasc.jorum.thread;

import com.hasc.jorum.section.SectionService;
import com.hasc.jorum.section.exception.SectionNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ThreadService {
    private final ThreadRepository threadRepository;

    private final SectionService sectionService;

    public Thread addThread(ThreadCreationRequest request) {
        Thread thread = new Thread();
        return sectionService.getSectionById(request.sectionId()).map(section -> {
            thread.setTitle(request.title());
            thread.setSection(section);
            return threadRepository.save(thread);
        }).orElseThrow(() -> new SectionNotFoundException("Section with ID=" + request.sectionId() + " does not exist."));
    }
}
