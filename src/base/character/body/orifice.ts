import {Virgin} from "./appearance";

export class Contents {

  type: string;
  current: number;
  capacity: number;

  constructor(type: string, amount: number, capacity: number) {
    this.type = type;
    this.current = amount;
    this.capacity = capacity;
  }

}

export abstract class Orifice implements Virgin {

  virginity: boolean;
  depth: number;
  width: number;
  elasticity: number;
  contents?: Contents;

  constructor(depth: number, width: number, elasticity: number, virginity = true, contents?: Contents) {
    this.virginity = virginity
    this.depth = depth;
    this.width = width;
    this.elasticity = elasticity;
    this.contents = contents;
  }

  //TODO methods to evaluate fits (for now only penises... down the line probably toys, tails...


}

export class Mouth extends Orifice {

}

export class Anus extends Orifice {

}

export class Vagina extends Orifice {

}