package ai.iamneo.springapp.controller;

import ai.iamneo.springapp.repository.UserRepository;
import ai.iamneo.springapp.entity.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;

    @GetMapping("/")  
	public String hello() {  
		return "Hello javaTpoint";  
	}

    @PostMapping("/login")  
	public boolean login() {  
		return true;  
	}

    @PostMapping("/signup")  
	public boolean signup() {  
		return true;  
	}

	@GetMapping("/users")
    List<User> getAllUsers() {
		return userRepository.findAll();
	}
}
