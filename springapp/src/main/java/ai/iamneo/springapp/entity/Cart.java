package ai.iamneo.springapp.entity;

import ai.iamneo.springapp.entity.User;

public class Cart {
    private String cartItemId;
    private User userId;
    private String productName;
    private int quantity;
    private String price;

    public Cart(String cartItemId, User userId, String productName, int quantity, String price) {
        this.cartItemId = cartItemId;
        this.userId = userId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public Cart() {}

    public String getCartItemId() {
        return cartItemId;
    }

    public void setCartItemId(String cartItemId) {
        this.cartItemId = cartItemId;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}