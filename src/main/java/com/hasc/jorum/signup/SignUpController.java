package com.hasc.jorum.signup;

import com.hasc.jorum.user.User;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/signup")
@AllArgsConstructor
public class SignUpController {

    private SignUpService signUpService;

    @PostMapping
    public User signUp(@RequestBody SignUpRequest signUpRequest) {
        return signUpService.signUp(signUpRequest);
    }
}
