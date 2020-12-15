package de.jannikreinefeld.turningo.controller;

import de.jannikreinefeld.turningo.dao.MongoService;
import de.jannikreinefeld.turningo.models.Court;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CourtController {

    @Autowired
    MongoService mongoService;

    @CrossOrigin
    @GetMapping("/api/courts")
    public List<Court> getCourts() {
        return this.mongoService.getAllCourts();
    }

    @CrossOrigin
    @GetMapping("/api/courts/{courtId}")
    public Court getCourt(@PathVariable final String courtId) {
        final Optional<Court> court = this.mongoService.getCourtById(courtId);
        if (court.isPresent()) {
            return court.get();
        }
        return null; //TODO ExceptionMapping
    }

    @CrossOrigin
    @PostMapping("/api/courts")
    public Court addCourt(@RequestBody final Court court) {
        return this.mongoService.addCourt(court);
    }

    @CrossOrigin
    @DeleteMapping("/api/courts/{courtId}")
    public void deleteCourt(@PathVariable final String courtId) {
        this.mongoService.deleteCourtById(courtId);
    }
}
