package com.hasc.jorum.section;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/section")
@AllArgsConstructor
public class SectionController {
    private SectionService sectionService;

    @GetMapping
    public List<Section> getSections() {
        return sectionService.getSections();
    }

    @GetMapping("/{section}")
    public Section getSection(@PathVariable String section) {
        return sectionService.getSectionByNameSlug(section);
    }
}
