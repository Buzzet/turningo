package de.jannikreinefeld.turningo.models;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class PlaycardResponse {

  private final Playcard playcard;
  private final String documentID;
}
