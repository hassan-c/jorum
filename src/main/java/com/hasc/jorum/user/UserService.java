package com.hasc.jorum.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void addUser(User user) {
        Optional<User> userOptional = userRepository.findUserByEmail(user.getEmail());
        if (userOptional.isPresent()) {
            throw new IllegalStateException("User already exists.");
        }
        userRepository.save(user);
    }

    @Transactional
    public void updateUser(Long id, User newUser) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("User does not exist."));

        user.setUsername(newUser.getUsername());
        user.setPassword(newUser.getPassword());
        user.setEmail(newUser.getEmail());
        user.setCreatedAt(newUser.getCreatedAt());
    }

    public void deleteUser(Long id) {
        boolean userExists = userRepository.existsById(id);
        if (!userExists) {
            throw new IllegalStateException("User does not exist.");
        }
        userRepository.deleteById(id);
    }
}
