package de.jannikreinefeld.turningo.dao;

import de.jannikreinefeld.turningo.models.Playcard;
import de.jannikreinefeld.turningo.models.PlaycardResponse;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MongoService {

  @Autowired
  private PlaycardRepository repo;

  public PlaycardResponse addPlaycard(final Playcard playcard) {
    this.repo.save(playcard);
    return PlaycardResponse.builder().documentID(playcard.getId()).playcard(playcard).build();
  }

  public List<Playcard> getAllPlaycards() {
    return this.repo.findAll();
  }

  public Optional<Playcard> getPlaycard(final String playcardId) {
    return this.repo.findById(playcardId);
  }

  public List<Playcard> getTeam(final String teamName) {
    return this.repo.findByTeam(teamName);
  }
}
