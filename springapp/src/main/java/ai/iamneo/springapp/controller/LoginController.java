package ai.iamneo.springapp.controller;

import ai.iamneo.springapp.service.UserService;
import ai.iamneo.springapp.entity.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class LoginController {
	@Autowired
	private UserService userService;

    @PostMapping("/login")  
	public boolean login(@RequestBody User user) {  
		return this.userService.getUserByEmail(user);  
	}
}
