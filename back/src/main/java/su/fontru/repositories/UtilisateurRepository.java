package su.fontru.repositories;


import su.fontru.model.Utilisateur;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UtilisateurRepository extends CrudRepository<Utilisateur, Long> {

}
