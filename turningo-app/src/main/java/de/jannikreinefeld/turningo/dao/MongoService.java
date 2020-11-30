package de.jannikreinefeld.turningo.dao;

import de.jannikreinefeld.turningo.models.Court;
import de.jannikreinefeld.turningo.models.Playcard;
import de.jannikreinefeld.turningo.models.PlaycardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class MongoService {

    @Autowired
    private PlaycardRepository playcardRepo;

    @Autowired
    private CourtRepository courtRepo;

    public PlaycardResponse addPlaycard(final Playcard playcard) {
        this.playcardRepo.save(playcard);
        return PlaycardResponse.builder().documentID(playcard.getId()).playcard(playcard).build();
    }

    public List<Playcard> getAllPlaycards() {
        return this.playcardRepo.findAll();
    }

    public Optional<Playcard> getPlaycard(final String playcardId) {
        return this.playcardRepo.findById(playcardId);
    }

    public List<Playcard> getTeam(final String teamName) {
        return this.playcardRepo.findByTeam(teamName);
    }

    public List<Court> getAllCourts() {
        return this.courtRepo.findAll();
    }

    public Optional<Court> getCourtById(final String id) {
        return this.courtRepo.findById(id);
    }

    public Court addCourt(final Court court) {
        this.courtRepo.save(court);
        return court;
    }

    public Playcard updatePlaycard(final Playcard playcard) {
        if (playcard.getId() == null) {
            //TODO Exception Mapping
        }
        return this.playcardRepo.save(playcard);
    }
}
