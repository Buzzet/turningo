package de.jannikreinefeld.turningo.controller;

import de.jannikreinefeld.turningo.TurningoApplication;
import de.jannikreinefeld.turningo.dao.MongoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TournamentController {

    @Autowired
    MongoService mongoService;

    private static final Logger log = LoggerFactory.getLogger(TurningoApplication.class);

    @CrossOrigin
    @DeleteMapping("/tournament")
    public void deleteTournament() {
        this.mongoService.deleteTournament();
    }
}
