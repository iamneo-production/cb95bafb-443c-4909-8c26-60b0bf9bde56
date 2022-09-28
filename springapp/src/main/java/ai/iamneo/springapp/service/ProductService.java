package ai.iamneo.springapp.service;

import java.util.*;
import ai.iamneo.springapp.entity.Product;

public interface ProductService {
    List<Product> getProducts();
    List<Product> getHomeProduct();
    // Product getProductById(Integer productId);
    void updateProduct(Product product, Integer productId);
    void addProduct(Product product);
    // void deleteProduct(Integer productId);
}