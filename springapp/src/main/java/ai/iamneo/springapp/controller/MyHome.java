package ai.iamneo.springapp.controller;

import org.springframework.web.bind.annotation.RestController;  
import org.springframework.web.bind.annotation.RequestMapping; 

@RestController
public class MyHome {
    @RequestMapping("/")  
	public String hello() {  
		return "Hello javaTpoint";  
	}  

    
}
