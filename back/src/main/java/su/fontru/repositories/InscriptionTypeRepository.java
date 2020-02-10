
package su.fontru.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import su.fontru.model.Inscription;
import su.fontru.model.InscriptionType;

import java.util.List;

// @RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface InscriptionTypeRepository extends CrudRepository<InscriptionType, Long> {
    List<InscriptionType> findByLibelle(String name);
}
