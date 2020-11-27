import {Size} from "./appearance";
import {Orifice} from "./orifice";

export class Breasts {

  cupSize: CupSize;
  //band and bust size, maybe
  nipples: Nipples

  //rating - resolve descriptions based on input sizes?

  constructor(cupSize: CupSize, nipples: Nipples) {
    this.cupSize = cupSize;
    this.nipples = nipples;
  }

}

export class Nipples implements Size {

  length: number;
  width: number;
  areolaSize: number;
  fuckable?: FuckableNipples;


  constructor(length: number, width: number, areolaSize: number, fuckable?: FuckableNipples) {
    this.length = length;
    this.width = width;
    this.areolaSize = areolaSize;
    this.fuckable = fuckable;
  }

}

class FuckableNipples extends Orifice {

}

//uses US cup sizes
// noinspection JSUnusedGlobalSymbols
export enum CupSize {
  AA,
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O
}