package com.hasc.jorum.section;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SectionRepository extends JpaRepository<Section, Long> {
    Section findByNameEqualsIgnoreCase(String name);
}