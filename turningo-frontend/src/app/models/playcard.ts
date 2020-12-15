import {Player} from './player';

export interface Playcard {
  id: string;
  player1: Player;
  player2: Player;
  team: string;
  amountWins: number;
  pointDifference: number;
  matchesPlayed: number;
}
