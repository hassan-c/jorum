package com.hasc.jorum.section.exception;

public class SectionNotFoundException extends RuntimeException {
    public SectionNotFoundException(String error) {
        super(error);
    }
}
