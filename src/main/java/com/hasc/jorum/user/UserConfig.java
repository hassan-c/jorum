package com.hasc.jorum.user;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner run(UserRepository userRepository) {
        return args -> {
            User admin = new User("admin", "admin", "admin@admin.io", LocalDate.of(2022, 1, 1));
            User hasc = new User("hasc", "hasc", "hasc@chughtai.io", LocalDate.of(2022, 1, 1));

            userRepository.saveAll(List.of(admin, hasc));
        };
    }
}
