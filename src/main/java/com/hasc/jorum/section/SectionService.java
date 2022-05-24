package com.hasc.jorum.section;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SectionService {
    private final SectionRepository sectionRepository;

    public List<Section> getSections() {
        return sectionRepository.findAll();
    }

    public Section getSectionByName(String name) {
        return sectionRepository.findByName(name);
    }
}
