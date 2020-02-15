
package su.fontru.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;
import su.fontru.model.Conference;
import su.fontru.model.Subscription;
import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface SubscriptionRepository extends CrudRepository<Subscription, Long> {

    public Iterable<Subscription> findAllByConferenceId(Long aLong);

    @Override
    public <S extends Subscription> S save(S entity);


    @Override
    public <S extends Subscription> Iterable<S> saveAll(Iterable<S> entities);


    @Override
    public Optional<Subscription> findById(Long aLong);


    @Override
    public boolean existsById(Long aLong);


    @Override
    public Iterable<Subscription> findAll();


    @Override
    public Iterable<Subscription> findAllById(Iterable<Long> longs);


    @Override
    public long count();

    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public void deleteById(Long aLong);


    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public void delete(Subscription entity);


    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public void deleteAll(Iterable<? extends Subscription> entities);


    @PreAuthorize("hasRole('ADMIN')")
    @Override
    public void deleteAll();
}
