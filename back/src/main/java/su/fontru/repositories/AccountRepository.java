package su.fontru.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.annotation.Secured;
import su.fontru.model.Account;

import java.util.Optional;

public interface AccountRepository extends CrudRepository<Account, String> {
    Optional<Account> findByUsername(String username);
}
