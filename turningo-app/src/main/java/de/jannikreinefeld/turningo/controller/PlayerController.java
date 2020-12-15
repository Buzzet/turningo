package de.jannikreinefeld.turningo.controller;

import de.jannikreinefeld.turningo.dao.MongoService;
import de.jannikreinefeld.turningo.exceptions.TeamAlreadyFullException;
import de.jannikreinefeld.turningo.models.Playcard;
import de.jannikreinefeld.turningo.models.PlayerRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class PlayerController {

    @Autowired
    MongoService mongoService;

    @CrossOrigin
    @PostMapping("/api/players")
    public Playcard addPlayer(@RequestBody final PlayerRequest player) {
        final Optional<Playcard> playcardOptional = this.mongoService.getPlaycardByTeam(player.getTeam());
        final Playcard playcard;
        if (playcardOptional.isPresent()) {
            playcard = playcardOptional.get();
            if (playcard.getPlayer2() != null) {
                throw new TeamAlreadyFullException("Das Team " + player.getTeam() + " hat bereits zwei Spieler und ist damit voll!");
            }
            playcard.setPlayer2(player.toPlayer());
        } else {
            playcard = Playcard.builder().player1(player.toPlayer()).pointDifference(0).team(player.getTeam()).amountWins(0).build();
        }
        this.mongoService.updatePlaycard(playcard);
        return playcard;
    }
}
