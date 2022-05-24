package com.hasc.jorum.thread;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ThreadRepository extends JpaRepository<Thread, Long> {
    List<Thread> findThreadsBySectionNameEqualsIgnoreCase(String sectionName);
}
