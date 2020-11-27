package de.jannikreinefeld.turningo.models;

import io.swagger.v3.oas.annotations.Hidden;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@ToString
@Builder
public class Playcard {

  @Hidden
  @Id
  private String id;
  private Player player;
  private String team;
  private int amountWins;
  private int pointDifference;

}
