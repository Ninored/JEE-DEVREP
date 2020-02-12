package su.fontru.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.annotation.Secured;
import su.fontru.model.Account;

public interface AccountRepository extends CrudRepository<Account, String> {
    Account findByUsername(String username);
}
