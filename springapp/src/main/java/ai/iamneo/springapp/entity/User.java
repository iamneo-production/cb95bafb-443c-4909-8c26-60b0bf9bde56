package ai.iamneo.springapp.entity;

import java.lang.annotation.Inherited;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;
    
    String email;
    String username;
    long productNumber;
    String password;
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
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
    public long getProductNumber() {
        return productNumber;
    }
    public void setProductNumber(long productNumber) {
        this.productNumber = productNumber;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}
