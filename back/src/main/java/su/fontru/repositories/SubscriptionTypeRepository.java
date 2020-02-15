
package su.fontru.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import su.fontru.model.SubscriptionType;

import java.util.Optional;

/* REST available */
public interface SubscriptionTypeRepository extends CrudRepository<SubscriptionType, Long> {

    public Optional<SubscriptionType> findByName(String name);


    @Override
    public <S extends SubscriptionType> S save(S entity);


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

    @Override
    public void deleteById(Long aLong);


    @Override
    public void delete(SubscriptionType entity);


    @Override
    public void deleteAll(Iterable<? extends SubscriptionType> entities);


    @Override
    public void deleteAll();
}
