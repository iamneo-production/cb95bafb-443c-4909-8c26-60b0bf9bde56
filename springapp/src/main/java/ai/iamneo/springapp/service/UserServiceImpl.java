package ai.iamneo.springapp.service;

import ai.iamneo.springapp.repository.UserRepository;
import ai.iamneo.springapp.exception.ResourceNotFoundException;
import ai.iamneo.springapp.entity.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@Service
public class UserServiceImpl implements UserService {
    
	@Autowired
	private UserRepository userRepository;

    public User createUser(User user) {
        return this.userRepository.save(user);
    }
    public User updateUser(User u, Integer userId) {
        this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User"," id ",userId));
        
        return this.userRepository.save(u);
    }
    public User getUserById(Integer userId) {
        return this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User"," Id ", userId));
    }
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }
    public void deleteUser(Integer userId) {
        User user = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User"," Id ", userId));
        this.userRepository.delete(user);
    }
    public boolean getUserByEmail(User user) {
        User currentUser = this.userRepository.findByEmail(user.getEmail());
        return (currentUser != null);
    }
}