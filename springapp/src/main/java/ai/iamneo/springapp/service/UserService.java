package ai.iamneo.springapp.service;

import java.util.*;
import ai.iamneo.springapp.entity.User;

public interface UserService {
    User createUser(User user);
    User updateUser(User user, Integer userId);
    User getUserById(Integer userId);
    List<User> getAllUsers();
    void deleteUser(Integer userId);
    boolean getUserByEmail(User user);
}