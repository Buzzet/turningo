package de.jannikreinefeld.turningo.models;

import lombok.*;
import org.springframework.data.annotation.Id;

@Getter
@Setter
@ToString
@Builder
@EqualsAndHashCode
public class Playcard {

    @Id
    private String id;
    private Player player1;
    private Player player2;
    private String team;
    private int amountWins;
    private int pointDifference;
    private int matchesPlayed;

}
