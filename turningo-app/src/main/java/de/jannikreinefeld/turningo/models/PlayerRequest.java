package de.jannikreinefeld.turningo.models;

import lombok.Getter;

@Getter
public class PlayerRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String team;

    public Player toPlayer() {
        return Player.builder().firstName(this.firstName).email(this.email).lastName(this.lastName).phone(this.phone).build();
    }
}
