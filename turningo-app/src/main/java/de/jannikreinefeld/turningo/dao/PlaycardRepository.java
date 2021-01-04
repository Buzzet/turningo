package de.jannikreinefeld.turningo.dao;

import de.jannikreinefeld.turningo.models.Playcard;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface PlaycardRepository extends MongoRepository<Playcard, String> {

    Optional<Playcard> getPlaycardByTeam(String Team);

}
