package de.jannikreinefeld.turningo.models;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Builder
@Setter
@ToString
@Getter
public class Player {

  private String firstName;
  private String lastName;
  private String email;
  private String phone;

}
