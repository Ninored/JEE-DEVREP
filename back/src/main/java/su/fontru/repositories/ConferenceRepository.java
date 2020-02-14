package su.fontru.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import su.fontru.model.Conference;

import java.util.List;

@PreAuthorize("hasRole('ADMIN')")
@RepositoryRestResource
public interface ConferenceRepository extends CrudRepository<Conference, Long> {
    List<Conference> findByName(String name);
}
