package su.fontru.model;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Inscription {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String confName;
  private String title;
  private String firstName;
  private String lastName;
  private String institution;
  private String address;
  private long zip;
  private String city;
  private String country;
  private String email;
  private String phone;
  private String inscriptionType;

}
