package ai.iamneo.springapp.controller;

import ai.iamneo.springapp.service.UserService;
import ai.iamneo.springapp.entity.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import java.util.*;

@RestController
public class HomeController {
    
    @GetMapping("/")  
	public String hello() {  
		return "Hello";  
	}
    @PostMapping("/login")  
	public boolean login() {  
		return true;  
	}
    @PostMapping("/signup")  
	public boolean signup() {  
		return true;  
	}
}
