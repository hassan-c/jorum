package com.hasc.jorum.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path ="api/v1/users")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public void createNewUser(@RequestBody User user) {
        userService.addUser(user);
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
