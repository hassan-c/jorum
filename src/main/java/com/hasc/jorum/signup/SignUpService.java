package com.hasc.jorum.signup;

import com.hasc.jorum.user.User;
import com.hasc.jorum.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class SignUpService {

    private final UserService userService;

    private final BCryptPasswordEncoder passwordEncoder;

    public User signUp(SignUpRequest signUpRequest) {
        User newUser = new User();
        newUser.setUsername(signUpRequest.username());
        newUser.setPassword(passwordEncoder.encode(signUpRequest.password()));
        newUser.setCreatedAt(LocalDateTime.now());
        return userService.addUser(newUser);
    }
}
