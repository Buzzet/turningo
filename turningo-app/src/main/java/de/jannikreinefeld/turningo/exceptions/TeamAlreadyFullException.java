package de.jannikreinefeld.turningo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class TeamAlreadyFullException extends RuntimeException {
    public TeamAlreadyFullException(final String message) {
        super(message);
        throw new ResponseStatusException(HttpStatus.CONFLICT, message);
    }
}
