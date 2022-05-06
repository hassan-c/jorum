package com.hasc.jorum.user;

import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path ="api/v1/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping(path = "/current")
    public String getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getName();
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getUsers();
    }

    @PostMapping
    public User createNewUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @PutMapping(path = "update/{userId}")
    public void updateUser(@PathVariable("userId") Long id, @RequestBody User newUser) {
        userService.updateUser(id, newUser);
    }

    @DeleteMapping(path = "{userId}")
    public void deleteUser(@PathVariable("userId") Long id) {
        userService.deleteUser(id);
    }
}
