package com.hasc.jorum.section;

import com.hasc.jorum.util.Slug;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Section> getSectionById(Long sectionId) {
        return sectionRepository.findById(sectionId);
    }
}
