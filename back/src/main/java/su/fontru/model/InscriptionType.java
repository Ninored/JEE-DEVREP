package su.fontru.model;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class InscriptionType {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String libelle;
  private String tarif;

  @OneToOne
  private Conference conference;

 

}
