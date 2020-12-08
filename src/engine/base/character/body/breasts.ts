import {Capacity, Penetrable} from "./penetrable";
import {Insertable, Size} from "./insertable";
import {Contents} from "./appearance";

export class Breasts {

  cupSize: CupSize;
  //band and bust size, for when you really want to be scientific about boobs
  areolaSize: number;
  nipples: Nipples
  contents?: Contents; //for lactation

  //rating - resolve descriptions based on input sizes?

  constructor(cupSize: CupSize, areolaSize: number, nipples: Nipples, contents?: Contents) {
    this.cupSize = cupSize;
    this.areolaSize = areolaSize;
    this.nipples = nipples;
    this.contents = contents;
  }

}

export class Nipples {

  size: Size;

  constructor(size: Size) {
    this.size = size;
  }

}

export class NipplesPenetrable extends Nipples implements Penetrable {

  capacity: Capacity;
  virginity: boolean;

  //probably some thing eventually, there's only really the "normal" and full on pussynipples

  constructor(size: Size, capacity: Capacity, virginity = true) {
    super(size);
    this.capacity = capacity;
    this.virginity = virginity;
  }

}

export class NipplesInsertable extends Nipples implements Insertable {

  virginity: boolean;

  //keep in mind the shape of these can be a penis (including balls)

  constructor(size: Size, virginity: boolean) {
    super(size);
    this.virginity = virginity;
  }

  //TODO I wonder if methods from Insertable using size will work here...

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