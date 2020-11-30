package de.jannikreinefeld.turningo.dao;

import de.jannikreinefeld.turningo.models.Playcard;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PlaycardRepository extends MongoRepository<Playcard, String> {

    List<Playcard> findByTeam(String Team);

}
