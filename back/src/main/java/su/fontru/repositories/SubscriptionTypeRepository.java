
package su.fontru.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import su.fontru.model.SubscriptionType;

import java.util.Optional;

/* REST available */
@RepositoryRestResource
public interface SubscriptionTypeRepository extends CrudRepository<SubscriptionType, Long> {


    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public <S extends SubscriptionType> S save(S entity);


    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public <S extends SubscriptionType> Iterable<S> saveAll(Iterable<S> entities);


    @Override
    public Optional<SubscriptionType> findById(Long aLong);


    @Override
    public boolean existsById(Long aLong);


    @Override
    public Iterable<SubscriptionType> findAll();


    @Override
    public Iterable<SubscriptionType> findAllById(Iterable<Long> longs);


    @Override
    public long count();

    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public void deleteById(Long aLong);


    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public void delete(SubscriptionType entity);


    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public void deleteAll(Iterable<? extends SubscriptionType> entities);


    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public void deleteAll();
}
