package su.fontru.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import su.fontru.model.Utilisateur;
import java.util.List;

// @RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UtilisateurRepository extends CrudRepository<Utilisateur, Long> {
    List<Utilisateur> findByName(String name);
}
