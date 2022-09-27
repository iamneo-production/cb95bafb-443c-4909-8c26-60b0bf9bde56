package ai.iamneo.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ai.iamneo.springapp.entity.User;

public interface UserRepository extends JpaRepository<User,Integer> {
    
}
