package ai.iamneo.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ai.iamneo.springapp.entity.Product;

public interface ProductRepository extends JpaRepository<Product,Integer>  {
    
}