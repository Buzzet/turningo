package de.jannikreinefeld.turningo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class PlaycardNotFoundException extends RuntimeException {
    public PlaycardNotFoundException(final String message) {
        super(message);
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, message);
    }
}
