package ai.iamneo.springapp.controller;

import ai.iamneo.springapp.service.UserService;
import ai.iamneo.springapp.entity.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import java.util.*;

@RestController
public class HomeController {
    
	@Autowired
	private UserService userService;

    @GetMapping("/")  
	public String hello() {  
		return "Hello";  
	}
}
