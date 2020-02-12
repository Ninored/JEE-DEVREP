package su.fontru.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import su.fontru.model.Conference;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface ConferenceRepository extends CrudRepository<Conference, Long> {

    public List<Conference> findByName(String name) ;

    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public <S extends Conference> S save(S entity) ;

    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public <S extends Conference> Iterable<S> saveAll(Iterable<S> entities) ;

    @Override
    public Optional<Conference> findById(Long aLong) ;

    @Override
    public boolean existsById(Long aLong) ;

    @Override
    public Iterable<Conference> findAll() ;

    @Override
    public Iterable<Conference> findAllById(Iterable<Long> longs) ;

    @Override
    public long count() ;

    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public void deleteById(Long aLong) ;

    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public void delete(Conference entity) ;

    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public void deleteAll(Iterable<? extends Conference> entities) ;

    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public void deleteAll() ;

}
