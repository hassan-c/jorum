package com.hasc.jorum.user.exception;

public class UsernameAlreadyExistsException extends RuntimeException {
    public UsernameAlreadyExistsException(String error) {
        super(error);
    }
}
