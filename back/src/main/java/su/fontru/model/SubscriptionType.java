package su.fontru.model;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class SubscriptionType {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @OneToOne
  private Conference conference;

  private String name;
  private String earlyPrice;
  private String latePrice;

  public SubscriptionType() {}

  public SubscriptionType(String n, String e, String l) {
    name = n;
    earlyPrice = e;
    latePrice = l;
  }

  public String getLatePrice() {
    return latePrice;
  }

  public void setLatePrice(String latePrice) {
    this.latePrice = latePrice;
  }

  public String getEarlyPrice() {
    return earlyPrice;
  }

  public void setEarlyPrice(String earlyPrice) {
    this.earlyPrice = earlyPrice;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
