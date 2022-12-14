package ai.iamneo.springapp.entity;

import java.lang.annotation.Inherited;
import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue
    private int productId;

    private String imageUrl;
    private String productName;
    private String price;
    private String description;
    private String quantity;
    
    public Product() {}

    public Product(int productId, String imageUrl, String productName, String price, String description,
            String quantity) {
        this.productId = productId;
        this.imageUrl = imageUrl;
        this.productName = productName;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
}