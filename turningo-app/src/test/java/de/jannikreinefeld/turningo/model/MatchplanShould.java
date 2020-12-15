package de.jannikreinefeld.turningo.model;

import de.jannikreinefeld.turningo.models.Court;
import de.jannikreinefeld.turningo.models.Matchplan;
import de.jannikreinefeld.turningo.models.Playcard;
import org.junit.jupiter.api.Test;

import java.util.LinkedList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class MatchplanShould {

    @Test
    public void createMapWithAmountOfCourts() {
        //given
        final List<Court> courts = new LinkedList<>();
        courts.add(Court.builder().courtname("1").id("1").build());
        courts.add(Court.builder().courtname("2").id("2").build());
        courts.add(Court.builder().courtname("3").id("3").build());
        courts.add(Court.builder().courtname("4").id("4").build());
        courts.add(Court.builder().courtname("5").id("5").build());
        final List<Playcard> playcards = new LinkedList<>();
        playcards.add(Playcard.builder().matchesPlayed(0).build());
        playcards.add(Playcard.builder().matchesPlayed(0).build());
        playcards.add(Playcard.builder().matchesPlayed(0).build());
        playcards.add(Playcard.builder().matchesPlayed(0).build());
        playcards.add(Playcard.builder().matchesPlayed(0).build());
        playcards.add(Playcard.builder().matchesPlayed(0).build());
        playcards.add(Playcard.builder().matchesPlayed(0).build());
        playcards.add(Playcard.builder().matchesPlayed(0).build());
        playcards.add(Playcard.builder().matchesPlayed(0).build());
        playcards.add(Playcard.builder().matchesPlayed(0).build());
        playcards.add(Playcard.builder().matchesPlayed(0).build());

        //when
        final Matchplan plan = new Matchplan(courts, playcards);

        //then
        assertThat(plan.getMatchplan().size()).isEqualTo(courts.size());
    }


    @Test
    public void createADifferentMapEachTime() {
        //given
        final List<Court> courts = new LinkedList<>();
        courts.add(Court.builder().courtname("1").id("1").build());
        courts.add(Court.builder().courtname("2").id("2").build());
        courts.add(Court.builder().courtname("3").id("3").build());
        courts.add(Court.builder().courtname("4").id("4").build());
        courts.add(Court.builder().courtname("5").id("5").build());
        final List<Playcard> playcards = new LinkedList<>();
        playcards.add(Playcard.builder().id("1").matchesPlayed(0).build());
        playcards.add(Playcard.builder().id("2").matchesPlayed(0).build());
        playcards.add(Playcard.builder().id("3").matchesPlayed(0).build());
        playcards.add(Playcard.builder().id("4").matchesPlayed(0).build());
        playcards.add(Playcard.builder().id("5").matchesPlayed(0).build());
        playcards.add(Playcard.builder().id("6").matchesPlayed(0).build());
        playcards.add(Playcard.builder().id("7").matchesPlayed(0).build());
        playcards.add(Playcard.builder().id("8").matchesPlayed(0).build());
        playcards.add(Playcard.builder().id("9").matchesPlayed(0).build());
        playcards.add(Playcard.builder().id("10").matchesPlayed(0).build());
        playcards.add(Playcard.builder().id("11").matchesPlayed(0).build());

        final Matchplan plan1 = new Matchplan(courts, playcards);
        final Matchplan plan2 = new Matchplan(courts, playcards);

        System.out.println(plan1);
        assertThat(plan1).isNotEqualTo(plan2);
    }

    @Test
    public void createMatchplanWithLowPlayerCount() {
        //given
        final List<Court> courts = new LinkedList<>();
        courts.add(Court.builder().courtname("1").id("1").build());
        courts.add(Court.builder().courtname("2").id("2").build());
        courts.add(Court.builder().courtname("3").id("3").build());
        courts.add(Court.builder().courtname("4").id("4").build());
        courts.add(Court.builder().courtname("5").id("5").build());
        final List<Playcard> playcards = new LinkedList<>();
        playcards.add(Playcard.builder().id("1").matchesPlayed(0).build());
        playcards.add(Playcard.builder().id("2").matchesPlayed(0).build());

        //when
        final Matchplan plan = new Matchplan(courts, playcards);

        //then
        assertThat(plan.getMatchplan().size()).isEqualTo(courts.size());
    }
}