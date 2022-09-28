package ai.iamneo.springapp.service;

import ai.iamneo.springapp.repository.ProductRepository;
import ai.iamneo.springapp.entity.Product;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	private ProductRepository productRepo;

    public List<Product> getProducts() {
        return this.productRepo.findAll();
    }

    public List<Product> getHomeProduct() {
        return this.productRepo.findAll();
    }
    
    // public Product getProductById(Integer productId) {
    //     return this.productRepo.findById(productId);
    // }

    public void updateProduct(Product product, Integer productId) {
        this.productRepo.save(product);
    }
    
    public void addProduct(Product product) {
        this.productRepo.save(product);
    }
    
    // public void deleteProduct(Integer productId) {
    //     Product nullProduct = null;
    //     Product product = this.productRepo.findById(productId).orElseGet(() -> nullProduct);
    //     if(product==null) return;
    //     this.productRepo.delete(product);
    // }
}
