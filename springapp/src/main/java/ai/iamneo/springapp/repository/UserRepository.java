package ai.iamneo.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ai.iamneo.springapp.entity.User;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User,Integer> {
    @Query("select u from User u where u.email = ?1")
    User findByEmail(String email);
}
