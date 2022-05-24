package com.hasc.jorum.section;

import com.hasc.jorum.util.Slug;
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

    public Section getSectionByNameSlug(String sectionNameSlug) {
        final var sectionName = Slug.deSlugify(sectionNameSlug);
        return sectionRepository.findByNameEqualsIgnoreCase(sectionName);
    }
}
