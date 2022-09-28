package ai.iamneo.springapp.controller;

import ai.iamneo.springapp.repository.UserRepository;
import ai.iamneo.springapp.entity.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class SignupController {
    
	@Autowired
	private UserRepository userRepo;

	@PostMapping("/signup")  
	public boolean signup(@RequestBody User user) {  
		User currentUser = this.userRepo.save(user);
		return (currentUser!=null); 
	}
    
}
