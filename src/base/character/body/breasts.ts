import {Contents, Penetrable} from "./penetrable";

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

export class Nipples {

  length: number;
  width: number;
  //TODO, probably type - normal, penis nipples, fuckable nipples possibly create subclasses?
  areolaSize: number;
  contents?: Contents;
  penetrable?: FuckableNipples;

  constructor(length: number, width: number, areolaSize: number, contents = undefined, penetrable = undefined) {
    this.length = length;
    this.width = width;
    this.areolaSize = areolaSize;
    this.contents = contents;
    this.penetrable = penetrable;
  }

}

class FuckableNipples extends Penetrable {

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