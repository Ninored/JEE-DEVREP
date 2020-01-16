package su.fontru.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Utilisateur {
  
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  

  private String name;

  public Utilisateur() {
    this.name = "test";
  }

  public Utilisateur(String n) {
    this.name = n;
  }

  public void setName(String n) {
    this.name = n;
  }

  public String getName() {
    return this.name;
  }

}
