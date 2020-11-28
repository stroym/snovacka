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

export abstract class Penetrable implements Virgin {

  virginity: boolean;
  depth: number;
  width: number;
  elasticity: number; // how much more can fit inside above base capacity
  // - some threshold for determining when stretching has long-term effect is likely necessary; might wanna make a class for that
  //recovery: number; how well an orifice can recover from stretching (ergo how much - if at all - will base capacity increase after stretching
  //tightness? maybe, I guess
  contents?: Contents;

  constructor(depth: number, width: number, elasticity: number, virginity = true, contents?: Contents) {
    this.virginity = virginity;
    this.depth = depth;
    this.width = width;
    this.elasticity = elasticity;
    this.contents = contents;
  }

  //TODO methods to evaluate fits (for now only penises... down the line probably toys, tails...

}

export class Mouth extends Penetrable {

}

export class Anus extends Penetrable {

}

export class Vagina extends Penetrable {

}