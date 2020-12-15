import {Playcard} from './playcard';

export interface Matchplan {
  id: string;
  matchplan: Map<string, Playcard[]>;
}
