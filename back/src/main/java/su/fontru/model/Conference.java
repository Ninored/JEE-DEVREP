package su.fontru.model;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Entity
public class Conference {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String name;
  private Date earlyRegistration;
  private Date lateRegistration;

  @OneToMany
  private List<SubscriptionType> subscriptionTypes;

  @OneToMany
  private List<Subscription> subscriptions;

}
