import {Capacity, Contents, Penetrable} from "./Penetrable";
import {Insertable, Size} from "./Insertable";

export class Breasts {

  cupSize: CupSize;
  //band and bust size, for when you really want to be scientific about boobs
  areolaSize: number;
  nipples: Nipples;
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
  private special: NipplesPenetrable | NipplesInsertable;

  constructor(size: Size) {
    this.size = size;
    this.special = new NipplesPenetrable(new Capacity(0, 0, 0, 0));
  }

  penetrable(): NipplesPenetrable {
    return this.special as NipplesPenetrable;
  }

  insertable(): NipplesInsertable {
    return this.special as NipplesInsertable;
  }

}

export class NipplesPenetrable implements Penetrable {

  capacity: Capacity;
  virgin: boolean;

  //probably some thing eventually, there's only really the "normal" and full on pussynipples

  constructor(capacity: Capacity, virgin = true) {
    this.capacity = capacity;
    this.virgin = virgin;
  }

}

export class NipplesInsertable implements Insertable {

  size: Size;
  virgin: boolean;

  //keep in mind the shape of these can be a penis (including balls)

  constructor(size: Size, virgin: boolean) {
    this.size = size;
    this.virgin = virgin;
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