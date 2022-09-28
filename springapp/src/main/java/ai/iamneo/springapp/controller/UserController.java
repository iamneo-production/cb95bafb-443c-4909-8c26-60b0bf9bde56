package ai.iamneo.springapp.controller;

import ai.iamneo.springapp.service.UserService;
import ai.iamneo.springapp.repository.UserRepository;
import ai.iamneo.springapp.entity.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import java.util.*;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private UserRepository userRepo;

	// POST - create user
	@PostMapping("/users")
    public User newUser(@RequestBody User user) {
		return this.userRepo.save(user);
	}

	// PUT - update user
	@PutMapping("/users/{userId}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable("userId") Integer userId) {
		User updateUser = this.userService.updateUser(user, userId);
		return ResponseEntity.ok(updateUser);
	}

	// DELETE - delete user
	@DeleteMapping("/users/{userId}")
    public ResponseEntity<User> deleteUser(@RequestBody User user, @PathVariable("userId") Integer userId) {
		this.userService.deleteUser(userId);
		return new ResponseEntity(Map.of("message","User Deleted Successfully"), HttpStatus.OK);
	}

	// GET - get users
	@GetMapping("/users")
	public ResponseEntity<List<User>> getAllUsers() {
		return ResponseEntity.ok(this.userService.getAllUsers());
	}

	// GET - get user
	@GetMapping("/users/{userId}")
	public ResponseEntity<User> getSingleUser(@PathVariable Integer userId) {
		return ResponseEntity.ok(this.userService.getUserById(userId));
	}
}
