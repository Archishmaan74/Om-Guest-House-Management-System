package com.omguesthouse.backend.service;

import com.omguesthouse.backend.entity.User;
import com.omguesthouse.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void deleteOwnAccount(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("User not found")
                );

        userRepository.delete(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}