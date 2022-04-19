package com.hasc.jorum;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class JorumApplication {

    public static void main(String[] args) {
        SpringApplication.run(JorumApplication.class, args);
    }
}
