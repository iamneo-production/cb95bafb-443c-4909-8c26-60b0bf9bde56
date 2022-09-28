package ai.iamneo.springapp.controller;

import ai.iamneo.springapp.service.ProductService;
import ai.iamneo.springapp.repository.ProductRepository;
import ai.iamneo.springapp.entity.Product;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import java.util.*;

@RestController
public class ProductController {
    
	@Autowired
	private ProductService productService;

	@Autowired
	private ProductRepository productRepo;

    // POST - create user
	@PostMapping("/products")
    public Product newProduct(@RequestBody Product product) {
		return this.productRepo.save(product);
	}

    // GET - get users
	@GetMapping("/products")
	public ResponseEntity<List<Product>> getAllProducts() {
		return ResponseEntity.ok(this.productService.getProducts());
	}
}
