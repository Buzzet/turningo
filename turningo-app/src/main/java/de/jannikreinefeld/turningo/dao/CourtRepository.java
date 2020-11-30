package de.jannikreinefeld.turningo.dao;

import de.jannikreinefeld.turningo.models.Court;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CourtRepository extends MongoRepository<Court, String> {
}
