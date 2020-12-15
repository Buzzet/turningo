package de.jannikreinefeld.turningo.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Matchplan {

    @Id
    private String id;
    private Map<String, ArrayList<Playcard>> matchplan = new HashMap<>();

    public Matchplan(final Map<String, ArrayList<Playcard>> matchplan) {
        this.matchplan = matchplan;
    }
    
    public static Matchplan matchNewGame(final List<Court> courts, final List<Playcard> playcards) {
        int i = 0;
        final Map<String, ArrayList<Playcard>> matchplan = new HashMap<>();
        for (final Court court : courts) {
            if (i + 1 < playcards.size()) {
                final Playcard[] playArr = new Playcard[2];
                playArr[0] = playcards.get(i);
                playArr[1] = playcards.get(i + 1);

                final ArrayList<Playcard> playArrList = new ArrayList<>();
                playArrList.add(playcards.get(i));
                playArrList.add(playcards.get(i + 1));
                matchplan.put(court.getId(), playArrList);
                i += 2;
            } else {
                final Playcard[] playArr = new Playcard[2];
                final ArrayList<Playcard> playArrList = new ArrayList<>();
                matchplan.put(court.getId(), playArrList);
            }
        }
        return new Matchplan(matchplan);
    }

    private void matchRunningGame(final List<Court> courts, final List<Playcard> playcards) {

    }


}
