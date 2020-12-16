package de.jannikreinefeld.turningo.controller;

import de.jannikreinefeld.turningo.TurningoApplication;
import de.jannikreinefeld.turningo.dao.MongoService;
import de.jannikreinefeld.turningo.models.Playcard;
import de.jannikreinefeld.turningo.models.PlaycardResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PlaycardController {

    @Autowired
    MongoService mongo;


    private static final Logger log = LoggerFactory.getLogger(TurningoApplication.class);

    @PostMapping("/api/playcard")
    public PlaycardResponse createPlaycard(@RequestBody final Playcard playcard) {
        return this.mongo.addPlaycard(playcard);
    }

    @GetMapping("/api/playcard")
    public List<Playcard> getAllPlaycards() {
        return this.mongo.getAllPlaycards();
    }

    @GetMapping("/api/playcard/{playcardId}")
    public Playcard getPlaycard(@PathVariable final String playcardId) {
        final Optional<Playcard> playcardOptional = this.mongo.getPlaycard(playcardId);
        if (playcardOptional.isPresent()) {
            return playcardOptional.get();
        }
        return null; //TODO ErrorResponse
    }

    @CrossOrigin
    @PutMapping("/api/playcard")
    public Playcard updatePlaycard(@RequestBody final Playcard playcard) {
        return this.mongo.updatePlaycard(playcard);
    }
}
