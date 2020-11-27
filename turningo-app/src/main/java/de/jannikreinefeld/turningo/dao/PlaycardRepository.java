package de.jannikreinefeld.turningo.dao;

import de.jannikreinefeld.turningo.models.Playcard;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PlaycardRepository extends MongoRepository<Playcard, String> {

  public List<Playcard> findByTeam(String Team);

}
