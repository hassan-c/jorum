package com.hasc.jorum.user;

import com.hasc.jorum.user.exception.UsernameAlreadyExistsException;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User addUser(User user) {
        Optional<User> userOptional = userRepository.findByUsernameIgnoreCase(user.getUsername());

        if (userOptional.isPresent()) {
            throw new UsernameAlreadyExistsException("User already exists.");
        }

        return userRepository.save(user);
    }

    @Transactional
    public void updateUser(Long id, User newUser) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User does not exist."));

        user.setUsername(newUser.getUsername());
        user.setPassword(newUser.getPassword());
        user.setCreatedAt(newUser.getCreatedAt());
    }

    public void deleteUser(Long id) {
        boolean userExists = userRepository.existsById(id);
        if (!userExists) {
            throw new UsernameNotFoundException("User does not exist.");
        }
        userRepository.deleteById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsernameIgnoreCase(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
    }
}
