package ai.iamneo.springapp.entity;

import java.lang.annotation.Inherited;
import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {
    
    public User() {}

    public User(String email, String username, String productNumber, String password) {
        this.email = email;
        this.username = username;
        this.productNumber = productNumber;
        this.password = password;
    }

    @Id
    @GeneratedValue
    private int id;
    
    private String email;
    private String username;
    private String productNumber;
    private String password;
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getProductNumber() {
        return productNumber;
    }
    public void setProductNumber(String productNumber) {
        this.productNumber = productNumber;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
