package de.jannikreinefeld.turningo.models;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@Builder
@Getter
@Setter
@ToString
public class Court {

    @Id
    private String id;

    private String courtname;
}
