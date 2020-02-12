package su.fontru.model;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
public class Conference {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String name;

  @Temporal(TemporalType.DATE)
  private LocalDate earlyRegistration;
  @Temporal(TemporalType.DATE)
  private LocalDate lateRegistration;

  @OneToMany
  private List<InscriptionType> inscriptionTypes;

  @OneToMany
  private List<Inscription> inscriptions;

}
