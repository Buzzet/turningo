package de.jannikreinefeld.turningo.controller;

import de.jannikreinefeld.turningo.dao.MongoService;
import de.jannikreinefeld.turningo.models.Matchplan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MatchplanController {

    @Autowired
    MongoService mongoService;

    @CrossOrigin
    @GetMapping("/api/matchplan/swiss-system")
    public Matchplan getMatchplanSwissSystem() {
        final Matchplan matchplan = Matchplan.getCurrentMatchplan(this.mongoService.getAllCourts(), this.mongoService.getAllPlaycards());
        this.mongoService.saveMatchplan(matchplan);
        return matchplan;
    }
}
