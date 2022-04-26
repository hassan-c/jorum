package com.hasc.jorum.signup;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SignUpService {
    public String signUp(SignUpRequest signUpRequest) {
        return "works";
    }
}
