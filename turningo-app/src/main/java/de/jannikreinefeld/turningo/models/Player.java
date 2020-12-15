package de.jannikreinefeld.turningo.models;

import lombok.*;

@Builder
@Setter
@ToString
@Getter
@EqualsAndHashCode
public class Player {

    private String firstName;
    private String lastName;
    private String email;
    private String phone;

}
