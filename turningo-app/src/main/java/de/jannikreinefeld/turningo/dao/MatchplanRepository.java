package de.jannikreinefeld.turningo.dao;

import de.jannikreinefeld.turningo.models.Matchplan;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MatchplanRepository extends MongoRepository<Matchplan, String> {
}
