package su.fontru.model;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.util.Date;
import java.util.List;

@Entity
public class Conference {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String name;
  private Date earlyRegistration;
  private Date lateRegistration;

  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  private List<SubscriptionType> subscriptionTypes;

  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Subscription> subscriptions;

  public Conference() {}

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Date getEarlyRegistration() {
    return earlyRegistration;
  }

  public void setEarlyRegistration(Date earlyRegistration) {
    this.earlyRegistration = earlyRegistration;
  }

  public Date getLateRegistration() {
    return lateRegistration;
  }

  public void setLateRegistration(Date lateRegistration) {
    this.lateRegistration = lateRegistration;
  }

  public List<SubscriptionType> getSubscriptionTypes() {
    return subscriptionTypes;
  }

  public void setSubscriptionTypes(List<SubscriptionType> subscriptionTypes) {
    this.subscriptionTypes = subscriptionTypes;
  }

  public List<Subscription> getSubscriptions() {
    return subscriptions;
  }

  public void setSubscriptions(List<Subscription> subscriptions) {
    this.subscriptions = subscriptions;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }
}
