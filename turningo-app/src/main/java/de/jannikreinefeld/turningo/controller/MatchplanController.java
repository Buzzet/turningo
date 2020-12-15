package de.jannikreinefeld.turningo.controller;

import de.jannikreinefeld.turningo.dao.MongoService;
import de.jannikreinefeld.turningo.models.Matchplan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MatchplanController {

    @Autowired
    MongoService mongoService;

    @GetMapping("/spielplan/swiss-system")
    public Matchplan getMatchplanSwissSystem() {
        if (this.mongoService.getAllMatchplans() == null) {
            final Matchplan matchplan = Matchplan.matchNewGame(this.mongoService.getAllCourts(), this.mongoService.getAllPlaycards());
            this.mongoService.saveMatchplan(matchplan);
            return matchplan;
        }
        return this.mongoService.getAllMatchplans();
    }
}
