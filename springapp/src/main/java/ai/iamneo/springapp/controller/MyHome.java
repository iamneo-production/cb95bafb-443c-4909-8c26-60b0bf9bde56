package ai.iamneo.springapp.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class MyHome {
    @GetMapping("/")  
	public String hello() {  
		return "Hello javaTpoint";  
	}

    @GetMapping("/login")  
	public boolean login() {  
		return true;  
	}

    @GetMapping("/signup")  
	public boolean signup() {  
		return true;  
	}

    
}
